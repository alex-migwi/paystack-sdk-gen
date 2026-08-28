# IntegrationApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**fetchPaymentSessionTimeout**](#fetchpaymentsessiontimeout) | **GET** /integration/payment_session_timeout | Fetch Payment Session Timeout|
|[**updatePaymentSessionTimeout**](#updatepaymentsessiontimeout) | **PUT** /integration/payment_session_timeout | Update Payment Session Timeout|

# **fetchPaymentSessionTimeout**
> ControlPanelFetchPaymentSessionTimeoutResponse fetchPaymentSessionTimeout()

Fetch the session timeout of a transaction

### Example

```typescript
import {
    IntegrationApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationApi(configuration);

const { status, data } = await apiInstance.fetchPaymentSessionTimeout();
```

### Parameters
This endpoint does not have any parameters.


### Return type

**ControlPanelFetchPaymentSessionTimeoutResponse**

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

# **updatePaymentSessionTimeout**
> ControlPanelUpdatePaymentSessionTimeoutResponse updatePaymentSessionTimeout()

Update the session timeout of a transaction

### Example

```typescript
import {
    IntegrationApi,
    Configuration,
    PaymentSession
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new IntegrationApi(configuration);

let paymentSession: PaymentSession; // (optional)

const { status, data } = await apiInstance.updatePaymentSessionTimeout(
    paymentSession
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **paymentSession** | **PaymentSession**|  | |


### Return type

**ControlPanelUpdatePaymentSessionTimeoutResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

