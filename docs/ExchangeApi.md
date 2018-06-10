# TheCoinBroker.ExchangeApi

All URIs are relative to *http://192.222.141.84:29554*

Method | HTTP request | Description
------------- | ------------- | -------------
[**purchase**](ExchangeApi.md#purchase) | **POST** /buy/{currencyCode} | Purchase Request
[**sell**](ExchangeApi.md#sell) | **POST** /sell/{currencyCode} | Sell Request


<a name="purchase"></a>
# **purchase**
> PurchaseResponseSigned purchase(currencyCode, request)

Purchase Request

User request to purchase THE

### Example
```javascript
import TheCoinBroker from 'the_coin_broker';

let apiInstance = new TheCoinBroker.ExchangeApi();

let currencyCode = 56; // Number | The integer code for the countries currency (ignored for now)

let request = new TheCoinBroker.PurchaseRequestSigned(); // PurchaseRequestSigned | Purchase Request info

apiInstance.purchase(currencyCode, request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **Number**| The integer code for the countries currency (ignored for now) | 
 **request** | [**PurchaseRequestSigned**](PurchaseRequestSigned.md)| Purchase Request info | 

### Return type

[**PurchaseResponseSigned**](PurchaseResponseSigned.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sell"></a>
# **sell**
> SellResponseSigned sell(currencyCode, request)

Sell Request

User request to sell THE

### Example
```javascript
import TheCoinBroker from 'the_coin_broker';

let apiInstance = new TheCoinBroker.ExchangeApi();

let currencyCode = 56; // Number | The integer code for the countries currency (ignored for now)

let request = new TheCoinBroker.SellRequestSigned(); // SellRequestSigned | Exchange Request info

apiInstance.sell(currencyCode, request).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyCode** | **Number**| The integer code for the countries currency (ignored for now) | 
 **request** | [**SellRequestSigned**](SellRequestSigned.md)| Exchange Request info | 

### Return type

[**SellResponseSigned**](SellResponseSigned.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

