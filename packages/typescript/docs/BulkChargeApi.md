# BulkChargeApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchBulkChargeBatch**](#fetchbulkchargebatch) | **GET** /bulkcharge/{code} | Fetch Bulk Charge Batch|
|[**initiateBulkCharge**](#initiatebulkcharge) | **POST** /bulkcharge | Initiate Bulk Charge|
|[**listBulkChargeItems**](#listbulkchargeitems) | **GET** /bulkcharge/{code}/charges | List Charges in a Batch|
|[**listBulkCharges**](#listbulkcharges) | **GET** /bulkcharge | List Bulk Charge Batches|
|[**pauseBulkChargeBatch**](#pausebulkchargebatch) | **GET** /bulkcharge/pause/{code} | Pause Bulk Charge Batch|
|[**resumeBulkChargeBatch**](#resumebulkchargebatch) | **GET** /bulkcharge/resume/{code} | Resume Bulk Charge Batch|

# **fetchBulkChargeBatch**
> BulkChargeFetchResponse fetchBulkChargeBatch()

This endpoint retrieves a specific batch code. It also returns useful information on its progress by  way of the `total_charges` and `pending_charges` attributes. 

### Example

```typescript
import {
    BulkChargeApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new BulkChargeApi(configuration);

let code: string; //The code for the charge whose batches you want to retrieve (default to undefined)

const { status, data } = await apiInstance.fetchBulkChargeBatch(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | The code for the charge whose batches you want to retrieve | defaults to undefined|


### Return type

**BulkChargeFetchResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initiateBulkCharge**
> BulkChargeInitiateResponse initiateBulkCharge()

Charge multiple customers in batches

### Example

```typescript
import {
    BulkChargeApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new BulkChargeApi(configuration);

let bulkChargeInitiate: Array<BulkChargeInitiate>; // (optional)

const { status, data } = await apiInstance.initiateBulkCharge(
    bulkChargeInitiate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bulkChargeInitiate** | **Array<BulkChargeInitiate>**|  | |


### Return type

**BulkChargeInitiateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listBulkChargeItems**
> BulkChargeFetchBulkBatchChargesResponse listBulkChargeItems()

This endpoint retrieves the charges associated with a specified batch code

### Example

```typescript
import {
    BulkChargeApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new BulkChargeApi(configuration);

let code: string; //An code for the batch whose charges you want to retrieve (default to undefined)
let perPage: number; //Number of records to fetch per page (optional) (default to undefined)
let page: number; //The offset to retrieve data from (optional) (default to undefined)
let status: 'success' | 'failed' | 'pending' | 'error' | 'inactive_authorization'; //Filter by the status of the charges (optional) (default to undefined)

const { status, data } = await apiInstance.listBulkChargeItems(
    code,
    perPage,
    page,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | An code for the batch whose charges you want to retrieve | defaults to undefined|
| **perPage** | [**number**] | Number of records to fetch per page | (optional) defaults to undefined|
| **page** | [**number**] | The offset to retrieve data from | (optional) defaults to undefined|
| **status** | [**&#39;success&#39; | &#39;failed&#39; | &#39;pending&#39; | &#39;error&#39; | &#39;inactive_authorization&#39;**]**Array<&#39;success&#39; &#124; &#39;failed&#39; &#124; &#39;pending&#39; &#124; &#39;error&#39; &#124; &#39;inactive_authorization&#39;>** | Filter by the status of the charges | (optional) defaults to undefined|


### Return type

**BulkChargeFetchBulkBatchChargesResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listBulkCharges**
> BulkChargeListResponse listBulkCharges()

List all bulk charge batches.

### Example

```typescript
import {
    BulkChargeApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new BulkChargeApi(configuration);

let perPage: number; //Number of records to fetch per page (optional) (default to undefined)
let page: number; //The offset to retrieve data from (optional) (default to undefined)
let status: 'active' | 'paused' | 'complete'; //Filter by the status of the charges (optional) (default to undefined)

const { status, data } = await apiInstance.listBulkCharges(
    perPage,
    page,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **perPage** | [**number**] | Number of records to fetch per page | (optional) defaults to undefined|
| **page** | [**number**] | The offset to retrieve data from | (optional) defaults to undefined|
| **status** | [**&#39;active&#39; | &#39;paused&#39; | &#39;complete&#39;**]**Array<&#39;active&#39; &#124; &#39;paused&#39; &#124; &#39;complete&#39;>** | Filter by the status of the charges | (optional) defaults to undefined|


### Return type

**BulkChargeListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **pauseBulkChargeBatch**
> BulkChargePauseResponse pauseBulkChargeBatch()

Pause the processing of a charge batch

### Example

```typescript
import {
    BulkChargeApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new BulkChargeApi(configuration);

let code: string; //The batch code for the bulk charge you want to pause (default to undefined)

const { status, data } = await apiInstance.pauseBulkChargeBatch(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | The batch code for the bulk charge you want to pause | defaults to undefined|


### Return type

**BulkChargePauseResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resumeBulkChargeBatch**
> BulkChargeResumeResponse resumeBulkChargeBatch()

Resume the processing of a previously paused charge batch

### Example

```typescript
import {
    BulkChargeApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new BulkChargeApi(configuration);

let code: string; //The batch code for the bulk charge you want to pause (default to undefined)

const { status, data } = await apiInstance.resumeBulkChargeBatch(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | The batch code for the bulk charge you want to pause | defaults to undefined|


### Return type

**BulkChargeResumeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

