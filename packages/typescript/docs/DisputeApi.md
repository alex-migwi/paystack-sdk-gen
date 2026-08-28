# DisputeApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addDisputeEvidence**](#adddisputeevidence) | **POST** /dispute/{id}/evidence | Add Evidence|
|[**exportDisputes**](#exportdisputes) | **GET** /dispute/export | Export Disputes|
|[**fetchDispute**](#fetchdispute) | **GET** /dispute/{id} | Fetch Dispute|
|[**fetchDisputeUploadUrl**](#fetchdisputeuploadurl) | **GET** /dispute/{id}/upload_url | Fetch Upload URL|
|[**listDisputes**](#listdisputes) | **GET** /dispute | List Disputes|
|[**listTransactionDisputes**](#listtransactiondisputes) | **GET** /dispute/transaction/{id} | List Transaction Disputes|
|[**resolveDispute**](#resolvedispute) | **PUT** /dispute/{id}/resolve | Resolve Dispute|
|[**updateDispute**](#updatedispute) | **PUT** /dispute/{id} | Update Dispute|

# **addDisputeEvidence**
> DisputeAddEvidenceResponse addDisputeEvidence()

Provide evidence for a dispute

### Example

```typescript
import {
    DisputeApi,
    Configuration,
    DisputeEvidence
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DisputeApi(configuration);

let id: number; //The unique identifier of the dispute (default to undefined)
let disputeEvidence: DisputeEvidence; // (optional)

const { status, data } = await apiInstance.addDisputeEvidence(
    id,
    disputeEvidence
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **disputeEvidence** | **DisputeEvidence**|  | |
| **id** | [**number**] | The unique identifier of the dispute | defaults to undefined|


### Return type

**DisputeAddEvidenceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dispute Add Evidence response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exportDisputes**
> DisputeExportResponse exportDisputes()

Export the disputes available on your integration

### Example

```typescript
import {
    DisputeApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DisputeApi(configuration);

let perPage: number; //Number of records to fetch per page (optional) (default to undefined)
let page: number; //The section to retrieve (optional) (default to undefined)
let status: 'awaiting-merchant-feedback' | 'awaiting-bank-feedback' | 'pending' | 'resolved'; // (optional) (default to undefined)
let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)

const { status, data } = await apiInstance.exportDisputes(
    perPage,
    page,
    status,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **perPage** | [**number**] | Number of records to fetch per page | (optional) defaults to undefined|
| **page** | [**number**] | The section to retrieve | (optional) defaults to undefined|
| **status** | [**&#39;awaiting-merchant-feedback&#39; | &#39;awaiting-bank-feedback&#39; | &#39;pending&#39; | &#39;resolved&#39;**]**Array<&#39;awaiting-merchant-feedback&#39; &#124; &#39;awaiting-bank-feedback&#39; &#124; &#39;pending&#39; &#124; &#39;resolved&#39;>** |  | (optional) defaults to undefined|
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|


### Return type

**DisputeExportResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dispute Export response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchDispute**
> DisputeFetchResponse fetchDispute()

Fetch a transaction dispute

### Example

```typescript
import {
    DisputeApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DisputeApi(configuration);

let id: number; //The unique identifier of the dispute (default to undefined)

const { status, data } = await apiInstance.fetchDispute(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of the dispute | defaults to undefined|


### Return type

**DisputeFetchResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dispute Fetch response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchDisputeUploadUrl**
> DisputeUploadURLResponse fetchDisputeUploadUrl()

Get the URL to upload a dispute evidence

### Example

```typescript
import {
    DisputeApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DisputeApi(configuration);

let id: number; //The unique identifier of the dispute (default to undefined)

const { status, data } = await apiInstance.fetchDisputeUploadUrl(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of the dispute | defaults to undefined|


### Return type

**DisputeUploadURLResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dispute Upload URL response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listDisputes**
> DisputeListResponse listDisputes()

List transaction disputes filed by customers

### Example

```typescript
import {
    DisputeApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DisputeApi(configuration);

let perPage: number; //Number of records to fetch per page (optional) (default to undefined)
let page: number; //The section to retrieve (optional) (default to undefined)
let status: 'awaiting-merchant-feedback' | 'awaiting-bank-feedback' | 'pending' | 'resolved'; //Dispute status (optional) (default to undefined)
let transaction: string; //Transaction ID (optional) (default to undefined)
let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)

const { status, data } = await apiInstance.listDisputes(
    perPage,
    page,
    status,
    transaction,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **perPage** | [**number**] | Number of records to fetch per page | (optional) defaults to undefined|
| **page** | [**number**] | The section to retrieve | (optional) defaults to undefined|
| **status** | [**&#39;awaiting-merchant-feedback&#39; | &#39;awaiting-bank-feedback&#39; | &#39;pending&#39; | &#39;resolved&#39;**]**Array<&#39;awaiting-merchant-feedback&#39; &#124; &#39;awaiting-bank-feedback&#39; &#124; &#39;pending&#39; &#124; &#39;resolved&#39;>** | Dispute status | (optional) defaults to undefined|
| **transaction** | [**string**] | Transaction ID | (optional) defaults to undefined|
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|


### Return type

**DisputeListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dispute List response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTransactionDisputes**
> DisputeListTransactionResponse listTransactionDisputes()

List all disputes filed for a transaction

### Example

```typescript
import {
    DisputeApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DisputeApi(configuration);

let id: number; //The unique identifier of the transaction (default to undefined)

const { status, data } = await apiInstance.listTransactionDisputes(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of the transaction | defaults to undefined|


### Return type

**DisputeListTransactionResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dispute List Transaction response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resolveDispute**
> DisputeResolveResponse resolveDispute()

Resolve a transaction dispute

### Example

```typescript
import {
    DisputeApi,
    Configuration,
    DisputeResolve
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DisputeApi(configuration);

let id: number; //The unique identifier of the dispute (default to undefined)
let disputeResolve: DisputeResolve; // (optional)

const { status, data } = await apiInstance.resolveDispute(
    id,
    disputeResolve
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **disputeResolve** | **DisputeResolve**|  | |
| **id** | [**number**] | The unique identifier of the dispute | defaults to undefined|


### Return type

**DisputeResolveResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dispute Resolve response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateDispute**
> DisputeUpdateResponse updateDispute()

Update a transaction dispute

### Example

```typescript
import {
    DisputeApi,
    Configuration,
    DisputeUpdate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DisputeApi(configuration);

let id: number; //The unique identifier of the dispute (default to undefined)
let disputeUpdate: DisputeUpdate; // (optional)

const { status, data } = await apiInstance.updateDispute(
    id,
    disputeUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **disputeUpdate** | **DisputeUpdate**|  | |
| **id** | [**number**] | The unique identifier of the dispute | defaults to undefined|


### Return type

**DisputeUpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Dispute Update response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

