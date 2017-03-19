import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
    entry: 'src/inferno-renderer.js',
    external: [],
    moduleName: 'inferno-renderer',
    plugins: [
        replace({
            'process.env.NODE_ENV': JSON.stringify('killme'),
        }),
        buble({
            jsx: 'createElement'
        }),
        // uglify(),
        nodeResolve({
            jsnext: true,
            browser: true
        }),
        commonjs()
    ],
    // format: 'iife',
    format: 'es',
    dest: 'build/inferno-renderer.js'
};
