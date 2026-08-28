# SplitApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addSubaccountToSplit**](#addsubaccounttosplit) | **POST** /split/{id}/subaccount/add | Add Subaccount to Split|
|[**createSplit**](#createsplit) | **POST** /split | Create Split|
|[**fetchSplit**](#fetchsplit) | **GET** /split/{id} | Fetch Split|
|[**listSplits**](#listsplits) | **GET** /split | List Splits|
|[**removeSubaccountFromSplit**](#removesubaccountfromsplit) | **POST** /split/{id}/subaccount/remove | Remove Subaccount from split|
|[**updateSplit**](#updatesplit) | **PUT** /split/{id} | Update Split|

# **addSubaccountToSplit**
> SplitAddUpdateSubaccountResponse addSubaccountToSplit()

Add a subaccount to a split configuration, or update the share of an existing subaccount

### Example

```typescript
import {
    SplitApi,
    Configuration,
    SplitSubaccounts
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SplitApi(configuration);

let id: number; //The ID of the split configuration to fetch (default to undefined)
let splitSubaccounts: SplitSubaccounts; // (optional)

const { status, data } = await apiInstance.addSubaccountToSplit(
    id,
    splitSubaccounts
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **splitSubaccounts** | **SplitSubaccounts**|  | |
| **id** | [**number**] | The ID of the split configuration to fetch | defaults to undefined|


### Return type

**SplitAddUpdateSubaccountResponse**

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

# **createSplit**
> SplitCreateResponse createSplit()

Create a split configuration for transactions

### Example

```typescript
import {
    SplitApi,
    Configuration,
    SplitCreate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SplitApi(configuration);

let splitCreate: SplitCreate; // (optional)

const { status, data } = await apiInstance.createSplit(
    splitCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **splitCreate** | **SplitCreate**|  | |


### Return type

**SplitCreateResponse**

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

# **fetchSplit**
> SplitFetchResponse fetchSplit()

Get details of a split configuration for a transaction

### Example

```typescript
import {
    SplitApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SplitApi(configuration);

let id: number; //The ID of the split configuration to fetch (default to undefined)

const { status, data } = await apiInstance.fetchSplit(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The ID of the split configuration to fetch | defaults to undefined|


### Return type

**SplitFetchResponse**

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

# **listSplits**
> SplitListResponse listSplits()

List the transaction splits available on your integration

### Example

```typescript
import {
    SplitApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SplitApi(configuration);

let subaccountCode: string; //Filter by subaccount code (optional) (default to undefined)
let name: string; //The name of the split (optional) (default to undefined)
let active: boolean; //The status of the split (optional) (default to undefined)
let perPage: number; //The number of records to fetch per request (optional) (default to undefined)
let page: number; //The offset to retrieve data from (optional) (default to undefined)
let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)

const { status, data } = await apiInstance.listSplits(
    subaccountCode,
    name,
    active,
    perPage,
    page,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subaccountCode** | [**string**] | Filter by subaccount code | (optional) defaults to undefined|
| **name** | [**string**] | The name of the split | (optional) defaults to undefined|
| **active** | [**boolean**] | The status of the split | (optional) defaults to undefined|
| **perPage** | [**number**] | The number of records to fetch per request | (optional) defaults to undefined|
| **page** | [**number**] | The offset to retrieve data from | (optional) defaults to undefined|
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|


### Return type

**SplitListResponse**

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

# **removeSubaccountFromSplit**
> SplitRemoveSubaccountResponse removeSubaccountFromSplit()

Remove a subaccount from a split configuration

### Example

```typescript
import {
    SplitApi,
    Configuration,
    SplitSubaccounts
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SplitApi(configuration);

let id: number; //The ID of the split configuration to fetch (default to undefined)
let splitSubaccounts: SplitSubaccounts; // (optional)

const { status, data } = await apiInstance.removeSubaccountFromSplit(
    id,
    splitSubaccounts
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **splitSubaccounts** | **SplitSubaccounts**|  | |
| **id** | [**number**] | The ID of the split configuration to fetch | defaults to undefined|


### Return type

**SplitRemoveSubaccountResponse**

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

# **updateSplit**
> SplitUpdateResponse updateSplit()

Update a split configuration for transactions

### Example

```typescript
import {
    SplitApi,
    Configuration,
    SplitUpdate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SplitApi(configuration);

let id: string; // (default to undefined)
let splitUpdate: SplitUpdate; // (optional)

const { status, data } = await apiInstance.updateSplit(
    id,
    splitUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **splitUpdate** | **SplitUpdate**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**SplitUpdateResponse**

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
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

