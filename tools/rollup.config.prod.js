import buble from 'rollup-plugin-buble';
import common from './rollup.config.common.js'

export default {
  entry: common.entry,
  dest: common.dest,
  format: common.format,
  moduleName:common.moduleName,
  plugins: [
        buble({
            jsx: 'createElement'
        })
    ]
}