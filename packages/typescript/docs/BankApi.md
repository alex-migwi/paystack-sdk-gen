# BankApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**listBanks**](#listbanks) | **GET** /bank | List Banks|
|[**resolveAccountNumber**](#resolveaccountnumber) | **GET** /bank/resolve | Resolve Account Number|
|[**validateBankAccount**](#validatebankaccount) | **POST** /bank/validate | Validate Bank Account|

# **listBanks**
> MiscellaneousListBanksResponse listBanks()

List banks supported on Paystack

### Example

```typescript
import {
    BankApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new BankApi(configuration);

let country: 'ghana' | 'kenya' | 'nigeria' | 'south africa'; //The country from which to obtain the list of supported banks (optional) (default to undefined)
let currency: 'GHS' | 'KES' | 'NGN' | 'ZAR'; //The country from which to obtain the list of supported banks (optional) (default to undefined)
let useCursor: boolean; //A flag to indicate if cursor based pagination should be used (optional) (default to undefined)
let perPage: number; //The number of records to fetch per request (optional) (default to undefined)
let page: number; //The offset to retrieve data from (optional) (default to undefined)
let next: string; //An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional) (default to undefined)
let previous: string; //An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional) (default to undefined)
let payWithBankTransfer: boolean; //A flag to filter for available banks a customer can make a transfer to complete a payment (optional) (default to undefined)
let payWithBank: boolean; //A flag to filter for banks a customer can pay directly from (optional) (default to undefined)
let enabledForVerification: boolean; //A flag to filter the banks that are supported for account verification in South Africa. You need to combine this with either the `currency` or `country` filter.  (optional) (default to undefined)
let gateway: 'emandate' | 'digitalbankmandate'; //The type of gateway for a Nigerian bank (optional) (default to undefined)
let type: 'ghipps' | 'mobile_money' | 'nuban' | 'kepss' | 'basa'; //Type of financial channel (optional) (default to undefined)
let includeNipSortCode: boolean; //A flag that returns Nigerian banks with their NIP institution code.  The returned value can be used in identifying institutions on NIP.  (optional) (default to undefined)

const { status, data } = await apiInstance.listBanks(
    country,
    currency,
    useCursor,
    perPage,
    page,
    next,
    previous,
    payWithBankTransfer,
    payWithBank,
    enabledForVerification,
    gateway,
    type,
    includeNipSortCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **country** | [**&#39;ghana&#39; | &#39;kenya&#39; | &#39;nigeria&#39; | &#39;south africa&#39;**]**Array<&#39;ghana&#39; &#124; &#39;kenya&#39; &#124; &#39;nigeria&#39; &#124; &#39;south africa&#39;>** | The country from which to obtain the list of supported banks | (optional) defaults to undefined|
| **currency** | [**&#39;GHS&#39; | &#39;KES&#39; | &#39;NGN&#39; | &#39;ZAR&#39;**]**Array<&#39;GHS&#39; &#124; &#39;KES&#39; &#124; &#39;NGN&#39; &#124; &#39;ZAR&#39;>** | The country from which to obtain the list of supported banks | (optional) defaults to undefined|
| **useCursor** | [**boolean**] | A flag to indicate if cursor based pagination should be used | (optional) defaults to undefined|
| **perPage** | [**number**] | The number of records to fetch per request | (optional) defaults to undefined|
| **page** | [**number**] | The offset to retrieve data from | (optional) defaults to undefined|
| **next** | [**string**] | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | (optional) defaults to undefined|
| **previous** | [**string**] | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | (optional) defaults to undefined|
| **payWithBankTransfer** | [**boolean**] | A flag to filter for available banks a customer can make a transfer to complete a payment | (optional) defaults to undefined|
| **payWithBank** | [**boolean**] | A flag to filter for banks a customer can pay directly from | (optional) defaults to undefined|
| **enabledForVerification** | [**boolean**] | A flag to filter the banks that are supported for account verification in South Africa. You need to combine this with either the &#x60;currency&#x60; or &#x60;country&#x60; filter.  | (optional) defaults to undefined|
| **gateway** | [**&#39;emandate&#39; | &#39;digitalbankmandate&#39;**]**Array<&#39;emandate&#39; &#124; &#39;digitalbankmandate&#39;>** | The type of gateway for a Nigerian bank | (optional) defaults to undefined|
| **type** | [**&#39;ghipps&#39; | &#39;mobile_money&#39; | &#39;nuban&#39; | &#39;kepss&#39; | &#39;basa&#39;**]**Array<&#39;ghipps&#39; &#124; &#39;mobile_money&#39; &#124; &#39;nuban&#39; &#124; &#39;kepss&#39; &#124; &#39;basa&#39;>** | Type of financial channel | (optional) defaults to undefined|
| **includeNipSortCode** | [**boolean**] | A flag that returns Nigerian banks with their NIP institution code.  The returned value can be used in identifying institutions on NIP.  | (optional) defaults to undefined|


### Return type

**MiscellaneousListBanksResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Miscellaneous List Banks response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **resolveAccountNumber**
> VerificationResolveAccountNumberResponse resolveAccountNumber()

Resolve an account number to confirm the name associated with it

### Example

```typescript
import {
    BankApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new BankApi(configuration);

let accountNumber: number; //The account number of interest (optional) (default to undefined)
let bankCode: number; //The bank code associated with the account number (optional) (default to undefined)

const { status, data } = await apiInstance.resolveAccountNumber(
    accountNumber,
    bankCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **accountNumber** | [**number**] | The account number of interest | (optional) defaults to undefined|
| **bankCode** | [**number**] | The bank code associated with the account number | (optional) defaults to undefined|


### Return type

**VerificationResolveAccountNumberResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Verification Resolve Account Number response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **validateBankAccount**
> VerificationValidateAccountResponse validateBankAccount()

Confirm the authenticity of a customer\'s account number before sending money

### Example

```typescript
import {
    BankApi,
    Configuration,
    BankValidateRequest
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new BankApi(configuration);

let bankValidateRequest: BankValidateRequest; // (optional)

const { status, data } = await apiInstance.validateBankAccount(
    bankValidateRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **bankValidateRequest** | **BankValidateRequest**|  | |


### Return type

**VerificationValidateAccountResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Verification Validate Account response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

