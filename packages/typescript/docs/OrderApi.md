# OrderApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createOrder**](#createorder) | **POST** /order | Create Order|
|[**fetchOrder**](#fetchorder) | **GET** /order/{id} | Fetch Order|
|[**fetchProductOrders**](#fetchproductorders) | **GET** /order/product/{id} | Fetch Product Orders|
|[**listOrders**](#listorders) | **GET** /order | List Orders|
|[**validateOrder**](#validateorder) | **GET** /order/{code}/validate | Validate Order|

# **createOrder**
> OrderCreateResponse createOrder()

Create an order for selected items

### Example

```typescript
import {
    OrderApi,
    Configuration,
    OrderCreate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let orderCreate: OrderCreate; // (optional)

const { status, data } = await apiInstance.createOrder(
    orderCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **orderCreate** | **OrderCreate**|  | |


### Return type

**OrderCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Order Create response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchOrder**
> OrderFetchResponse fetchOrder()

Fetch the details of a previously created order

### Example

```typescript
import {
    OrderApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let id: number; //The unique identifier of the order (default to undefined)

const { status, data } = await apiInstance.fetchOrder(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of the order | defaults to undefined|


### Return type

**OrderFetchResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Order Fetch response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchProductOrders**
> OrderFetchProductResponse fetchProductOrders()

Fetch all orders for a particular product

### Example

```typescript
import {
    OrderApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let id: number; //The unique identifier of the order (default to undefined)

const { status, data } = await apiInstance.fetchProductOrders(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of the order | defaults to undefined|


### Return type

**OrderFetchProductResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Order Fetch Product response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listOrders**
> OrderListResponse listOrders()

List the previously created orders

### Example

```typescript
import {
    OrderApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let perPage: number; //Number of records to fetch per page (optional) (default to undefined)
let page: number; //The section to retrieve (optional) (default to undefined)
let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)

const { status, data } = await apiInstance.listOrders(
    perPage,
    page,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **perPage** | [**number**] | Number of records to fetch per page | (optional) defaults to undefined|
| **page** | [**number**] | The section to retrieve | (optional) defaults to undefined|
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|


### Return type

**OrderListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Order List response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateOrder**
> OrderValidateResponse validateOrder()

Validate a pay for me order

### Example

```typescript
import {
    OrderApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new OrderApi(configuration);

let code: string; //The unique code of a previously created order (default to undefined)

const { status, data } = await apiInstance.validateOrder(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | The unique code of a previously created order | defaults to undefined|


### Return type

**OrderValidateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Order Validate response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

