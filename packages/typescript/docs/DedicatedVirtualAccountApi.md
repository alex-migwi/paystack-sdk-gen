# DedicatedVirtualAccountApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**assignDedicatedAccount**](#assigndedicatedaccount) | **POST** /dedicated_account/assign | Assign Dedicated Account|
|[**createDedicatedAccount**](#creatededicatedaccount) | **POST** /dedicated_account | Create Dedicated Account|
|[**deactivateDedicatedAccount**](#deactivatededicatedaccount) | **DELETE** /dedicated_account/{id} | Deactivate Dedicated Account|
|[**fetchDedicatedAccount**](#fetchdedicatedaccount) | **GET** /dedicated_account/{id} | Fetch Dedicated Account|
|[**fetchDedicatedAccountProviders**](#fetchdedicatedaccountproviders) | **GET** /dedicated_account/available_providers | Fetch Bank Providers|
|[**listDedicatedAccounts**](#listdedicatedaccounts) | **GET** /dedicated_account | List Dedicated Accounts|
|[**removeDedicatedAccountSplit**](#removededicatedaccountsplit) | **DELETE** /dedicated_account/split | Remove Split from Dedicated Account|
|[**requeryDedicatedAccount**](#requerydedicatedaccount) | **GET** /dedicated_account/requery | Requery Dedicated Account|
|[**splitDedicatedAccount**](#splitdedicatedaccount) | **POST** /dedicated_account/split | Split Dedicated Account Transaction|

# **assignDedicatedAccount**
> Response assignDedicatedAccount()

With this endpoint, you can create a customer, validate the customer, and assign a DVA to the customer.

### Example

```typescript
import {
    DedicatedVirtualAccountApi,
    Configuration,
    DedicatedVirtualAccountAssign
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedVirtualAccountApi(configuration);

let dedicatedVirtualAccountAssign: DedicatedVirtualAccountAssign; // (optional)

const { status, data } = await apiInstance.assignDedicatedAccount(
    dedicatedVirtualAccountAssign
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dedicatedVirtualAccountAssign** | **DedicatedVirtualAccountAssign**|  | |


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
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createDedicatedAccount**
> DedicatedNubanCreateResponse createDedicatedAccount()

Create a dedicated virtual account for an existing customer

### Example

```typescript
import {
    DedicatedVirtualAccountApi,
    Configuration,
    DedicatedVirtualAccountCreate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedVirtualAccountApi(configuration);

let dedicatedVirtualAccountCreate: DedicatedVirtualAccountCreate; // (optional)

const { status, data } = await apiInstance.createDedicatedAccount(
    dedicatedVirtualAccountCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dedicatedVirtualAccountCreate** | **DedicatedVirtualAccountCreate**|  | |


### Return type

**DedicatedNubanCreateResponse**

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

# **deactivateDedicatedAccount**
> DedicatedNubanDeactivateResponse deactivateDedicatedAccount()

Deactivate a dedicated virtual account on your integration.

### Example

```typescript
import {
    DedicatedVirtualAccountApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedVirtualAccountApi(configuration);

let id: string; //ID of dedicated virtual account (default to undefined)

const { status, data } = await apiInstance.deactivateDedicatedAccount(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of dedicated virtual account | defaults to undefined|


### Return type

**DedicatedNubanDeactivateResponse**

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

# **fetchDedicatedAccount**
> DedicatedNubanFetchResponse fetchDedicatedAccount()

Get details of a dedicated virtual account on your integration.

### Example

```typescript
import {
    DedicatedVirtualAccountApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedVirtualAccountApi(configuration);

let id: string; //ID of dedicated virtual account (default to undefined)

const { status, data } = await apiInstance.fetchDedicatedAccount(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**string**] | ID of dedicated virtual account | defaults to undefined|


### Return type

**DedicatedNubanFetchResponse**

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

# **fetchDedicatedAccountProviders**
> Response fetchDedicatedAccountProviders()

Get available bank providers for a dedicated virtual account

### Example

```typescript
import {
    DedicatedVirtualAccountApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedVirtualAccountApi(configuration);

const { status, data } = await apiInstance.fetchDedicatedAccountProviders();
```

### Parameters
This endpoint does not have any parameters.


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

# **listDedicatedAccounts**
> DedicatedNubanListResponse listDedicatedAccounts()

List dedicated virtual accounts available on your integration.

### Example

```typescript
import {
    DedicatedVirtualAccountApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedVirtualAccountApi(configuration);

let active: boolean; //Status of the dedicated virtual account (optional) (default to undefined)
let customer: number; //The customer\'s ID (optional) (default to undefined)
let currency: 'NGN' | 'GHS'; //The currency of the dedicated virtual account (optional) (default to undefined)
let providerSlug: string; //The bank\'s slug in lowercase, without spaces (optional) (default to undefined)
let bankId: string; //The bank\'s ID (optional) (default to undefined)
let perPage: number; //The number of records to fetch per request (optional) (default to 50)
let page: number; //The offset to retrieve data from (optional) (default to 1)

const { status, data } = await apiInstance.listDedicatedAccounts(
    active,
    customer,
    currency,
    providerSlug,
    bankId,
    perPage,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **active** | [**boolean**] | Status of the dedicated virtual account | (optional) defaults to undefined|
| **customer** | [**number**] | The customer\&#39;s ID | (optional) defaults to undefined|
| **currency** | [**&#39;NGN&#39; | &#39;GHS&#39;**]**Array<&#39;NGN&#39; &#124; &#39;GHS&#39;>** | The currency of the dedicated virtual account | (optional) defaults to undefined|
| **providerSlug** | [**string**] | The bank\&#39;s slug in lowercase, without spaces | (optional) defaults to undefined|
| **bankId** | [**string**] | The bank\&#39;s ID | (optional) defaults to undefined|
| **perPage** | [**number**] | The number of records to fetch per request | (optional) defaults to 50|
| **page** | [**number**] | The offset to retrieve data from | (optional) defaults to 1|


### Return type

**DedicatedNubanListResponse**

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

# **removeDedicatedAccountSplit**
> Response removeDedicatedAccountSplit()

If you\'ve previously set up split payment for transactions on a dedicated virtual account, you can remove it with this endpoint

### Example

```typescript
import {
    DedicatedVirtualAccountApi,
    Configuration,
    DedicatedVirtualAccountRemoveSplit
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedVirtualAccountApi(configuration);

let dedicatedVirtualAccountRemoveSplit: DedicatedVirtualAccountRemoveSplit; // (optional)

const { status, data } = await apiInstance.removeDedicatedAccountSplit(
    dedicatedVirtualAccountRemoveSplit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dedicatedVirtualAccountRemoveSplit** | **DedicatedVirtualAccountRemoveSplit**|  | |


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

# **requeryDedicatedAccount**
> Response requeryDedicatedAccount()

Requery Dedicated Virtual Account for new transactions

### Example

```typescript
import {
    DedicatedVirtualAccountApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedVirtualAccountApi(configuration);

let accountNumber: string; //Virtual account number to requery (optional) (default to undefined)
let providerSlug: string; //The bank\'s slug in lowercase, without spaces. (optional) (default to undefined)
let date: string; //The day the transfer was made (optional) (default to undefined)

const { status, data } = await apiInstance.requeryDedicatedAccount(
    accountNumber,
    providerSlug,
    date
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountNumber** | [**string**] | Virtual account number to requery | (optional) defaults to undefined|
| **providerSlug** | [**string**] | The bank\&#39;s slug in lowercase, without spaces. | (optional) defaults to undefined|
| **date** | [**string**] | The day the transfer was made | (optional) defaults to undefined|


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

# **splitDedicatedAccount**
> Response splitDedicatedAccount()

Split a dedicated virtual account transaction with one or more accounts

### Example

```typescript
import {
    DedicatedVirtualAccountApi,
    Configuration,
    DedicatedVirtualAccountSplit
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new DedicatedVirtualAccountApi(configuration);

let dedicatedVirtualAccountSplit: DedicatedVirtualAccountSplit; // (optional)

const { status, data } = await apiInstance.splitDedicatedAccount(
    dedicatedVirtualAccountSplit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **dedicatedVirtualAccountSplit** | **DedicatedVirtualAccountSplit**|  | |


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
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

