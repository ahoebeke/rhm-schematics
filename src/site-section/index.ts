import {
  apply,
  chain,
  FileEntry,
  forEach,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import {parseName} from "@schematics/angular/utility/parse-name";
import {strings} from '@angular-devkit/core';
import {Schema} from "./schema";


export function dataProvider(options: Schema): Rule {

  return (_tree: Tree, context: SchematicContext) => {

    // Show the options for this Schematics.
    context.logger.info('Site-Section options: ' + JSON.stringify(options, null, 2));

    if (options.path === undefined) {
      options.path = 'src/app';
    }
    const parsedPath = parseName(options.path, options.name);
    options.name = parsedPath.name;
    options.path = parsedPath.path;

    // The chain rule allows us to chain multiple rules and apply them one after the other.
    return chain([

      // ...((options['subSections'] && options['subSections'] !== '') ? [schematic('site-sub-section', options)] : []),

      mergeWith(apply(url('./files'), [
          template({
            ...strings,
            ...options
          }),
          move(parsedPath.path),
          forEach((fileEntry: FileEntry) => {
            console.log('Found FileEntry ' + fileEntry.path);
            if (_tree.exists(fileEntry.path)) {
              console.log(' -> Already exists');
              return null;
            }
            return fileEntry;
          }),
        ]),
      )
    ]);
  };
}
