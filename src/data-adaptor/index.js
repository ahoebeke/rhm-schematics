"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const parse_name_1 = require("@schematics/angular/utility/parse-name");
// Instead of `any`, it would make sense here to get a schema-to-dts package and output the
// interfaces so you get type-safe options.
function dataAdaptor(options) {
    return (_tree, context) => {
        // Show the options for this Schematics.
        context.logger.info('Data Adaptor options: ' + JSON.stringify(options, null, 2));
        if (options.path === undefined) {
            options.path = 'src/app';
        }
        const parsedPath = parse_name_1.parseName(options.path, options.name);
        options.name = parsedPath.name;
        options.path = parsedPath.path;
        // The chain rule allows us to chain multiple rules and apply them one after the other.
        return schematics_1.chain([
            schematics_1.mergeWith(schematics_1.apply(schematics_1.url('./files'), [
                schematics_1.template(Object.assign({}, core_1.strings, options)),
                schematics_1.move(parsedPath.path),
                schematics_1.forEach((fileEntry) => {
                    console.log('Found FileEntry ' + fileEntry.path);
                    if (_tree.exists(fileEntry.path)) {
                        console.log(' -> Already exists');
                        //_tree.overwrite(fileEntry.path, fileEntry.content);
                        return null;
                    }
                    return fileEntry;
                }),
            ]))
        ]);
    };
}
exports.dataAdaptor = dataAdaptor;
//# sourceMappingURL=index.js.map