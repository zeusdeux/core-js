var isObject = require('../internals/is-object');
var nativeIsSealed = Object.isSealed;
var FAILS_ON_PRIMITIVES = require('../internals/fails')(function () { nativeIsSealed(1); });

// `Object.isSealed` method
// https://tc39.github.io/ecma262/#sec-object.issealed
require('../internals/export')({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  isSealed: function isSealed(it) {
    return isObject(it) ? nativeIsSealed ? nativeIsSealed(it) : false : true;
  }
});
