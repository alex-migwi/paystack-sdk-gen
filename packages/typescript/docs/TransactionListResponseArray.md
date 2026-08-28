# TransactionListResponseArray


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**domain** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**reference** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**gatewayResponse** | **string** |  | [default to undefined]
**paidAt** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**channel** | **string** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**ipAddress** | **string** |  | [default to undefined]
**metadata** | **object** |  | [default to undefined]
**log** | [**ChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | [default to undefined]
**fees** | **number** |  | [default to undefined]
**feesSplit** | **number** |  | [default to undefined]
**customer** | [**TransactionListResponseArrayCustomer**](TransactionListResponseArrayCustomer.md) |  | [default to undefined]
**authorization** | [**TransactionListResponseArrayAuthorization**](TransactionListResponseArrayAuthorization.md) |  | [default to undefined]
**plan** | **object** |  | [default to undefined]
**split** | **object** |  | [default to undefined]
**subaccount** | **object** |  | [default to undefined]
**orderId** | **string** |  | [default to undefined]
**paidAt** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**requestedAmount** | **number** |  | [default to undefined]
**source** | [**TransactionListResponseArraySource**](TransactionListResponseArraySource.md) |  | [default to undefined]
**connect** | **object** |  | [default to undefined]
**posTransactionData** | **string** |  | [default to undefined]

## Example

```typescript
import { TransactionListResponseArray } from '@alex-paystack/sdk';

const instance: TransactionListResponseArray = {
    id,
    domain,
    status,
    reference,
    amount,
    message,
    gatewayResponse,
    paidAt,
    createdAt,
    channel,
    currency,
    ipAddress,
    metadata,
    log,
    fees,
    feesSplit,
    customer,
    authorization,
    plan,
    split,
    subaccount,
    orderId,
    paidAt,
    createdAt,
    requestedAmount,
    source,
    connect,
    posTransactionData,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
