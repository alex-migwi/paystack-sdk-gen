# PaymentRequestApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**archivePaymentRequest**](#archivepaymentrequest) | **POST** /paymentrequest/archive/{id} | Archive Payment Request|
|[**createPaymentRequest**](#createpaymentrequest) | **POST** /paymentrequest | Create Payment Request|
|[**fetchPaymentRequest**](#fetchpaymentrequest) | **GET** /paymentrequest/{id} | Fetch Payment Request|
|[**finalizePaymentRequest**](#finalizepaymentrequest) | **POST** /paymentrequest/finalize/{id} | Finalize Payment Request|
|[**listPaymentRequest**](#listpaymentrequest) | **GET** /paymentrequest | List Payment Request|
|[**notifyPaymentRequest**](#notifypaymentrequest) | **POST** /paymentrequest/notify/{id} | Send Notification|
|[**totalsPaymentRequest**](#totalspaymentrequest) | **GET** /paymentrequest/totals | Payment Request Total|
|[**updatePaymentRequest**](#updatepaymentrequest) | **PUT** /paymentrequest/{id} | Update Payment Request|
|[**verifyPaymentRequest**](#verifypaymentrequest) | **GET** /paymentrequest/verify/{id} | Verify Payment Request|

# **archivePaymentRequest**
> PaymentRequestArchiveResponse archivePaymentRequest()

Archive a payment request to clean up your records. An archived payment request cannot be verified and will not  be returned when listing all previously created payment requests. 

### Example

```typescript
import {
    PaymentRequestApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PaymentRequestApi(configuration);

let id: number; //The unique identifier of a previously created payment request (default to undefined)

const { status, data } = await apiInstance.archivePaymentRequest(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of a previously created payment request | defaults to undefined|


### Return type

**PaymentRequestArchiveResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment Request Archive response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPaymentRequest**
> PaymentRequestCreateResponse createPaymentRequest()

Create a new payment request by issuing an invoice to a customer

### Example

```typescript
import {
    PaymentRequestApi,
    Configuration,
    PaymentRequestCreate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PaymentRequestApi(configuration);

let paymentRequestCreate: PaymentRequestCreate; // (optional)

const { status, data } = await apiInstance.createPaymentRequest(
    paymentRequestCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentRequestCreate** | **PaymentRequestCreate**|  | |


### Return type

**PaymentRequestCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment Request Create response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchPaymentRequest**
> PaymentRequestListResponse fetchPaymentRequest()

Fetch a previously created payment request

### Example

```typescript
import {
    PaymentRequestApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PaymentRequestApi(configuration);

let id: number; //The unique identifier of a previously created payment request (default to undefined)

const { status, data } = await apiInstance.fetchPaymentRequest(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of a previously created payment request | defaults to undefined|


### Return type

**PaymentRequestListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment Request List response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **finalizePaymentRequest**
> PaymentRequestFinalizeResponse finalizePaymentRequest()

Finalise the creation of a draft payment request for a customer

### Example

```typescript
import {
    PaymentRequestApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PaymentRequestApi(configuration);

let id: number; //The unique identifier of a draft payment request (default to undefined)

const { status, data } = await apiInstance.finalizePaymentRequest(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of a draft payment request | defaults to undefined|


### Return type

**PaymentRequestFinalizeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment Request Finalize response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPaymentRequest**
> PaymentRequestListResponse listPaymentRequest()

List all previously created payment requests to your customers

### Example

```typescript
import {
    PaymentRequestApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PaymentRequestApi(configuration);

let perPage: number; //Number of records to fetch per page (optional) (default to undefined)
let page: number; //The section to retrieve (optional) (default to undefined)
let customer: string; //Customer ID (optional) (default to undefined)
let status: 'draft' | 'pending' | 'success' | 'failed'; //Invoice status to filter (optional) (default to undefined)
let currency: string; //If your integration supports more than one currency, choose the one to filter (optional) (default to undefined)
let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)

const { status, data } = await apiInstance.listPaymentRequest(
    perPage,
    page,
    customer,
    status,
    currency,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **perPage** | [**number**] | Number of records to fetch per page | (optional) defaults to undefined|
| **page** | [**number**] | The section to retrieve | (optional) defaults to undefined|
| **customer** | [**string**] | Customer ID | (optional) defaults to undefined|
| **status** | [**&#39;draft&#39; | &#39;pending&#39; | &#39;success&#39; | &#39;failed&#39;**]**Array<&#39;draft&#39; &#124; &#39;pending&#39; &#124; &#39;success&#39; &#124; &#39;failed&#39;>** | Invoice status to filter | (optional) defaults to undefined|
| **currency** | [**string**] | If your integration supports more than one currency, choose the one to filter | (optional) defaults to undefined|
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|


### Return type

**PaymentRequestListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment Request List response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **notifyPaymentRequest**
> PaymentRequestSendNotificationResponse notifyPaymentRequest()

Trigger an email reminder to a customer for a previously created payment request

### Example

```typescript
import {
    PaymentRequestApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PaymentRequestApi(configuration);

let id: number; //The unique identifier of a previously created payment request (default to undefined)

const { status, data } = await apiInstance.notifyPaymentRequest(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of a previously created payment request | defaults to undefined|


### Return type

**PaymentRequestSendNotificationResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment Request Send Notification response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **totalsPaymentRequest**
> PaymentRequestTotalResponse totalsPaymentRequest()

Get the metric of all pending and successful payment requests

### Example

```typescript
import {
    PaymentRequestApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PaymentRequestApi(configuration);

const { status, data } = await apiInstance.totalsPaymentRequest();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**PaymentRequestTotalResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment Request Total response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePaymentRequest**
> PaymentRequestUpdateResponse updatePaymentRequest()

Update a previously created payment request

### Example

```typescript
import {
    PaymentRequestApi,
    Configuration,
    PaymentRequestUpdate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PaymentRequestApi(configuration);

let id: number; //The unique identifier of a previously created payment request (default to undefined)
let paymentRequestUpdate: PaymentRequestUpdate; // (optional)

const { status, data } = await apiInstance.updatePaymentRequest(
    id,
    paymentRequestUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentRequestUpdate** | **PaymentRequestUpdate**|  | |
| **id** | [**number**] | The unique identifier of a previously created payment request | defaults to undefined|


### Return type

**PaymentRequestUpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment Request Update response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyPaymentRequest**
> PaymentRequestVerifyResponse verifyPaymentRequest()

Verify the status of a previously created payment request

### Example

```typescript
import {
    PaymentRequestApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PaymentRequestApi(configuration);

let id: number; //The unique identifier of a previously created payment request (default to undefined)

const { status, data } = await apiInstance.verifyPaymentRequest(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of a previously created payment request | defaults to undefined|


### Return type

**PaymentRequestVerifyResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Payment Request Verify response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

