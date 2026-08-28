# PageApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addProductsToPage**](#addproductstopage) | **POST** /page/{id}/product | Add Products|
|[**checkPageSlugAvailability**](#checkpageslugavailability) | **GET** /page/check_slug_availability/{slug} | Check Slug Availability|
|[**createPage**](#createpage) | **POST** /page | Create Page|
|[**fetchPage**](#fetchpage) | **GET** /page/{id} | Fetch Page|
|[**listPages**](#listpages) | **GET** /page | List Pages|
|[**updatePage**](#updatepage) | **PUT** /page/{id} | Update Page|

# **addProductsToPage**
> PageAddProductsResponse addProductsToPage()

Add products to a previously created payment page. You can only add products to pages that was created with a `product` type. 

### Example

```typescript
import {
    PageApi,
    Configuration,
    PageProduct
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let id: string; // (default to undefined)
let pageProduct: PageProduct; // (optional)

const { status, data } = await apiInstance.addProductsToPage(
    id,
    pageProduct
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageProduct** | **PageProduct**|  | |
| **id** | [**string**] |  | defaults to undefined|


### Return type

**PageAddProductsResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Page Add Products response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **checkPageSlugAvailability**
> PageCheckSlugAvailabilityResponse checkPageSlugAvailability()

Check if a custom slug is available for use when creating a payment page

### Example

```typescript
import {
    PageApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let slug: string; //The custom slug to check (default to undefined)

const { status, data } = await apiInstance.checkPageSlugAvailability(
    slug
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **slug** | [**string**] | The custom slug to check | defaults to undefined|


### Return type

**PageCheckSlugAvailabilityResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Page Check Slug Availability response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createPage**
> PageCreateResponse createPage()

Create a webpage to receive payments

### Example

```typescript
import {
    PageApi,
    Configuration,
    PageCreate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let pageCreate: PageCreate; // (optional)

const { status, data } = await apiInstance.createPage(
    pageCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageCreate** | **PageCreate**|  | |


### Return type

**PageCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Page Create response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchPage**
> PageFetchResponse fetchPage()

Get a previously created payment page

### Example

```typescript
import {
    PageApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let id: number; //The unique identifier of a payment page (default to undefined)

const { status, data } = await apiInstance.fetchPage(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The unique identifier of a payment page | defaults to undefined|


### Return type

**PageFetchResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Page Fetch response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listPages**
> PageListResponse listPages()

List all previously created payment pages

### Example

```typescript
import {
    PageApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let perPage: number; //Number of records to fetch per page (optional) (default to 50)
let page: number; //The section to retrieve (optional) (default to undefined)
let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)

const { status, data } = await apiInstance.listPages(
    perPage,
    page,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **perPage** | [**number**] | Number of records to fetch per page | (optional) defaults to 50|
| **page** | [**number**] | The section to retrieve | (optional) defaults to undefined|
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|


### Return type

**PageListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Page List response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updatePage**
> PageUpdateResponse updatePage()

Update a previously created payment page

### Example

```typescript
import {
    PageApi,
    Configuration,
    PageUpdate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new PageApi(configuration);

let id: number; //The unique identifier of a payment page (default to undefined)
let pageUpdate: PageUpdate; // (optional)

const { status, data } = await apiInstance.updatePage(
    id,
    pageUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **pageUpdate** | **PageUpdate**|  | |
| **id** | [**number**] | The unique identifier of a payment page | defaults to undefined|


### Return type

**PageUpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Page Update response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

