# SubscriptionApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createSubscription**](#createsubscription) | **POST** /subscription | Create Subscription|
|[**disableSubscription**](#disablesubscription) | **POST** /subscription/disable | Disable Subscription|
|[**enableSubscription**](#enablesubscription) | **POST** /subscription/enable | Enable Subscription|
|[**fetchSubscription**](#fetchsubscription) | **GET** /subscription/{code} | Fetch Subscription|
|[**listSubscriptions**](#listsubscriptions) | **GET** /subscription | List Subscriptions|
|[**manageEmailSubscription**](#manageemailsubscription) | **POST** /subscription/{code}/manage/email | Send Update Subscription Link|
|[**manageLinkSubscription**](#managelinksubscription) | **GET** /subscription/{code}/manage/link | Generate Update Subscription Link|

# **createSubscription**
> SubscriptionCreateResponse createSubscription()

Create a subscription a customer

### Example

```typescript
import {
    SubscriptionApi,
    Configuration,
    SubscriptionCreate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SubscriptionApi(configuration);

let subscriptionCreate: SubscriptionCreate; // (optional)

const { status, data } = await apiInstance.createSubscription(
    subscriptionCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subscriptionCreate** | **SubscriptionCreate**|  | |


### Return type

**SubscriptionCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Subscription Create response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disableSubscription**
> SubscriptionDisableResponse disableSubscription()

Disable a subscription on your integration

### Example

```typescript
import {
    SubscriptionApi,
    Configuration,
    SubscriptionToggle
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SubscriptionApi(configuration);

let subscriptionToggle: SubscriptionToggle; // (optional)

const { status, data } = await apiInstance.disableSubscription(
    subscriptionToggle
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subscriptionToggle** | **SubscriptionToggle**|  | |


### Return type

**SubscriptionDisableResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Subscription Disable response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enableSubscription**
> Response enableSubscription()

Enable a subscription on your integration

### Example

```typescript
import {
    SubscriptionApi,
    Configuration,
    SubscriptionToggle
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SubscriptionApi(configuration);

let subscriptionToggle: SubscriptionToggle; // (optional)

const { status, data } = await apiInstance.enableSubscription(
    subscriptionToggle
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **subscriptionToggle** | **SubscriptionToggle**|  | |


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

# **fetchSubscription**
> SubscriptionFetchResponse fetchSubscription()

Get details of a customer\'s subscription

### Example

```typescript
import {
    SubscriptionApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SubscriptionApi(configuration);

let code: string; //The subscription code for the subscription you want to fetch (default to undefined)

const { status, data } = await apiInstance.fetchSubscription(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | The subscription code for the subscription you want to fetch | defaults to undefined|


### Return type

**SubscriptionFetchResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Subscription Fetch response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listSubscriptions**
> SubscriptionListResponse listSubscriptions()

List all subscriptions available on your integration

### Example

```typescript
import {
    SubscriptionApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SubscriptionApi(configuration);

let perPage: number; //Number of records to fetch per page (optional) (default to undefined)
let page: number; //The section to retrieve (optional) (default to undefined)
let plan: number; //Plan ID (optional) (default to undefined)
let customer: string; //Customer ID (optional) (default to undefined)
let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)

const { status, data } = await apiInstance.listSubscriptions(
    perPage,
    page,
    plan,
    customer,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **perPage** | [**number**] | Number of records to fetch per page | (optional) defaults to undefined|
| **page** | [**number**] | The section to retrieve | (optional) defaults to undefined|
| **plan** | [**number**] | Plan ID | (optional) defaults to undefined|
| **customer** | [**string**] | Customer ID | (optional) defaults to undefined|
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|


### Return type

**SubscriptionListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Subscription List response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **manageEmailSubscription**
> Response manageEmailSubscription()

Email a customer a link for updating the card on their subscription

### Example

```typescript
import {
    SubscriptionApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SubscriptionApi(configuration);

let code: string; //Subscription code (default to undefined)

const { status, data } = await apiInstance.manageEmailSubscription(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Subscription code | defaults to undefined|


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
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **manageLinkSubscription**
> Response manageLinkSubscription()

Generate a link for updating the card on a subscription

### Example

```typescript
import {
    SubscriptionApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new SubscriptionApi(configuration);

let code: string; //Subscription code (default to undefined)

const { status, data } = await apiInstance.manageLinkSubscription(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Subscription code | defaults to undefined|


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
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

