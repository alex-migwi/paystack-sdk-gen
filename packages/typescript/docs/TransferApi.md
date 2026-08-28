# TransferApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**disableOtpFinalizeTransfer**](#disableotpfinalizetransfer) | **POST** /transfer/disable_otp_finalize | Finalize Disabling OTP for Transfers|
|[**disableOtpTransfer**](#disableotptransfer) | **POST** /transfer/disable_otp | Disable OTP for Transfers|
|[**enableOtpTransfer**](#enableotptransfer) | **POST** /transfer/enable_otp | Enable OTP requirement for Transfers|
|[**exportTransferTransfer**](#exporttransfertransfer) | **GET** /transfer/export | Export Transfers|
|[**fetchTransfer**](#fetchtransfer) | **GET** /transfer/{code} | Fetch Transfer|
|[**finalizeTransfer**](#finalizetransfer) | **POST** /transfer/finalize_transfer | Finalize Transfer|
|[**initiateBulkTransfer**](#initiatebulktransfer) | **POST** /transfer/bulk | Initiate Bulk Transfer|
|[**initiateTransfer**](#initiatetransfer) | **POST** /transfer | Initiate Transfer|
|[**listTransfers**](#listtransfers) | **GET** /transfer | List Transfers|
|[**resendOtpTransfer**](#resendotptransfer) | **POST** /transfer/resend_otp | Resend OTP for Transfer|
|[**verifyTransfer**](#verifytransfer) | **GET** /transfer/verify/{reference} | Verify Transfer|

# **disableOtpFinalizeTransfer**
> TransferFinalizeDisablesOtpResponse disableOtpFinalizeTransfer()

Finalize the request to disable OTP on your transfers

### Example

```typescript
import {
    TransferApi,
    Configuration,
    TransferFinalizeDisableOTP
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferApi(configuration);

let transferFinalizeDisableOTP: TransferFinalizeDisableOTP; // (optional)

const { status, data } = await apiInstance.disableOtpFinalizeTransfer(
    transferFinalizeDisableOTP
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferFinalizeDisableOTP** | **TransferFinalizeDisableOTP**|  | |


### Return type

**TransferFinalizeDisablesOtpResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disableOtpTransfer**
> TransferDisablesOtpResponse disableOtpTransfer()

This is used in the event that you want to be able to complete transfers programmatically without use of OTPs.  No arguments required. You will get an OTP to complete the request. 

### Example

```typescript
import {
    TransferApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferApi(configuration);

const { status, data } = await apiInstance.disableOtpTransfer();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TransferDisablesOtpResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enableOtpTransfer**
> TransferEnablesOtpResponse enableOtpTransfer()

In the event that a customer wants to stop being able to complete transfers programmatically, this endpoint helps turn OTP requirement back on.  No arguments required. 

### Example

```typescript
import {
    TransferApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferApi(configuration);

const { status, data } = await apiInstance.enableOtpTransfer();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**TransferEnablesOtpResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **exportTransferTransfer**
> Response exportTransferTransfer()

Export a list of transfers carried out on your integration

### Example

```typescript
import {
    TransferApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferApi(configuration);

let recipient: string; //Export transfer by the recipient code (optional) (default to undefined)
let status: 'pending' | 'success' | 'failed' | 'otp' | 'abandoned' | 'reversed' | 'blocked' | 'rejected' | 'received'; //Export transfer by status (optional) (default to 'pending')
let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)

const { status, data } = await apiInstance.exportTransferTransfer(
    recipient,
    status,
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **recipient** | [**string**] | Export transfer by the recipient code | (optional) defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;success&#39; | &#39;failed&#39; | &#39;otp&#39; | &#39;abandoned&#39; | &#39;reversed&#39; | &#39;blocked&#39; | &#39;rejected&#39; | &#39;received&#39;**]**Array<&#39;pending&#39; &#124; &#39;success&#39; &#124; &#39;failed&#39; &#124; &#39;otp&#39; &#124; &#39;abandoned&#39; &#124; &#39;reversed&#39; &#124; &#39;blocked&#39; &#124; &#39;rejected&#39; &#124; &#39;received&#39;>** | Export transfer by status | (optional) defaults to 'pending'|
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|


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

# **fetchTransfer**
> TransferFetchResponse fetchTransfer()

Get details of a transfer on your integration

### Example

```typescript
import {
    TransferApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferApi(configuration);

let code: string; //Transfer code (default to undefined)

const { status, data } = await apiInstance.fetchTransfer(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Transfer code | defaults to undefined|


### Return type

**TransferFetchResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Succesful operation |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **finalizeTransfer**
> Response finalizeTransfer()

Finalize an initiated transfer

### Example

```typescript
import {
    TransferApi,
    Configuration,
    TransferFinalize
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferApi(configuration);

let transferFinalize: TransferFinalize; // (optional)

const { status, data } = await apiInstance.finalizeTransfer(
    transferFinalize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferFinalize** | **TransferFinalize**|  | |


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

# **initiateBulkTransfer**
> TransferBulkResponse initiateBulkTransfer()

Batch multiple transfers in a single request.  You need to disable the Transfers OTP requirement to use this endpoint. 

### Example

```typescript
import {
    TransferApi,
    Configuration,
    TransferBulk
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferApi(configuration);

let transferBulk: TransferBulk; // (optional)

const { status, data } = await apiInstance.initiateBulkTransfer(
    transferBulk
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferBulk** | **TransferBulk**|  | |


### Return type

**TransferBulkResponse**

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

# **initiateTransfer**
> TransferCreateResponse initiateTransfer()

Send money to your customers

### Example

```typescript
import {
    TransferApi,
    Configuration,
    TransferInitiate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferApi(configuration);

let transferInitiate: TransferInitiate; // (optional)

const { status, data } = await apiInstance.initiateTransfer(
    transferInitiate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferInitiate** | **TransferInitiate**|  | |


### Return type

**TransferCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Successful operation |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTransfers**
> TransferListResponse listTransfers()

List the transfers made on your integration

### Example

```typescript
import {
    TransferApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferApi(configuration);

let useCursor: boolean; //A flag to indicate if cursor based pagination should be used (optional) (default to undefined)
let next: string; //An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional) (default to undefined)
let previous: string; //An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional) (default to undefined)
let perPage: number; //The number of records to fetch per request (optional) (default to undefined)
let page: number; //The offset to retrieve data from (optional) (default to undefined)
let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)
let recipient: string; //Filter transfer by the recipient code (optional) (default to undefined)
let status: 'pending' | 'success' | 'failed' | 'otp' | 'abandoned' | 'reversed' | 'blocked' | 'rejected' | 'received'; //Filter transfer by status (optional) (default to 'pending')

const { status, data } = await apiInstance.listTransfers(
    useCursor,
    next,
    previous,
    perPage,
    page,
    from,
    to,
    recipient,
    status
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **useCursor** | [**boolean**] | A flag to indicate if cursor based pagination should be used | (optional) defaults to undefined|
| **next** | [**string**] | An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  | (optional) defaults to undefined|
| **previous** | [**string**] | An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  | (optional) defaults to undefined|
| **perPage** | [**number**] | The number of records to fetch per request | (optional) defaults to undefined|
| **page** | [**number**] | The offset to retrieve data from | (optional) defaults to undefined|
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|
| **recipient** | [**string**] | Filter transfer by the recipient code | (optional) defaults to undefined|
| **status** | [**&#39;pending&#39; | &#39;success&#39; | &#39;failed&#39; | &#39;otp&#39; | &#39;abandoned&#39; | &#39;reversed&#39; | &#39;blocked&#39; | &#39;rejected&#39; | &#39;received&#39;**]**Array<&#39;pending&#39; &#124; &#39;success&#39; &#124; &#39;failed&#39; &#124; &#39;otp&#39; &#124; &#39;abandoned&#39; &#124; &#39;reversed&#39; &#124; &#39;blocked&#39; &#124; &#39;rejected&#39; &#124; &#39;received&#39;>** | Filter transfer by status | (optional) defaults to 'pending'|


### Return type

**TransferListResponse**

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

# **resendOtpTransfer**
> TransferResendsOtpResponse resendOtpTransfer()

Generates and send a new OTP to customer in the event they are having trouble receiving one.

### Example

```typescript
import {
    TransferApi,
    Configuration,
    TransferResendOTP
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferApi(configuration);

let transferResendOTP: TransferResendOTP; // (optional)

const { status, data } = await apiInstance.resendOtpTransfer(
    transferResendOTP
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transferResendOTP** | **TransferResendOTP**|  | |


### Return type

**TransferResendsOtpResponse**

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

# **verifyTransfer**
> TransferVerifyResponse verifyTransfer()

Verify the status of a transfer on your integration

### Example

```typescript
import {
    TransferApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransferApi(configuration);

let reference: string; //Transfer reference (default to undefined)

const { status, data } = await apiInstance.verifyTransfer(
    reference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reference** | [**string**] | Transfer reference | defaults to undefined|


### Return type

**TransferVerifyResponse**

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

