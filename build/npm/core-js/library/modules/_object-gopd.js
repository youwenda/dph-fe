"use strict";var exports=module.exports={};

var _getOwnPropertyDescriptor = require('../../../babel-runtime/core-js/object/get-own-property-descriptor.js');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pIE = require('./_object-pie.js'),
    createDesc = require('./_property-desc.js'),
    toIObject = require('./_to-iobject.js'),
    toPrimitive = require('./_to-primitive.js'),
    has = require('./_has.js'),
    IE8_DOM_DEFINE = require('./_ie8-dom-define.js'),
    gOPD = _getOwnPropertyDescriptor2.default;

exports.f = require('./_descriptors.js') ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};