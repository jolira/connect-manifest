/*jslint node: true, vars: true, indent: 4 */
(function (module) {
    "use strict";

    if (process.env.NODE_DEBUG && /connect-manifest/.test(process.env.NODE_DEBUG)) {
        return module.exports = function () {
            var args = ['connect-manifest:'];

            for (var idx in arguments) {
                args.push(arguments[idx]);
            }
            console.error.apply(this, args);
        };
    }

    return module.exports = function () {
    };
})(module);