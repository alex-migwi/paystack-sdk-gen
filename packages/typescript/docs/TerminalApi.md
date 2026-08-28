# TerminalApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**commissionTerminal**](#commissionterminal) | **POST** /terminal/commission_device | Commission Terminal|
|[**decommissionTerminal**](#decommissionterminal) | **POST** /terminal/decommission_device | Decommission Terminal|
|[**fetchEventStatusTerminal**](#fetcheventstatusterminal) | **GET** /terminal/{terminal_id}/event/{event_id} | Fetch Event Status|
|[**fetchTerminal**](#fetchterminal) | **GET** /terminal/{terminal_id} | Fetch Terminal|
|[**fetchTerminalStatusTerminal**](#fetchterminalstatusterminal) | **GET** /terminal/{terminal_id}/presence | Fetch Terminal Status|
|[**listTerminal**](#listterminal) | **GET** /terminal | List Terminals|
|[**sendEventTerminal**](#sendeventterminal) | **POST** /terminal/{id}/event | Send Event|
|[**updateTerminal**](#updateterminal) | **PUT** /terminal/{terminal_id} | Update Terminal|

# **commissionTerminal**
> TerminalCommissionDeviceResponse commissionTerminal()

Activate your debug device by linking it to your integration

### Example

```typescript
import {
    TerminalApi,
    Configuration,
    TerminalActivationToggle
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TerminalApi(configuration);

let terminalActivationToggle: TerminalActivationToggle; // (optional)

const { status, data } = await apiInstance.commissionTerminal(
    terminalActivationToggle
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **terminalActivationToggle** | **TerminalActivationToggle**|  | |


### Return type

**TerminalCommissionDeviceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Terminal Commission Device response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **decommissionTerminal**
> TerminalDecommissionDeviceResponse decommissionTerminal()

Unlink your debug device from your integration

### Example

```typescript
import {
    TerminalApi,
    Configuration,
    TerminalActivationToggle
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TerminalApi(configuration);

let terminalActivationToggle: TerminalActivationToggle; // (optional)

const { status, data } = await apiInstance.decommissionTerminal(
    terminalActivationToggle
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **terminalActivationToggle** | **TerminalActivationToggle**|  | |


### Return type

**TerminalDecommissionDeviceResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Terminal Decommission Device response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchEventStatusTerminal**
> Response fetchEventStatusTerminal()

Check the status of an event sent to the Terminal

### Example

```typescript
import {
    TerminalApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TerminalApi(configuration);

let terminalId: string; //The ID of the Terminal the event should be sent to. (default to undefined)
let eventId: string; //The ID of the event that was sent to the Terminal (default to undefined)

const { status, data } = await apiInstance.fetchEventStatusTerminal(
    terminalId,
    eventId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **terminalId** | [**string**] | The ID of the Terminal the event should be sent to. | defaults to undefined|
| **eventId** | [**string**] | The ID of the event that was sent to the Terminal | defaults to undefined|


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

# **fetchTerminal**
> TerminalGetResponse fetchTerminal()

Get the details of a Terminal

### Example

```typescript
import {
    TerminalApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TerminalApi(configuration);

let terminalId: string; //The ID of the Terminal the event should be sent to. (default to undefined)

const { status, data } = await apiInstance.fetchTerminal(
    terminalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **terminalId** | [**string**] | The ID of the Terminal the event should be sent to. | defaults to undefined|


### Return type

**TerminalGetResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Terminal Get response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchTerminalStatusTerminal**
> TerminalGetStatusResponse fetchTerminalStatusTerminal()

Check the availiability of a Terminal before sending an event to it

### Example

```typescript
import {
    TerminalApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TerminalApi(configuration);

let terminalId: string; //The ID of the Terminal the event should be sent to. (default to undefined)

const { status, data } = await apiInstance.fetchTerminalStatusTerminal(
    terminalId
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **terminalId** | [**string**] | The ID of the Terminal the event should be sent to. | defaults to undefined|


### Return type

**TerminalGetStatusResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Terminal Get Status response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTerminal**
> TerminalListsResponse listTerminal()

List the Terminals available on your integration

### Example

```typescript
import {
    TerminalApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TerminalApi(configuration);

let next: string; //A cursor that indicates your place in the list. It can be used to fetch the next page of the list (optional) (default to undefined)
let previous: string; //A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an intial next request (optional) (default to undefined)
let perPage: number; //Specify how many records you want to retrieve per page (optional) (default to 50)

const { status, data } = await apiInstance.listTerminal(
    next,
    previous,
    perPage
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **next** | [**string**] | A cursor that indicates your place in the list. It can be used to fetch the next page of the list | (optional) defaults to undefined|
| **previous** | [**string**] | A cursor that indicates your place in the list. It should be used to fetch the previous page of the list after an intial next request | (optional) defaults to undefined|
| **perPage** | [**number**] | Specify how many records you want to retrieve per page | (optional) defaults to 50|


### Return type

**TerminalListsResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Terminal Lists response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sendEventTerminal**
> Response sendEventTerminal()

Send an event from your application to the Paystack Terminal

### Example

```typescript
import {
    TerminalApi,
    Configuration,
    TerminalSendEvent
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TerminalApi(configuration);

let id: string; //The ID of the Terminal the event should be sent to. (default to undefined)
let terminalSendEvent: TerminalSendEvent; // (optional)

const { status, data } = await apiInstance.sendEventTerminal(
    id,
    terminalSendEvent
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **terminalSendEvent** | **TerminalSendEvent**|  | |
| **id** | [**string**] | The ID of the Terminal the event should be sent to. | defaults to undefined|


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

# **updateTerminal**
> TerminalUpdateResponse updateTerminal()

Update the details of a Terminal

### Example

```typescript
import {
    TerminalApi,
    Configuration,
    TerminalUpate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TerminalApi(configuration);

let terminalId: string; //The ID of the Terminal the event should be sent to. (default to undefined)
let terminalUpate: TerminalUpate; // (optional)

const { status, data } = await apiInstance.updateTerminal(
    terminalId,
    terminalUpate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **terminalUpate** | **TerminalUpate**|  | |
| **terminalId** | [**string**] | The ID of the Terminal the event should be sent to. | defaults to undefined|


### Return type

**TerminalUpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Terminal Update response |  -  |
|**401** | Unauthorized operation |  -  |
|**404** | Entity not found |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

