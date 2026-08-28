# MiscellaneousApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listAvsStates**](#listavsstates) | **GET** /address_verification/states | List States (AVS)|
|[**listCountries**](#listcountries) | **GET** /country | List Countries|
|[**resolveCardBin**](#resolvecardbin) | **GET** /decision/bin/{bin} | Resolve Card BIN|

# **listAvsStates**
> MiscellaneousListStatesResponse listAvsStates()

Get a list of states for a country for address verification

### Example

```typescript
import {
    MiscellaneousApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new MiscellaneousApi(configuration);

let country: string; //The country code of the states to list. It is gotten after the charge request (optional) (default to undefined)

const { status, data } = await apiInstance.listAvsStates(
    country
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **country** | [**string**] | The country code of the states to list. It is gotten after the charge request | (optional) defaults to undefined|


### Return type

**MiscellaneousListStatesResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Miscellaneous List States response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listCountries**
> MiscellaneousListCountriesResponse listCountries()

List all supported countries on Paystack

### Example

```typescript
import {
    MiscellaneousApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new MiscellaneousApi(configuration);

const { status, data } = await apiInstance.listCountries();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**MiscellaneousListCountriesResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Miscellaneous List Countries response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resolveCardBin**
> VerificationResolveCardBINResponse resolveCardBin()

Get the details of a card BIN

### Example

```typescript
import {
    MiscellaneousApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new MiscellaneousApi(configuration);

let bin: number; //The card bank identification number (default to undefined)

const { status, data } = await apiInstance.resolveCardBin(
    bin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bin** | [**number**] | The card bank identification number | defaults to undefined|


### Return type

**VerificationResolveCardBINResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Verification Resolve Card B I N response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

