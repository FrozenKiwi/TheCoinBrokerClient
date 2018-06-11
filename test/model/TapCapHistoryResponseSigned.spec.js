/**
 * TheCoin Broker
 * TheCoin broker services.  To be implemented allowing exchange of local currency to THESE
 *
 * OpenAPI spec version: 0.0.1
 * Contact: stephen.taylor.dev@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TheCoinBroker);
  }
}(this, function(expect, TheCoinBroker) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TheCoinBroker.TapCapHistoryResponseSigned();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('TapCapHistoryResponseSigned', function() {
    it('should create an instance of TapCapHistoryResponseSigned', function() {
      // uncomment below and update the code to test TapCapHistoryResponseSigned
      //var instane = new TheCoinBroker.TapCapHistoryResponseSigned();
      //expect(instance).to.be.a(TheCoinBroker.TapCapHistoryResponseSigned);
    });

    it('should have the property response (base name: "response")', function() {
      // uncomment below and update the code to test the property response
      //var instane = new TheCoinBroker.TapCapHistoryResponseSigned();
      //expect(instance).to.be();
    });

    it('should have the property signature (base name: "signature")', function() {
      // uncomment below and update the code to test the property signature
      //var instane = new TheCoinBroker.TapCapHistoryResponseSigned();
      //expect(instance).to.be();
    });

  });

}));
