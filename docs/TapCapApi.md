# TheCoinBroker.TapCapApi

All URIs are relative to *http://192.222.141.84:3196*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tapCapHistory**](TapCapApi.md#tapCapHistory) | **POST** /tap/history | TapCap current status
[**tapCapStatus**](TapCapApi.md#tapCapStatus) | **POST** /tap/state | TapCap current status


<a name="tapCapHistory"></a>
# **tapCapHistory**
> TapCapHistoryResponse tapCapHistory(request)

TapCap current status

User TapCap status

### Example
```javascript
import TheCoinBroker from 'the_coin_broker';

let apiInstance = new TheCoinBroker.TapCapApi();

let request = new TheCoinBroker.TapCapHistoryRequest(); // TapCapHistoryRequest | Purchase Request info

apiInstance.tapCapHistory(request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TapCapHistoryRequest**](TapCapHistoryRequest.md)| Purchase Request info | 

### Return type

[**TapCapHistoryResponse**](TapCapHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tapCapStatus"></a>
# **tapCapStatus**
> TapCapQueryResponse tapCapStatus(request)

TapCap current status

User TapCap status

### Example
```javascript
import TheCoinBroker from 'the_coin_broker';

let apiInstance = new TheCoinBroker.TapCapApi();

let request = new TheCoinBroker.TapCapQueryRequest(); // TapCapQueryRequest | TapCap status request

apiInstance.tapCapStatus(request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TapCapQueryRequest**](TapCapQueryRequest.md)| TapCap status request | 

### Return type

[**TapCapQueryResponse**](TapCapQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

