# TransactionApi

All URIs are relative to *https://api.paystack.co*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**chargeAuthorization**](#chargeauthorization) | **POST** /transaction/charge_authorization | Charge Authorization|
|[**exportTransactions**](#exporttransactions) | **GET** /transaction/export | Export Transactions|
|[**fetchTransaction**](#fetchtransaction) | **GET** /transaction/{id} | Fetch Transaction|
|[**getTransactionTotals**](#gettransactiontotals) | **GET** /transaction/totals | Transaction Totals|
|[**initializeTransaction**](#initializetransaction) | **POST** /transaction/initialize | Initialize Transaction|
|[**listTransactions**](#listtransactions) | **GET** /transaction | List Transactions|
|[**partialDebitTransaction**](#partialdebittransaction) | **POST** /transaction/partial_debit | Partial Debit|
|[**verifyTransaction**](#verifytransaction) | **GET** /transaction/verify/{reference} | Verify Transaction|
|[**viewTransactionTimeline**](#viewtransactiontimeline) | **GET** /transaction/timeline/{id} | Fetch Transaction Timeline|

# **chargeAuthorization**
> ChargeAuthorizationResponse chargeAuthorization()

Charge all authorizations marked as reusable with this endpoint whenever you need to receive payments

### Example

```typescript
import {
    TransactionApi,
    Configuration,
    TransactionChargeAuthorization
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let transactionChargeAuthorization: TransactionChargeAuthorization; // (optional)

const { status, data } = await apiInstance.chargeAuthorization(
    transactionChargeAuthorization
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionChargeAuthorization** | **TransactionChargeAuthorization**|  | |


### Return type

**ChargeAuthorizationResponse**

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

# **exportTransactions**
> TransactionExportResponse exportTransactions()

Download transactions that occurred on your integration for a specific timeframe

### Example

```typescript
import {
    TransactionApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)
let status: 'success' | 'failed' | 'abandoned' | 'reversed' | 'all'; //Filter by the status of the transaction (optional) (default to undefined)
let customer: number; //Filter by customer ID (optional) (default to undefined)
let subaccountCode: string; //Filter by subaccount code (optional) (default to undefined)
let settlement: number; //Filter by the settlement ID (optional) (default to undefined)

const { status, data } = await apiInstance.exportTransactions(
    from,
    to,
    status,
    customer,
    subaccountCode,
    settlement
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|
| **status** | [**&#39;success&#39; | &#39;failed&#39; | &#39;abandoned&#39; | &#39;reversed&#39; | &#39;all&#39;**]**Array<&#39;success&#39; &#124; &#39;failed&#39; &#124; &#39;abandoned&#39; &#124; &#39;reversed&#39; &#124; &#39;all&#39;>** | Filter by the status of the transaction | (optional) defaults to undefined|
| **customer** | [**number**] | Filter by customer ID | (optional) defaults to undefined|
| **subaccountCode** | [**string**] | Filter by subaccount code | (optional) defaults to undefined|
| **settlement** | [**number**] | Filter by the settlement ID | (optional) defaults to undefined|


### Return type

**TransactionExportResponse**

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

# **fetchTransaction**
> TransactionFetchResponse fetchTransaction()

Fetch a transaction to get its details

### Example

```typescript
import {
    TransactionApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let id: number; //The ID of the transaction to fetch (default to undefined)

const { status, data } = await apiInstance.fetchTransaction(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The ID of the transaction to fetch | defaults to undefined|


### Return type

**TransactionFetchResponse**

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

# **getTransactionTotals**
> TransactionTotalsResponse getTransactionTotals()

Get the total amount of all transactions

### Example

```typescript
import {
    TransactionApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)

const { status, data } = await apiInstance.getTransactionTotals(
    from,
    to
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **from** | [**string**] | The start date | (optional) defaults to undefined|
| **to** | [**string**] | The end date | (optional) defaults to undefined|


### Return type

**TransactionTotalsResponse**

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

# **initializeTransaction**
> TransactionInitializeResponse initializeTransaction()

Create a new transaction

### Example

```typescript
import {
    TransactionApi,
    Configuration,
    TransactionInitialize
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let transactionInitialize: TransactionInitialize; // (optional)

const { status, data } = await apiInstance.initializeTransaction(
    transactionInitialize
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionInitialize** | **TransactionInitialize**|  | |


### Return type

**TransactionInitializeResponse**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**200** |  |  -  |
|**400** | Responses from the Transaction Initialize endpoint |  -  |
|**401** | Unauthorized operation |  -  |
|**0** | Server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **listTransactions**
> TransactionListResponse listTransactions()

List transactions that has occurred on your integration

### Example

```typescript
import {
    TransactionApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let useCursor: boolean; //A flag to indicate if cursor based pagination should be used (optional) (default to undefined)
let next: string; //An alphanumeric value returned for every cursor based retrieval, used to retrieve the next set of data  (optional) (default to undefined)
let previous: string; //An alphanumeric value returned for every cursor based retrieval, used to retrieve the previous set of data  (optional) (default to undefined)
let perPage: number; //The number of records to fetch per request (optional) (default to undefined)
let page: number; //The offset to retrieve data from (optional) (default to undefined)
let from: string; //The start date (optional) (default to undefined)
let to: string; //The end date (optional) (default to undefined)
let status: 'success' | 'failed' | 'abandoned' | 'reversed'; //Filter transaction by status (optional) (default to undefined)
let source: 'merchantApi' | 'checkout' | 'pos' | 'virtualTerminal'; //The origin of the payment (optional) (default to undefined)
let terminalId: string; //Filter transactions by a terminal ID (optional) (default to undefined)
let virtualAccountNumber: string; //Filter transactions by a virtual account number (optional) (default to undefined)
let customerCode: string; //Filter transactions by a customer code (optional) (default to undefined)
let amount: number; //Filter transactions by a specific amount (optional) (default to undefined)
let settlement: number; //The settlement ID to filter for settled transactions (optional) (default to undefined)
let channel: 'card' | 'pos' | 'bank' | 'dedicated_nuban' | 'ussd' | 'bank_transfer'; //The payment method the customer used to complete the transaction (optional) (default to undefined)
let subaccountCode: string; //Filter transaction by subaccount code (optional) (default to undefined)
let splitCode: string; //Filter transaction by split code (optional) (default to undefined)

const { status, data } = await apiInstance.listTransactions(
    useCursor,
    next,
    previous,
    perPage,
    page,
    from,
    to,
    status,
    source,
    terminalId,
    virtualAccountNumber,
    customerCode,
    amount,
    settlement,
    channel,
    subaccountCode,
    splitCode
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
| **status** | [**&#39;success&#39; | &#39;failed&#39; | &#39;abandoned&#39; | &#39;reversed&#39;**]**Array<&#39;success&#39; &#124; &#39;failed&#39; &#124; &#39;abandoned&#39; &#124; &#39;reversed&#39;>** | Filter transaction by status | (optional) defaults to undefined|
| **source** | [**&#39;merchantApi&#39; | &#39;checkout&#39; | &#39;pos&#39; | &#39;virtualTerminal&#39;**]**Array<&#39;merchantApi&#39; &#124; &#39;checkout&#39; &#124; &#39;pos&#39; &#124; &#39;virtualTerminal&#39;>** | The origin of the payment | (optional) defaults to undefined|
| **terminalId** | [**string**] | Filter transactions by a terminal ID | (optional) defaults to undefined|
| **virtualAccountNumber** | [**string**] | Filter transactions by a virtual account number | (optional) defaults to undefined|
| **customerCode** | [**string**] | Filter transactions by a customer code | (optional) defaults to undefined|
| **amount** | [**number**] | Filter transactions by a specific amount | (optional) defaults to undefined|
| **settlement** | [**number**] | The settlement ID to filter for settled transactions | (optional) defaults to undefined|
| **channel** | [**&#39;card&#39; | &#39;pos&#39; | &#39;bank&#39; | &#39;dedicated_nuban&#39; | &#39;ussd&#39; | &#39;bank_transfer&#39;**]**Array<&#39;card&#39; &#124; &#39;pos&#39; &#124; &#39;bank&#39; &#124; &#39;dedicated_nuban&#39; &#124; &#39;ussd&#39; &#124; &#39;bank_transfer&#39;>** | The payment method the customer used to complete the transaction | (optional) defaults to undefined|
| **subaccountCode** | [**string**] | Filter transaction by subaccount code | (optional) defaults to undefined|
| **splitCode** | [**string**] | Filter transaction by split code | (optional) defaults to undefined|


### Return type

**TransactionListResponse**

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

# **partialDebitTransaction**
> TransactionPartialDebitResponse partialDebitTransaction()

Retrieve part of a payment from a customer

### Example

```typescript
import {
    TransactionApi,
    Configuration,
    TransactionPartialDebit
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let transactionPartialDebit: TransactionPartialDebit; // (optional)

const { status, data } = await apiInstance.partialDebitTransaction(
    transactionPartialDebit
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **transactionPartialDebit** | **TransactionPartialDebit**|  | |


### Return type

**TransactionPartialDebitResponse**

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

# **verifyTransaction**
> VerifyResponse verifyTransaction()

Verify a previously initiated transaction using it\'s reference

### Example

```typescript
import {
    TransactionApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let reference: string; //The transaction reference to verify (default to undefined)

const { status, data } = await apiInstance.verifyTransaction(
    reference
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **reference** | [**string**] | The transaction reference to verify | defaults to undefined|


### Return type

**VerifyResponse**

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

# **viewTransactionTimeline**
> TransactionTimelineResponse viewTransactionTimeline()

Fetch the steps taken from the initiation to the completion of a transaction

### Example

```typescript
import {
    TransactionApi,
    Configuration
} from '@alex-paystack/sdk';

const configuration = new Configuration();
const apiInstance = new TransactionApi(configuration);

let id: number; //The ID of the transaction to fetch (default to undefined)

const { status, data } = await apiInstance.viewTransactionTimeline(
    id
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **id** | [**number**] | The ID of the transaction to fetch | defaults to undefined|


### Return type

**TransactionTimelineResponse**

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

