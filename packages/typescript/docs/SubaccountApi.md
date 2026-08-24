# SubaccountApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSubaccount**](#createsubaccount) | **POST** /subaccount | Create Subaccount|
|[**fetchSubaccount**](#fetchsubaccount) | **GET** /subaccount/{code} | Fetch Subaccount|
|[**listSubaccounts**](#listsubaccounts) | **GET** /subaccount | List Subaccounts|
|[**updateSubaccount**](#updatesubaccount) | **PUT** /subaccount/{code} | Update Subaccount|

# **createSubaccount**
> SubaccountCreateResponse createSubaccount()

Create a subacount for a partner

### Example

```typescript
import {
    SubaccountApi,
    Configuration,
    SubaccountCreate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SubaccountApi(configuration);

let subaccountCreate: SubaccountCreate; // (optional)

const { status, data } = await apiInstance.createSubaccount(
    subaccountCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subaccountCreate** | **SubaccountCreate**|  | |


### Return type

**SubaccountCreateResponse**

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

# **fetchSubaccount**
> SubaccountFetchResponse fetchSubaccount()

Get details of a subaccount on your integration

### Example

```typescript
import {
    SubaccountApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SubaccountApi(configuration);

let code: string; //The subaccount code you want to fetch (default to undefined)

const { status, data } = await apiInstance.fetchSubaccount(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | The subaccount code you want to fetch | defaults to undefined|


### Return type

**SubaccountFetchResponse**

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

# **listSubaccounts**
> SubaccountListResponse listSubaccounts()

List subaccounts available on your integration

### Example

```typescript
import {
    SubaccountApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SubaccountApi(configuration);

let perPage: number; //Number of records to fetch per request (optional) (default to 50)
let page: number; //The offset to retrieve data from (optional) (default to 1)
let active: boolean; //Filter by the state of the subaccounts (optional) (default to undefined)

const { status, data } = await apiInstance.listSubaccounts(
    perPage,
    page,
    active
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **perPage** | [**number**] | Number of records to fetch per request | (optional) defaults to 50|
| **page** | [**number**] | The offset to retrieve data from | (optional) defaults to 1|
| **active** | [**boolean**] | Filter by the state of the subaccounts | (optional) defaults to undefined|


### Return type

**SubaccountListResponse**

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

# **updateSubaccount**
> SubaccountUpdateResponse updateSubaccount()

Update a subaccount details on your integration

### Example

```typescript
import {
    SubaccountApi,
    Configuration,
    SubaccountUpdate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SubaccountApi(configuration);

let code: string; //The subaccount code you want to fetch (default to undefined)
let subaccountUpdate: SubaccountUpdate; // (optional)

const { status, data } = await apiInstance.updateSubaccount(
    code,
    subaccountUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subaccountUpdate** | **SubaccountUpdate**|  | |
| **code** | [**string**] | The subaccount code you want to fetch | defaults to undefined|


### Return type

**SubaccountUpdateResponse**

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

