'use strict';

var createFilter = require('rollup-pluginutils').createFilter;
var fest = require('fest');

function defaultCompile (template) {
  return 'export default ' + fest.compile(template) + ';\n';
}

module.exports = function festRollupPlugin (options) {
  options = options || {};

  if (!options.include) {
    options.include = '**/*.xml';
  }

  var filter = createFilter(options.include, options.exclude);
  var compile = typeof options.compile === 'function' ? options.compile : defaultCompile;

  return {
    name: 'fest',
    transform: function transformFest (code, id) {
      if (filter(id)) {
        return {
          code: compile(id),
          map: { mappings: '' }
        };
      }
    }
  };
};
