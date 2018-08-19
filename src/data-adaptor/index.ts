import {strings} from '@angular-devkit/core';
import {apply, chain, FileEntry, forEach, mergeWith, move, Rule, SchematicContext, template, Tree, url} from '@angular-devkit/schematics';
import {Schema} from "./schema";
import {parseName} from "@schematics/angular/utility/parse-name";


// Instead of `any`, it would make sense here to get a schema-to-dts package and output the
// interfaces so you get type-safe options.
export function dataAdaptor(options: Schema): Rule {
  return (_tree: Tree, context: SchematicContext) => {

    // Show the options for this Schematics.
    context.logger.info('Data Adaptor options: ' + JSON.stringify(options, null, 2));

    if (options.path === undefined) {
      options.path = 'src/app';
    }
    const parsedPath = parseName(options.path, options.name);
    options.name = parsedPath.name;
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
              //_tree.overwrite(fileEntry.path, fileEntry.content);
              return null;
            }
            return fileEntry;
          }),
        ]),
      )
    ]);
  };
}
