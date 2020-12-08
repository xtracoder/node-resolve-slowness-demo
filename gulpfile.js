const gulp = require('gulp')
const rollup = require('rollup')
const rollupCommonJS = require("@rollup/plugin-commonjs");
const rollupResolve = require("@rollup/plugin-node-resolve");

module.exports.withNodeResolve = gulp.series(distJs_withNodeResolve)
module.exports.noNodeResolve = gulp.series(distJs_noNodeResolve)

function distJs_withNodeResolve(callback) {
    return distJs(true, callback)
}

function distJs_noNodeResolve(callback) {
    return distJs(false, callback)
}


function distJs(withNodeResolve, callback) {
    let plugins = []
    if( withNodeResolve )
        plugins.push(rollupResolve.nodeResolve())

    plugins.push(
        rollupCommonJS({requireReturnsDefault: "namespace"})
    )

    return rollup.rollup({
            input: './src/dist.js',
            plugins: plugins,
            external: ['window', 'application'],
            cache: true,
            treeshake: false,
            perf: true
        }).then(bundle => {
            //console.info(bundle.getTimings())
            return bundle.write({
                name: "app",
                file: 'dist/dist.js',
                format: 'iife',
                globals: {window: 'window'},
                // sourcemap: true
            });
        }).catch(error => {
            console.error(error);
            throw error;
        });
}
