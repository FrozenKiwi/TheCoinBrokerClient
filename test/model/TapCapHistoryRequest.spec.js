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
    instance = new TheCoinBroker.TapCapHistoryRequest();
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

  describe('TapCapHistoryRequest', function() {
    it('should create an instance of TapCapHistoryRequest', function() {
      // uncomment below and update the code to test TapCapHistoryRequest
      //var instane = new TheCoinBroker.TapCapHistoryRequest();
      //expect(instance).to.be.a(TheCoinBroker.TapCapHistoryRequest);
    });

    it('should have the property fromTimestamp (base name: "fromTimestamp")', function() {
      // uncomment below and update the code to test the property fromTimestamp
      //var instane = new TheCoinBroker.TapCapHistoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property untilTimestamp (base name: "untilTimestamp")', function() {
      // uncomment below and update the code to test the property untilTimestamp
      //var instane = new TheCoinBroker.TapCapHistoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property userAccount (base name: "userAccount")', function() {
      // uncomment below and update the code to test the property userAccount
      //var instane = new TheCoinBroker.TapCapHistoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property random (base name: "random")', function() {
      // uncomment below and update the code to test the property random
      //var instane = new TheCoinBroker.TapCapHistoryRequest();
      //expect(instance).to.be();
    });

    it('should have the property signature (base name: "signature")', function() {
      // uncomment below and update the code to test the property signature
      //var instane = new TheCoinBroker.TapCapHistoryRequest();
      //expect(instance).to.be();
    });

  });

}));
