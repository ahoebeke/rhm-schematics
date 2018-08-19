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
    context.logger.info('Site Sub-Section options: ' + JSON.stringify(options, null, 2));

    if (options.path === undefined) {
      options.path = 'src/app';
    }
    const parsedPath = parseName(options.path, options.sectionname);
    options.sectionname = parsedPath.name;
    options.path = parsedPath.path;

    // The chain rule allows us to chain multiple rules and apply them one after the other.
    return chain([

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
      ),
      () => {
        context.logger.info('To do manually: add a route for this sub-section to the ' + strings.dasherize(options.sectionname) + '-routing.module.ts file.');
      }
    ]);
  };
}
