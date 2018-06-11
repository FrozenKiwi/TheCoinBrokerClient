# TheCoinBroker.TapCapApi

All URIs are relative to *http://192.222.141.84:29554*

Method | HTTP request | Description
------------- | ------------- | -------------
[**tapCapHistory**](TapCapApi.md#tapCapHistory) | **POST** /tap/history | TapCap current status
[**tapCapStatus**](TapCapApi.md#tapCapStatus) | **POST** /tap/state | TapCap current status


<a name="tapCapHistory"></a>
# **tapCapHistory**
> TapCapHistoryResponseSigned tapCapHistory(request)

TapCap current status

User TapCap status

### Example
```javascript
import TheCoinBroker from 'the_coin_broker';

let apiInstance = new TheCoinBroker.TapCapApi();

let request = new TheCoinBroker.TapCapHistoryRequestSigned(); // TapCapHistoryRequestSigned | Purchase Request info

apiInstance.tapCapHistory(request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TapCapHistoryRequestSigned**](TapCapHistoryRequestSigned.md)| Purchase Request info | 

### Return type

[**TapCapHistoryResponseSigned**](TapCapHistoryResponseSigned.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tapCapStatus"></a>
# **tapCapStatus**
> TapCapQueryResponseSigned tapCapStatus(request)

TapCap current status

User TapCap status

### Example
```javascript
import TheCoinBroker from 'the_coin_broker';

let apiInstance = new TheCoinBroker.TapCapApi();

let request = new TheCoinBroker.TapCapQueryRequestSigned(); // TapCapQueryRequestSigned | TapCap status request

apiInstance.tapCapStatus(request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**TapCapQueryRequestSigned**](TapCapQueryRequestSigned.md)| TapCap status request | 

### Return type

[**TapCapQueryResponseSigned**](TapCapQueryResponseSigned.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

