# SettlementApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchSettlementTransactions**](#fetchsettlementtransactions) | **GET** /settlement/{id}/transactions | Fetch Settlement Transactions|
|[**listSettlements**](#listsettlements) | **GET** /settlement | List Settlements|

# **fetchSettlementTransactions**
> Response fetchSettlementTransactions()

Get the transactions that make up a particular settlement

### Example

```typescript
import {
    SettlementApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SettlementApi(configuration);

let id: number; //The settlement ID in which you want to fetch its transactions (default to undefined)

const { status, data } = await apiInstance.fetchSettlementTransactions(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The settlement ID in which you want to fetch its transactions | defaults to undefined|


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

# **listSettlements**
> Response listSettlements()

List settlements made to your settlement accounts

### Example

```typescript
import {
    SettlementApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SettlementApi(configuration);

let perPage: number; //The number of records to fetch per request (optional) (default to undefined)
let page: number; //The offset to retrieve data from (optional) (default to undefined)

const { status, data } = await apiInstance.listSettlements(
    perPage,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **perPage** | [**number**] | The number of records to fetch per request | (optional) defaults to undefined|
| **page** | [**number**] | The offset to retrieve data from | (optional) defaults to undefined|


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

