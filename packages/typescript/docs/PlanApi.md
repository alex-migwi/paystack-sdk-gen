# PlanApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createPlan**](#createplan) | **POST** /plan | Create Plan|
|[**fetchPlan**](#fetchplan) | **GET** /plan/{code} | Fetch Plan|
|[**listPlans**](#listplans) | **GET** /plan | List Plans|
|[**updatePlan**](#updateplan) | **PUT** /plan/{code} | Update Plan|

# **createPlan**
> PlanCreateResponse createPlan()

Create a plan for recurring payments

### Example

```typescript
import {
    PlanApi,
    Configuration,
    PlanCreate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PlanApi(configuration);

let planCreate: PlanCreate; // (optional)

const { status, data } = await apiInstance.createPlan(
    planCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planCreate** | **PlanCreate**|  | |


### Return type

**PlanCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plan Create response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchPlan**
> PlanFetchResponse fetchPlan()

Get the details of a payment plan

### Example

```typescript
import {
    PlanApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PlanApi(configuration);

let code: string; //The plan code you want to fetch (default to undefined)

const { status, data } = await apiInstance.fetchPlan(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | The plan code you want to fetch | defaults to undefined|


### Return type

**PlanFetchResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plan Fetch response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPlans**
> PlanListResponse listPlans()

List all recurring payment plans

### Example

```typescript
import {
    PlanApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PlanApi(configuration);

let perPage: number; //Number of records to fetch per page (optional) (default to undefined)
let page: number; //The section to retrieve (optional) (default to undefined)
let interval: 'daily' | 'weekly' | 'monthly' | 'biannually' | 'annually'; //Specify interval of the plan (optional) (default to undefined)
let amount: number; //The amount on the plans to retrieve (optional) (default to undefined)
let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)

const { status, data } = await apiInstance.listPlans(
    perPage,
    page,
    interval,
    amount,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **perPage** | [**number**] | Number of records to fetch per page | (optional) defaults to undefined|
| **page** | [**number**] | The section to retrieve | (optional) defaults to undefined|
| **interval** | [**&#39;daily&#39; | &#39;weekly&#39; | &#39;monthly&#39; | &#39;biannually&#39; | &#39;annually&#39;**]**Array<&#39;daily&#39; &#124; &#39;weekly&#39; &#124; &#39;monthly&#39; &#124; &#39;biannually&#39; &#124; &#39;annually&#39;>** | Specify interval of the plan | (optional) defaults to undefined|
| **amount** | [**number**] | The amount on the plans to retrieve | (optional) defaults to undefined|
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|


### Return type

**PlanListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plan List response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePlan**
> PlanUpdateResponse updatePlan()

Update a plan details on your integration

### Example

```typescript
import {
    PlanApi,
    Configuration,
    PlanUpdate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PlanApi(configuration);

let code: string; //The plan code you want to fetch (default to undefined)
let planUpdate: PlanUpdate; // (optional)

const { status, data } = await apiInstance.updatePlan(
    code,
    planUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **planUpdate** | **PlanUpdate**|  | |
| **code** | [**string**] | The plan code you want to fetch | defaults to undefined|


### Return type

**PlanUpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Plan Update response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

