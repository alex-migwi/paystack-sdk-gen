# ApplePayApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listApplePayDomains**](#listapplepaydomains) | **GET** /apple-pay/domain | List Domains|
|[**registerApplePayDomain**](#registerapplepaydomain) | **POST** /apple-pay/domain | Register Domain|
|[**unregisterApplePayDomain**](#unregisterapplepaydomain) | **DELETE** /apple-pay/domain | Unregister Domain|

# **listApplePayDomains**
> Response listApplePayDomains()

Lists all registered domains on your integration. Returns an empty array if no domains have been added.

### Example

```typescript
import {
    ApplePayApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new ApplePayApi(configuration);

let useCursor: boolean; //A flag to indicate if cursor based pagination should be used (optional) (default to undefined)
let next: string; //An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional) (default to undefined)
let previous: string; //An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional) (default to undefined)

const { status, data } = await apiInstance.listApplePayDomains(
    useCursor,
    next,
    previous
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **useCursor** | [**boolean**] | A flag to indicate if cursor based pagination should be used | (optional) defaults to undefined|
| **next** | [**string**] | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | (optional) defaults to undefined|
| **previous** | [**string**] | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | (optional) defaults to undefined|


### Return type

**Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Request successful |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registerApplePayDomain**
> ApplePayCreateOkModel registerApplePayDomain()

Register a top-level domain or subdomain for your Apple Pay integration.  > This endpoint can only be called with one domain or subdomain at a time. 

### Example

```typescript
import {
    ApplePayApi,
    Configuration,
    ApplePayParam
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new ApplePayApi(configuration);

let applePayParam: ApplePayParam; // (optional)

const { status, data } = await apiInstance.registerApplePayDomain(
    applePayParam
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applePayParam** | **ApplePayParam**|  | |


### Return type

**ApplePayCreateOkModel**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Responses from the Transaction Initialize endpoint |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unregisterApplePayDomain**
> Response unregisterApplePayDomain()

Unregister a top-level domain or subdomain previously used for your Apple Pay integration. 

### Example

```typescript
import {
    ApplePayApi,
    Configuration,
    ApplePayParam
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new ApplePayApi(configuration);

let applePayParam: ApplePayParam; // (optional)

const { status, data } = await apiInstance.unregisterApplePayDomain(
    applePayParam
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **applePayParam** | **ApplePayParam**|  | |


### Return type

**Response**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Request successful |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

