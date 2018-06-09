/**
 * TheCoin Broker
 * TheCoin broker services.  To be implemented allowing exchange of local currency to THESE
 *
 * OpenAPI spec version: 1.0.0
 * Contact: stephen.taylor.dev@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





/**
* The TapCapQueryResponse model module.
* @module model/TapCapQueryResponse
* @version 1.0.0
*/
export default class TapCapQueryResponse {
    /**
    * Constructs a new <code>TapCapQueryResponse</code>.
    * @alias module:model/TapCapQueryResponse
    * @class
    * @param balance {Number} 
    * @param weeklyTopup {Number} 
    */

    constructor(balance, weeklyTopup) {
        

        
        

        this['balance'] = balance;this['weeklyTopup'] = weeklyTopup;

        
    }

    /**
    * Constructs a <code>TapCapQueryResponse</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/TapCapQueryResponse} obj Optional instance to populate.
    * @return {module:model/TapCapQueryResponse} The populated <code>TapCapQueryResponse</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TapCapQueryResponse();

            
            
            

            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('weeklyTopup')) {
                obj['weeklyTopup'] = ApiClient.convertToType(data['weeklyTopup'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} balance
    */
    balance = undefined;
    /**
    * @member {Number} weeklyTopup
    */
    weeklyTopup = undefined;








}


