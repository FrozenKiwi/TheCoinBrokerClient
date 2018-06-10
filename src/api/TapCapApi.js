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


import ApiClient from "../ApiClient";
import TapCapHistoryRequest from '../model/TapCapHistoryRequest';
import TapCapHistoryResponse from '../model/TapCapHistoryResponse';
import TapCapQueryRequest from '../model/TapCapQueryRequest';
import TapCapQueryResponse from '../model/TapCapQueryResponse';

/**
* TapCap service.
* @module api/TapCapApi
* @version 0.0.1
*/
export default class TapCapApi {

    /**
    * Constructs a new TapCapApi. 
    * @alias module:api/TapCapApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * TapCap current status
     * User TapCap status
     * @param {module:model/TapCapHistoryRequest} request Purchase Request info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TapCapHistoryResponse} and HTTP response
     */
    tapCapHistoryWithHttpInfo(request) {
      let postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling tapCapHistory");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TapCapHistoryResponse;

      return this.apiClient.callApi(
        '/tap/history', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * TapCap current status
     * User TapCap status
     * @param {module:model/TapCapHistoryRequest} request Purchase Request info
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TapCapHistoryResponse}
     */
    tapCapHistory(request) {
      return this.tapCapHistoryWithHttpInfo(request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * TapCap current status
     * User TapCap status
     * @param {module:model/TapCapQueryRequest} request TapCap status request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TapCapQueryResponse} and HTTP response
     */
    tapCapStatusWithHttpInfo(request) {
      let postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling tapCapStatus");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TapCapQueryResponse;

      return this.apiClient.callApi(
        '/tap/state', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * TapCap current status
     * User TapCap status
     * @param {module:model/TapCapQueryRequest} request TapCap status request
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TapCapQueryResponse}
     */
    tapCapStatus(request) {
      return this.tapCapStatusWithHttpInfo(request)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}