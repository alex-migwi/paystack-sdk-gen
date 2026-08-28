# DirectDebitApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listMandateAuthorizationsDirectdebit**](#listmandateauthorizationsdirectdebit) | **GET** /directdebit/mandate-authorizations | List Mandate Authorizations|
|[**triggerActivationChargeDirectdebit**](#triggeractivationchargedirectdebit) | **PUT** /directdebit/activation-charge | Trigger Activation Charge|

# **listMandateAuthorizationsDirectdebit**
> CustomerFetchMandateAuthorizationsResponse listMandateAuthorizationsDirectdebit()

Get a list of all the direct debit mandates on your integration

### Example

```typescript
import {
    DirectDebitApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DirectDebitApi(configuration);

let cursor: string; //The cursor value of the next set of authorizations to fetch. You can get this from the meta object of the response (optional) (default to undefined)
let status: 'pending' | 'active' | 'revoked'; //Filter by the authorization status (optional) (default to undefined)
let perPage: number; //The number of authorizations to fetch per request (optional) (default to undefined)

const { status, data } = await apiInstance.listMandateAuthorizationsDirectdebit(
    cursor,
    status,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **cursor** | [**string**] | The cursor value of the next set of authorizations to fetch. You can get this from the meta object of the response | (optional) defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;active&#39; | &#39;revoked&#39;**]**Array<&#39;pending&#39; &#124; &#39;active&#39; &#124; &#39;revoked&#39;>** | Filter by the authorization status | (optional) defaults to undefined|
| **perPage** | [**number**] | The number of authorizations to fetch per request | (optional) defaults to undefined|


### Return type

**CustomerFetchMandateAuthorizationsResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Customer Fetch Mandate Authorizations response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **triggerActivationChargeDirectdebit**
> DirectDebitActivationChargeResponse triggerActivationChargeDirectdebit(directDebitActivationChargeRequest)

Trigger activation charge for specified customers

### Example

```typescript
import {
    DirectDebitApi,
    Configuration,
    DirectDebitActivationChargeRequest
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DirectDebitApi(configuration);

let directDebitActivationChargeRequest: DirectDebitActivationChargeRequest; //

const { status, data } = await apiInstance.triggerActivationChargeDirectdebit(
    directDebitActivationChargeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **directDebitActivationChargeRequest** | **DirectDebitActivationChargeRequest**|  | |


### Return type

**DirectDebitActivationChargeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Direct Debit Activation Charge response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

