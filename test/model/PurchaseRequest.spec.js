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
    instance = new TheCoinBroker.PurchaseRequest();
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

  describe('PurchaseRequest', function() {
    it('should create an instance of PurchaseRequest', function() {
      // uncomment below and update the code to test PurchaseRequest
      //var instane = new TheCoinBroker.PurchaseRequest();
      //expect(instance).to.be.a(TheCoinBroker.PurchaseRequest);
    });

    it('should have the property userData (base name: "userData")', function() {
      // uncomment below and update the code to test the property userData
      //var instane = new TheCoinBroker.PurchaseRequest();
      //expect(instance).to.be();
    });

    it('should have the property userAccount (base name: "userAccount")', function() {
      // uncomment below and update the code to test the property userAccount
      //var instane = new TheCoinBroker.PurchaseRequest();
      //expect(instance).to.be();
    });

    it('should have the property fiatAmount (base name: "fiatAmount")', function() {
      // uncomment below and update the code to test the property fiatAmount
      //var instane = new TheCoinBroker.PurchaseRequest();
      //expect(instance).to.be();
    });

    it('should have the property timeStamp (base name: "timeStamp")', function() {
      // uncomment below and update the code to test the property timeStamp
      //var instane = new TheCoinBroker.PurchaseRequest();
      //expect(instance).to.be();
    });

  });

}));
