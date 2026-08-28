# ChargeApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**createCharge**](#createcharge) | **POST** /charge | Create Charge|
|[**submitChargeAddress**](#submitchargeaddress) | **POST** /charge/submit_address | Submit Address|
|[**submitChargeBirthday**](#submitchargebirthday) | **POST** /charge/submit_birthday | Submit Birthday|
|[**submitChargeOtp**](#submitchargeotp) | **POST** /charge/submit_otp | Submit OTP|
|[**submitChargePhone**](#submitchargephone) | **POST** /charge/submit_phone | Submit Phone|
|[**submitChargePin**](#submitchargepin) | **POST** /charge/submit_pin | Submit PIN|
|[**verifyCharge**](#verifycharge) | **GET** /charge/{reference} | Check pending charge|

# **createCharge**
> ChargeCreateResponse createCharge()

Initiate a payment by integrating the payment channel of your choice.

### Example

```typescript
import {
    ChargeApi,
    Configuration,
    CreateChargeRequest
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new ChargeApi(configuration);

let createChargeRequest: CreateChargeRequest; // (optional)

const { status, data } = await apiInstance.createCharge(
    createChargeRequest
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **createChargeRequest** | **CreateChargeRequest**|  | |


### Return type

**ChargeCreateResponse**

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

# **submitChargeAddress**
> Response submitChargeAddress()

Send the details of the customer\'s address for address verification

### Example

```typescript
import {
    ChargeApi,
    Configuration,
    ChargeSubmitAddress
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new ChargeApi(configuration);

let chargeSubmitAddress: ChargeSubmitAddress; // (optional)

const { status, data } = await apiInstance.submitChargeAddress(
    chargeSubmitAddress
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeSubmitAddress** | **ChargeSubmitAddress**|  | |


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

# **submitChargeBirthday**
> ChargeSubmitBirthdayResponse submitChargeBirthday()

Submit the customer\'s birthday when requested

### Example

```typescript
import {
    ChargeApi,
    Configuration,
    ChargeSubmitBirthday
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new ChargeApi(configuration);

let chargeSubmitBirthday: ChargeSubmitBirthday; // (optional)

const { status, data } = await apiInstance.submitChargeBirthday(
    chargeSubmitBirthday
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeSubmitBirthday** | **ChargeSubmitBirthday**|  | |


### Return type

**ChargeSubmitBirthdayResponse**

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

# **submitChargeOtp**
> ChargeSubmitOtpResponse submitChargeOtp()

Submit OTP to complete a charge

### Example

```typescript
import {
    ChargeApi,
    Configuration,
    ChargeSubmitOTP
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new ChargeApi(configuration);

let chargeSubmitOTP: ChargeSubmitOTP; // (optional)

const { status, data } = await apiInstance.submitChargeOtp(
    chargeSubmitOTP
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeSubmitOTP** | **ChargeSubmitOTP**|  | |


### Return type

**ChargeSubmitOtpResponse**

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

# **submitChargePhone**
> ChargeSubmitPhoneResponse submitChargePhone()

Submit phone number when requested

### Example

```typescript
import {
    ChargeApi,
    Configuration,
    ChargeSubmitPhone
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new ChargeApi(configuration);

let chargeSubmitPhone: ChargeSubmitPhone; // (optional)

const { status, data } = await apiInstance.submitChargePhone(
    chargeSubmitPhone
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeSubmitPhone** | **ChargeSubmitPhone**|  | |


### Return type

**ChargeSubmitPhoneResponse**

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

# **submitChargePin**
> ChargeSubmitPinResponse submitChargePin()

Submit PIN to continue a charge

### Example

```typescript
import {
    ChargeApi,
    Configuration,
    ChargeSubmitPin
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new ChargeApi(configuration);

let chargeSubmitPin: ChargeSubmitPin; // (optional)

const { status, data } = await apiInstance.submitChargePin(
    chargeSubmitPin
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **chargeSubmitPin** | **ChargeSubmitPin**|  | |


### Return type

**ChargeSubmitPinResponse**

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

# **verifyCharge**
> ChargeCheckPendingResponse verifyCharge()

When you get `pending` as a charge status or if there was an exception when calling any of the `/charge` endpoints, wait 10 seconds or more, then make a check to see if its status has changed. Don\'t call too early as you may get a lot more pending than you should. 

### Example

```typescript
import {
    ChargeApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new ChargeApi(configuration);

let reference: string; //The reference of the ongoing transaction (default to undefined)

const { status, data } = await apiInstance.verifyCharge(
    reference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reference** | [**string**] | The reference of the ongoing transaction | defaults to undefined|


### Return type

**ChargeCheckPendingResponse**

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

