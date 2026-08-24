# VirtualTerminalApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**addSplitCodeVirtualTerminal**](#addsplitcodevirtualterminal) | **PUT** /virtual_terminal/{code}/split_code | Add Split Code to Virtual Terminal|
|[**createVirtualTerminal**](#createvirtualterminal) | **POST** /virtual_terminal | Create Virtual Terminal|
|[**deactivateVirtualTerminal**](#deactivatevirtualterminal) | **PUT** /virtual_terminal/{code}/deactivate | Deactivate Virtual Terminal|
|[**deleteSplitCodeVirtualTerminal**](#deletesplitcodevirtualterminal) | **DELETE** /virtual_terminal/{code}/split_code | Remove Split Code from Virtual Terminal|
|[**destinationAssignVirtualTerminal**](#destinationassignvirtualterminal) | **POST** /virtual_terminal/{code}/destination/assign | Assign Destination to Virtual Terminal|
|[**destinationUnassignVirtualTerminal**](#destinationunassignvirtualterminal) | **POST** /virtual_terminal/{code}/destination/unassign | Unassign Destination from Virtual Terminal|
|[**fetchVirtualTerminal**](#fetchvirtualterminal) | **GET** /virtual_terminal/{code} | Fetch Virtual Terminal|
|[**listVirtualTerminal**](#listvirtualterminal) | **GET** /virtual_terminal | List Virtual Terminals|
|[**updateVirtualTerminal**](#updatevirtualterminal) | **PUT** /virtual_terminal/{code} | Update Virtual Terminal|

# **addSplitCodeVirtualTerminal**
> VirtualTerminalAddSplitCodeResponse addSplitCodeVirtualTerminal()

Add Split Code to Virtual Terminal

### Example

```typescript
import {
    VirtualTerminalApi,
    Configuration,
    VirtualTerminalAddSplitCode
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new VirtualTerminalApi(configuration);

let code: string; //Code of the Virtual Terminal (default to undefined)
let virtualTerminalAddSplitCode: VirtualTerminalAddSplitCode; // (optional)

const { status, data } = await apiInstance.addSplitCodeVirtualTerminal(
    code,
    virtualTerminalAddSplitCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **virtualTerminalAddSplitCode** | **VirtualTerminalAddSplitCode**|  | |
| **code** | [**string**] | Code of the Virtual Terminal | defaults to undefined|


### Return type

**VirtualTerminalAddSplitCodeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Virtual Terminal Split Assign response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **createVirtualTerminal**
> VirtualTerminalCreateResponse createVirtualTerminal()

Create a Virtual Terminal on your integration

### Example

```typescript
import {
    VirtualTerminalApi,
    Configuration,
    VirtualTerminalCreate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new VirtualTerminalApi(configuration);

let virtualTerminalCreate: VirtualTerminalCreate; // (optional)

const { status, data } = await apiInstance.createVirtualTerminal(
    virtualTerminalCreate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **virtualTerminalCreate** | **VirtualTerminalCreate**|  | |


### Return type

**VirtualTerminalCreateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Virtual Terminal Create response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivateVirtualTerminal**
> VirtualTerminalDeactivateResponse deactivateVirtualTerminal()

Deactivate a Virtual Terminal on your integration

### Example

```typescript
import {
    VirtualTerminalApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new VirtualTerminalApi(configuration);

let code: string; //Code of the Virtual Terminal (default to undefined)

const { status, data } = await apiInstance.deactivateVirtualTerminal(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Code of the Virtual Terminal | defaults to undefined|


### Return type

**VirtualTerminalDeactivateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Virtual Terminal Deactivate response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deleteSplitCodeVirtualTerminal**
> VirtualTerminalDeleteSplitCodeResponse deleteSplitCodeVirtualTerminal()

Remove Split Code from Virtual Terminal

### Example

```typescript
import {
    VirtualTerminalApi,
    Configuration,
    VirtualTerminalDeleteSplitCode
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new VirtualTerminalApi(configuration);

let code: string; //Code of the Virtual Terminal (default to undefined)
let virtualTerminalDeleteSplitCode: VirtualTerminalDeleteSplitCode; // (optional)

const { status, data } = await apiInstance.deleteSplitCodeVirtualTerminal(
    code,
    virtualTerminalDeleteSplitCode
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **virtualTerminalDeleteSplitCode** | **VirtualTerminalDeleteSplitCode**|  | |
| **code** | [**string**] | Code of the Virtual Terminal | defaults to undefined|


### Return type

**VirtualTerminalDeleteSplitCodeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Virtual Terminal Split Remove response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **destinationAssignVirtualTerminal**
> VirtualTerminalDestinationAssignResponse destinationAssignVirtualTerminal()

Add a destination (WhatsApp number) to a Virtual Terminal on your integration

### Example

```typescript
import {
    VirtualTerminalApi,
    Configuration,
    VirtualTerminalDestinationAssign
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new VirtualTerminalApi(configuration);

let code: string; //Code of the Virtual Terminal (default to undefined)
let virtualTerminalDestinationAssign: VirtualTerminalDestinationAssign; // (optional)

const { status, data } = await apiInstance.destinationAssignVirtualTerminal(
    code,
    virtualTerminalDestinationAssign
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **virtualTerminalDestinationAssign** | **VirtualTerminalDestinationAssign**|  | |
| **code** | [**string**] | Code of the Virtual Terminal | defaults to undefined|


### Return type

**VirtualTerminalDestinationAssignResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Virtual Terminal Deactivate response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **destinationUnassignVirtualTerminal**
> VirtualTerminalDestinationUnassignResponse destinationUnassignVirtualTerminal()

Unassign a destination (WhatsApp Number) from a Virtual Terminal on your integration

### Example

```typescript
import {
    VirtualTerminalApi,
    Configuration,
    VirtualTerminalDestinationUnassign
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new VirtualTerminalApi(configuration);

let code: string; //Code of the Virtual Terminal (default to undefined)
let virtualTerminalDestinationUnassign: VirtualTerminalDestinationUnassign; // (optional)

const { status, data } = await apiInstance.destinationUnassignVirtualTerminal(
    code,
    virtualTerminalDestinationUnassign
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **virtualTerminalDestinationUnassign** | **VirtualTerminalDestinationUnassign**|  | |
| **code** | [**string**] | Code of the Virtual Terminal | defaults to undefined|


### Return type

**VirtualTerminalDestinationUnassignResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Virtual Terminal unassign response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetchVirtualTerminal**
> VirtualTerminalFetchResponse fetchVirtualTerminal()

Fetch a Virtual Terminal on your integration

### Example

```typescript
import {
    VirtualTerminalApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new VirtualTerminalApi(configuration);

let code: string; //Code of the Virtual Terminal (default to undefined)

const { status, data } = await apiInstance.fetchVirtualTerminal(
    code
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **code** | [**string**] | Code of the Virtual Terminal | defaults to undefined|


### Return type

**VirtualTerminalFetchResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Virtual Terminal Fetch response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listVirtualTerminal**
> VirtualTerminalListResponse listVirtualTerminal()

List Virtual Terminals on your integration

### Example

```typescript
import {
    VirtualTerminalApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new VirtualTerminalApi(configuration);

let perPage: number; //The number of records to fetch per request (optional) (default to undefined)
let page: number; //The offset to retrieve data from (optional) (default to undefined)

const { status, data } = await apiInstance.listVirtualTerminal(
    perPage,
    page
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **perPage** | [**number**] | The number of records to fetch per request | (optional) defaults to undefined|
| **page** | [**number**] | The offset to retrieve data from | (optional) defaults to undefined|


### Return type

**VirtualTerminalListResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Virtual Terminal Lists response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **updateVirtualTerminal**
> VirtualTerminalUpdateResponse updateVirtualTerminal()

Update a Virtual Terminal on your integration

### Example

```typescript
import {
    VirtualTerminalApi,
    Configuration,
    VirtualTerminalUpdate
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new VirtualTerminalApi(configuration);

let code: string; //Code of the Virtual Terminal (default to undefined)
let virtualTerminalUpdate: VirtualTerminalUpdate; // (optional)

const { status, data } = await apiInstance.updateVirtualTerminal(
    code,
    virtualTerminalUpdate
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **virtualTerminalUpdate** | **VirtualTerminalUpdate**|  | |
| **code** | [**string**] | Code of the Virtual Terminal | defaults to undefined|


### Return type

**VirtualTerminalUpdateResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** | Virtual Terminal Update response |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

