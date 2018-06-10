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


import ApiClient from '../ApiClient';





/**
* The PurchaseResponse model module.
* @module model/PurchaseResponse
* @version 0.0.1
*/
export default class PurchaseResponse {
    /**
    * Constructs a new <code>PurchaseResponse</code>.
    * @alias module:model/PurchaseResponse
    * @class
    * @param response {String} 
    */

    constructor(response) {
        

        
        

        this['response'] = response;

        
    }

    /**
    * Constructs a <code>PurchaseResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/PurchaseResponse} obj Optional instance to populate.
    * @return {module:model/PurchaseResponse} The populated <code>PurchaseResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PurchaseResponse();

            
            
            

            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} response
    */
    response = undefined;








}

