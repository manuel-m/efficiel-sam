import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
 
import common from './rollup.config.common.js'

export default {
entry: common.entry,
  dest: common.dest,
  format: common.format,
  plugins: [
    serve({
    	port:3000
    }),
    livereload({
    	watch: ['dist', 'index.html']
    })
  ]
}