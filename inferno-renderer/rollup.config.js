import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
    entry: 'src/index.js',
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
    format: 'iife',
    dest: 'dist/bundle.js'
};
