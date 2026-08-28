# CustomerApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCustomer**](#createcustomer) | **POST** /customer | Create Customer|
|[**deactivateAuthorizationCustomer**](#deactivateauthorizationcustomer) | **POST** /customer/authorization/deactivate | Deactivate Authorization|
|[**directDebitActivationChargeCustomer**](#directdebitactivationchargecustomer) | **PUT** /customer/{id}/directdebit-activation-charge | Direct Debit Activation Charge|
|[**fetchCustomer**](#fetchcustomer) | **GET** /customer/{code} | Fetch Customer|
|[**fetchMandateAuthorizationsCustomer**](#fetchmandateauthorizationscustomer) | **GET** /customer/{id}/directdebit-mandate-authorizations | Fetch Mandate Authorizations|
|[**initializeAuthorizationCustomer**](#initializeauthorizationcustomer) | **POST** /customer/authorization/initialize | Initialize Authorization|
|[**initializeDirectDebitCustomer**](#initializedirectdebitcustomer) | **POST** /customer/{id}/initialize-direct-debit | Initialize Direct Debit|
|[**listCustomers**](#listcustomers) | **GET** /customer | List Customers|
|[**riskActionCustomer**](#riskactioncustomer) | **POST** /customer/set_risk_action | Set Risk Action|
|[**updateCustomer**](#updatecustomer) | **PUT** /customer/{code} | Update Customer|
|[**validateCustomer**](#validatecustomer) | **POST** /customer/{code}/identification | Validate Customer|
|[**verifyAuthorizationCustomer**](#verifyauthorizationcustomer) | **GET** /customer/authorization/verify/{reference} | Verify Authorization|

# **createCustomer**
> CustomerCreateResponse createCustomer()

Create a customer on your integration

### Example

```typescript
import {
    CustomerApi,
    Configuration,
    CustomerCreate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let customerCreate: CustomerCreate; // (optional)

const { status, data } = await apiInstance.createCustomer(
    customerCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerCreate** | **CustomerCreate**|  | |


### Return type

**CustomerCreateResponse**

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

# **deactivateAuthorizationCustomer**
> CustomerDeactivateAuthorizationResponse deactivateAuthorizationCustomer()

Deactivate an authorization for any payment channel.

### Example

```typescript
import {
    CustomerApi,
    Configuration,
    CustomerDeactivateAuthorization
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let customerDeactivateAuthorization: CustomerDeactivateAuthorization; // (optional)

const { status, data } = await apiInstance.deactivateAuthorizationCustomer(
    customerDeactivateAuthorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerDeactivateAuthorization** | **CustomerDeactivateAuthorization**|  | |


### Return type

**CustomerDeactivateAuthorizationResponse**

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

# **directDebitActivationChargeCustomer**
> CustomerDirectDebitActivationChargeResponse directDebitActivationChargeCustomer()

Trigger an activation charge on an inactive mandate on behalf of your customer

### Example

```typescript
import {
    CustomerApi,
    Configuration,
    CustomerDirectDebitActivationChargeRequest
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let id: number; //The customer ID attached to the authorization (default to undefined)
let customerDirectDebitActivationChargeRequest: CustomerDirectDebitActivationChargeRequest; // (optional)

const { status, data } = await apiInstance.directDebitActivationChargeCustomer(
    id,
    customerDirectDebitActivationChargeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerDirectDebitActivationChargeRequest** | **CustomerDirectDebitActivationChargeRequest**|  | |
| **id** | [**number**] | The customer ID attached to the authorization | defaults to undefined|


### Return type

**CustomerDirectDebitActivationChargeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Customer Direct Debit Activation Charge response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchCustomer**
> CustomerFetchResponse fetchCustomer()

Get details of a customer on your integration.

### Example

```typescript
import {
    CustomerApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let code: string; //The code for the customer gotten from the response of the customer creation (default to undefined)

const { status, data } = await apiInstance.fetchCustomer(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | The code for the customer gotten from the response of the customer creation | defaults to undefined|


### Return type

**CustomerFetchResponse**

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

# **fetchMandateAuthorizationsCustomer**
> CustomerFetchMandateAuthorizationsResponse fetchMandateAuthorizationsCustomer()

Get the list of direct debit mandates associated with a customer

### Example

```typescript
import {
    CustomerApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let id: number; //The customer ID for the authorizations to fetch (default to undefined)

const { status, data } = await apiInstance.fetchMandateAuthorizationsCustomer(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The customer ID for the authorizations to fetch | defaults to undefined|


### Return type

**CustomerFetchMandateAuthorizationsResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Customer Fetch Mandate Authorizations response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initializeAuthorizationCustomer**
> CustomerAuthorizationInitializeResponse initializeAuthorizationCustomer(customerAuthorizationInitializeRequest)

Initiate a request to create a reusable authorization code for recurring transactions

### Example

```typescript
import {
    CustomerApi,
    Configuration,
    CustomerAuthorizationInitializeRequest
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let customerAuthorizationInitializeRequest: CustomerAuthorizationInitializeRequest; //

const { status, data } = await apiInstance.initializeAuthorizationCustomer(
    customerAuthorizationInitializeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerAuthorizationInitializeRequest** | **CustomerAuthorizationInitializeRequest**|  | |


### Return type

**CustomerAuthorizationInitializeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Customer Authorization Initialize response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **initializeDirectDebitCustomer**
> CustomerInitializeDirectDebitResponse initializeDirectDebitCustomer()

Initialize the process of linking an account to a customer for Direct Debit transactions

### Example

```typescript
import {
    CustomerApi,
    Configuration,
    CustomerInitializeDirectDebitRequest
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let id: number; //The ID of the customer to initialize the direct debit for (default to undefined)
let customerInitializeDirectDebitRequest: CustomerInitializeDirectDebitRequest; // (optional)

const { status, data } = await apiInstance.initializeDirectDebitCustomer(
    id,
    customerInitializeDirectDebitRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerInitializeDirectDebitRequest** | **CustomerInitializeDirectDebitRequest**|  | |
| **id** | [**number**] | The ID of the customer to initialize the direct debit for | defaults to undefined|


### Return type

**CustomerInitializeDirectDebitResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Customer Initialize Direct Debit response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCustomers**
> CustomerListResponse listCustomers()

List customers on your integration

### Example

```typescript
import {
    CustomerApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let useCursor: boolean; //A flag to indicate if cursor based pagination should be used (optional) (default to undefined)
let next: string; //An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional) (default to undefined)
let previous: string; //An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional) (default to undefined)
let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)
let perPage: string; //The number of records to fetch per request (optional) (default to undefined)
let page: string; //The offset to retrieve data from (optional) (default to undefined)

const { status, data } = await apiInstance.listCustomers(
    useCursor,
    next,
    previous,
    from,
    to,
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
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|
| **perPage** | [**string**] | The number of records to fetch per request | (optional) defaults to undefined|
| **page** | [**string**] | The offset to retrieve data from | (optional) defaults to undefined|


### Return type

**CustomerListResponse**

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

# **riskActionCustomer**
> CustomerWhitelistBlacklistResponse riskActionCustomer()

Set customer\'s risk action by whitelisting or blacklisting the customer

### Example

```typescript
import {
    CustomerApi,
    Configuration,
    CustomerRiskAction
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let customerRiskAction: CustomerRiskAction; // (optional)

const { status, data } = await apiInstance.riskActionCustomer(
    customerRiskAction
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerRiskAction** | **CustomerRiskAction**|  | |


### Return type

**CustomerWhitelistBlacklistResponse**

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

# **updateCustomer**
> CustomerUpdateResponse updateCustomer()

Update a customer\'s details on your integration

### Example

```typescript
import {
    CustomerApi,
    Configuration,
    CustomerUpdate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let code: string; //The code for the customer gotten from the response of the customer creation (default to undefined)
let customerUpdate: CustomerUpdate; // (optional)

const { status, data } = await apiInstance.updateCustomer(
    code,
    customerUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerUpdate** | **CustomerUpdate**|  | |
| **code** | [**string**] | The code for the customer gotten from the response of the customer creation | defaults to undefined|


### Return type

**CustomerUpdateResponse**

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

# **validateCustomer**
> CustomerValidateResponse validateCustomer()

Validate a customer\'s identity

### Example

```typescript
import {
    CustomerApi,
    Configuration,
    CustomerValidate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let code: string; //The code for the customer gotten from the response of the customer creation (default to undefined)
let customerValidate: CustomerValidate; // (optional)

const { status, data } = await apiInstance.validateCustomer(
    code,
    customerValidate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **customerValidate** | **CustomerValidate**|  | |
| **code** | [**string**] | The code for the customer gotten from the response of the customer creation | defaults to undefined|


### Return type

**CustomerValidateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**202** |  |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **verifyAuthorizationCustomer**
> CustomerAuthorizationVerifyResponse verifyAuthorizationCustomer()

Check the status of an authorization request

### Example

```typescript
import {
    CustomerApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new CustomerApi(configuration);

let reference: string; //The reference returned in the initialization response (default to undefined)

const { status, data } = await apiInstance.verifyAuthorizationCustomer(
    reference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reference** | [**string**] | The reference returned in the initialization response | defaults to undefined|


### Return type

**CustomerAuthorizationVerifyResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Customer Authorization Verify response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

