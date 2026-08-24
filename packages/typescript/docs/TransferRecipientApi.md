# TransferRecipientApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createBulkTransferRecipient**](#createbulktransferrecipient) | **POST** /transferrecipient/bulk | Bulk Create Transfer Recipient|
|[**createTransferRecipient**](#createtransferrecipient) | **POST** /transferrecipient | Create Transfer Recipient|
|[**deleteTransferrecipient**](#deletetransferrecipient) | **DELETE** /transferrecipient/{code} | Delete Transfer Recipient|
|[**fetchTransferrecipient**](#fetchtransferrecipient) | **GET** /transferrecipient/{code} | Fetch Transfer recipient|
|[**listTransferRecipients**](#listtransferrecipients) | **GET** /transferrecipient | List Transfer Recipients|
|[**updateTransferrecipient**](#updatetransferrecipient) | **PUT** /transferrecipient/{code} | Update Transfer Recipient|

# **createBulkTransferRecipient**
> TransferRecipientBulkCreateResponse createBulkTransferRecipient()

Create multiple transfer recipients in batches. A duplicate account number will lead to the retrieval of the existing record. 

### Example

```typescript
import {
    TransferRecipientApi,
    Configuration,
    TransferRecipientBulk
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferRecipientApi(configuration);

let transferRecipientBulk: TransferRecipientBulk; // (optional)

const { status, data } = await apiInstance.createBulkTransferRecipient(
    transferRecipientBulk
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferRecipientBulk** | **TransferRecipientBulk**|  | |


### Return type

**TransferRecipientBulkCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Sucessful response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createTransferRecipient**
> TransferRecipientCreateResponse createTransferRecipient()

Creates a new recipient. A duplicate account number will lead to the retrieval of the existing record.

### Example

```typescript
import {
    TransferRecipientApi,
    Configuration,
    TransferRecipientCreate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferRecipientApi(configuration);

let transferRecipientCreate: TransferRecipientCreate; // (optional)

const { status, data } = await apiInstance.createTransferRecipient(
    transferRecipientCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferRecipientCreate** | **TransferRecipientCreate**|  | |


### Return type

**TransferRecipientCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteTransferrecipient**
> TransferRecipientDeleteResponse deleteTransferrecipient()

Delete a transfer recipient (sets the transfer recipient to inactive)

### Example

```typescript
import {
    TransferRecipientApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferRecipientApi(configuration);

let code: string; //Transfer recipient code (default to undefined)

const { status, data } = await apiInstance.deleteTransferrecipient(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Transfer recipient code | defaults to undefined|


### Return type

**TransferRecipientDeleteResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchTransferrecipient**
> TransferRecipientFetchResponse fetchTransferrecipient()

Fetch the details of a transfer recipient

### Example

```typescript
import {
    TransferRecipientApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferRecipientApi(configuration);

let code: string; //Transfer recipient code (default to undefined)

const { status, data } = await apiInstance.fetchTransferrecipient(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Transfer recipient code | defaults to undefined|


### Return type

**TransferRecipientFetchResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTransferRecipients**
> TransferRecipientListResponse listTransferRecipients()

List transfer recipients available on your integration

### Example

```typescript
import {
    TransferRecipientApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferRecipientApi(configuration);

let useCursor: boolean; //A flag to indicate if cursor based pagination should be used (optional) (default to undefined)
let next: string; //An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional) (default to undefined)
let previous: string; //An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional) (default to undefined)
let perPage: number; //The number of records to fetch per request (optional) (default to undefined)
let page: number; //The offset to retrieve data from (optional) (default to undefined)

const { status, data } = await apiInstance.listTransferRecipients(
    useCursor,
    next,
    previous,
    perPage,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **useCursor** | [**boolean**] | A flag to indicate if cursor based pagination should be used | (optional) defaults to undefined|
| **next** | [**string**] | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | (optional) defaults to undefined|
| **previous** | [**string**] | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | (optional) defaults to undefined|
| **perPage** | [**number**] | The number of records to fetch per request | (optional) defaults to undefined|
| **page** | [**number**] | The offset to retrieve data from | (optional) defaults to undefined|


### Return type

**TransferRecipientListResponse**

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

# **updateTransferrecipient**
> TransferRecipientUpdateResponse updateTransferrecipient()

Update the details of a transfer recipient

### Example

```typescript
import {
    TransferRecipientApi,
    Configuration,
    TransferRecipientUpdate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferRecipientApi(configuration);

let code: string; //Transfer recipient code (default to undefined)
let transferRecipientUpdate: TransferRecipientUpdate; // (optional)

const { status, data } = await apiInstance.updateTransferrecipient(
    code,
    transferRecipientUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferRecipientUpdate** | **TransferRecipientUpdate**|  | |
| **code** | [**string**] | Transfer recipient code | defaults to undefined|


### Return type

**TransferRecipientUpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

