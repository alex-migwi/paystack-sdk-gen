# StorefrontApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addProductsToStorefront**](#addproductstostorefront) | **POST** /storefront/{id}/product | Add Products to Storefront|
|[**createStorefront**](#createstorefront) | **POST** /storefront | Create Storefront|
|[**deleteStorefront**](#deletestorefront) | **DELETE** /storefront/{id} | Delete Storefront|
|[**duplicateStorefront**](#duplicatestorefront) | **POST** /storefront/{id}/duplicate | Duplicate Storefront|
|[**fetchStorefront**](#fetchstorefront) | **GET** /storefront/{id} | Fetch Storefront|
|[**fetchStorefrontOrders**](#fetchstorefrontorders) | **GET** /storefront/{id}/order | Fetch Storefront Orders|
|[**listStorefrontProducts**](#liststorefrontproducts) | **GET** /storefront/{id}/product | List Storefront Products|
|[**listStorefronts**](#liststorefronts) | **GET** /storefront | List Storefronts|
|[**publishStorefront**](#publishstorefront) | **POST** /storefront/{id}/publish | Publish Storefront|
|[**updateStorefront**](#updatestorefront) | **PUT** /storefront/{id} | Update Storefront|
|[**verifyStorefrontSlug**](#verifystorefrontslug) | **GET** /storefront/verify/{slug} | Verify Storefront Slug|

# **addProductsToStorefront**
> Response addProductsToStorefront()

Add previously created products to a Storefront

### Example

```typescript
import {
    StorefrontApi,
    Configuration,
    StorefrontAddProducts
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new StorefrontApi(configuration);

let id: number; //The unique identifier of the Storefront (default to undefined)
let storefrontAddProducts: StorefrontAddProducts; // (optional)

const { status, data } = await apiInstance.addProductsToStorefront(
    id,
    storefrontAddProducts
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storefrontAddProducts** | **StorefrontAddProducts**|  | |
| **id** | [**number**] | The unique identifier of the Storefront | defaults to undefined|


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

# **createStorefront**
> StorefrontCreateResponse createStorefront()

Create a digital shop to manage and display your products

### Example

```typescript
import {
    StorefrontApi,
    Configuration,
    StorefrontCreate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new StorefrontApi(configuration);

let storefrontCreate: StorefrontCreate; // (optional)

const { status, data } = await apiInstance.createStorefront(
    storefrontCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storefrontCreate** | **StorefrontCreate**|  | |


### Return type

**StorefrontCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storefront Create response |  -  |
|**400** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteStorefront**
> StorefrontDeleteResponse deleteStorefront()

Delete a previously created Storefront

### Example

```typescript
import {
    StorefrontApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new StorefrontApi(configuration);

let id: number; //The unique identifier of the Storefront (default to undefined)

const { status, data } = await apiInstance.deleteStorefront(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of the Storefront | defaults to undefined|


### Return type

**StorefrontDeleteResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storefront Delete response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **duplicateStorefront**
> Response duplicateStorefront()

Duplicate a previously created Storefront

### Example

```typescript
import {
    StorefrontApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new StorefrontApi(configuration);

let id: number; //The unique identifier of the Storefront (default to undefined)

const { status, data } = await apiInstance.duplicateStorefront(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of the Storefront | defaults to undefined|


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

# **fetchStorefront**
> StorefrontFetchResponse fetchStorefront()

Get the details of a previously created Storefront

### Example

```typescript
import {
    StorefrontApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new StorefrontApi(configuration);

let id: number; //The unique identifier of the Storefront (default to undefined)

const { status, data } = await apiInstance.fetchStorefront(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of the Storefront | defaults to undefined|


### Return type

**StorefrontFetchResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storefront Fetch response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchStorefrontOrders**
> Response fetchStorefrontOrders()

Fetch all orders in your Storefront

### Example

```typescript
import {
    StorefrontApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new StorefrontApi(configuration);

let id: number; //The unique identifier of the Storefront (default to undefined)

const { status, data } = await apiInstance.fetchStorefrontOrders(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of the Storefront | defaults to undefined|


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

# **listStorefrontProducts**
> Response listStorefrontProducts()

List the products in a Storefront

### Example

```typescript
import {
    StorefrontApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new StorefrontApi(configuration);

let id: number; //The unique identifier of the Storefront (default to undefined)

const { status, data } = await apiInstance.listStorefrontProducts(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of the Storefront | defaults to undefined|


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

# **listStorefronts**
> StorefrontListResponse listStorefronts()

List the storefronts you previously created

### Example

```typescript
import {
    StorefrontApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new StorefrontApi(configuration);

let perPage: number; //Number of records to fetch per request (optional) (default to 50)
let page: number; //The offset to retrieve data from (optional) (default to 1)
let status: 'active' | 'inactive'; // (optional) (default to undefined)

const { status, data } = await apiInstance.listStorefronts(
    perPage,
    page,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **perPage** | [**number**] | Number of records to fetch per request | (optional) defaults to 50|
| **page** | [**number**] | The offset to retrieve data from | (optional) defaults to 1|
| **status** | [**&#39;active&#39; | &#39;inactive&#39;**]**Array<&#39;active&#39; &#124; &#39;inactive&#39;>** |  | (optional) defaults to undefined|


### Return type

**StorefrontListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storefront List response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **publishStorefront**
> Response publishStorefront()

Make your Storefront publicly available

### Example

```typescript
import {
    StorefrontApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new StorefrontApi(configuration);

let id: number; //The unique identifier of the Storefront (default to undefined)

const { status, data } = await apiInstance.publishStorefront(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of the Storefront | defaults to undefined|


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

# **updateStorefront**
> StorefrontUpdateResponse updateStorefront()

Update the details of a previously created Storefront

### Example

```typescript
import {
    StorefrontApi,
    Configuration,
    StorefrontUpdate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new StorefrontApi(configuration);

let id: number; //The unique identifier of the Storefront (default to undefined)
let storefrontUpdate: StorefrontUpdate; // (optional)

const { status, data } = await apiInstance.updateStorefront(
    id,
    storefrontUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **storefrontUpdate** | **StorefrontUpdate**|  | |
| **id** | [**number**] | The unique identifier of the Storefront | defaults to undefined|


### Return type

**StorefrontUpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Storefront Update response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyStorefrontSlug**
> Response verifyStorefrontSlug()

Verify the availability of a slug before using it for your Storefront

### Example

```typescript
import {
    StorefrontApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new StorefrontApi(configuration);

let slug: string; //The custom slug to check (default to undefined)

const { status, data } = await apiInstance.verifyStorefrontSlug(
    slug
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **slug** | [**string**] | The custom slug to check | defaults to undefined|


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

