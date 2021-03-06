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
    instance = new TheCoinBroker.TapCapQueryResponse();
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

  describe('TapCapQueryResponse', function() {
    it('should create an instance of TapCapQueryResponse', function() {
      // uncomment below and update the code to test TapCapQueryResponse
      //var instane = new TheCoinBroker.TapCapQueryResponse();
      //expect(instance).to.be.a(TheCoinBroker.TapCapQueryResponse);
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instane = new TheCoinBroker.TapCapQueryResponse();
      //expect(instance).to.be();
    });

    it('should have the property weeklyTopup (base name: "weeklyTopup")', function() {
      // uncomment below and update the code to test the property weeklyTopup
      //var instane = new TheCoinBroker.TapCapQueryResponse();
      //expect(instance).to.be();
    });

  });

}));
