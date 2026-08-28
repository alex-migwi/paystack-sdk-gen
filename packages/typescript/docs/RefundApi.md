# RefundApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createRefund**](#createrefund) | **POST** /refund | Create Refund|
|[**fetchRefund**](#fetchrefund) | **GET** /refund/{id} | Fetch Refund|
|[**listRefunds**](#listrefunds) | **GET** /refund | List Refunds|
|[**retryRefund**](#retryrefund) | **POST** /refund/retry_with_customer_details/{id} | Retry Refund|

# **createRefund**
> RefundCreateResponse createRefund()

Initiate a refund for a previously completed transaction

### Example

```typescript
import {
    RefundApi,
    Configuration,
    RefundCreate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new RefundApi(configuration);

let refundCreate: RefundCreate; // (optional)

const { status, data } = await apiInstance.createRefund(
    refundCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refundCreate** | **RefundCreate**|  | |


### Return type

**RefundCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Refund Create response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchRefund**
> RefundFetchResponse fetchRefund()

Get a previously created refund

### Example

```typescript
import {
    RefundApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new RefundApi(configuration);

let id: number; //The identifier of the refund (default to undefined)

const { status, data } = await apiInstance.fetchRefund(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The identifier of the refund | defaults to undefined|


### Return type

**RefundFetchResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Refund Fetch response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listRefunds**
> RefundListResponse listRefunds()

List previously created refunds

### Example

```typescript
import {
    RefundApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new RefundApi(configuration);

let perPage: number; //Number of records to fetch per page (optional) (default to 50)
let page: number; //The section to retrieve (optional) (default to undefined)
let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)

const { status, data } = await apiInstance.listRefunds(
    perPage,
    page,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **perPage** | [**number**] | Number of records to fetch per page | (optional) defaults to 50|
| **page** | [**number**] | The section to retrieve | (optional) defaults to undefined|
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|


### Return type

**RefundListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Refund List response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retryRefund**
> RefundRetryResponse retryRefund()

Retry a refund with a `needs-attention` status by providing the bank account details of a customer.

### Example

```typescript
import {
    RefundApi,
    Configuration,
    RefundRetry
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new RefundApi(configuration);

let id: number; //The identifier of the refund (default to undefined)
let refundRetry: RefundRetry; // (optional)

const { status, data } = await apiInstance.retryRefund(
    id,
    refundRetry
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **refundRetry** | **RefundRetry**|  | |
| **id** | [**number**] | The identifier of the refund | defaults to undefined|


### Return type

**RefundRetryResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Refund Create response |  -  |
|**422** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

