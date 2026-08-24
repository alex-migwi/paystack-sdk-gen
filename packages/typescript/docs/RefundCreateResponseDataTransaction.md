# RefundCreateResponseDataTransaction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**domain** | **string** |  | [default to undefined]
**reference** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**paidAt** | **string** |  | [default to undefined]
**channel** | **string** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**authorization** | [**RefundCreateResponseDataTransactionAuthorization**](RefundCreateResponseDataTransactionAuthorization.md) |  | [default to undefined]
**customer** | [**RefundCreateResponseDataTransactionCustomer**](RefundCreateResponseDataTransactionCustomer.md) |  | [default to undefined]
**plan** | **object** |  | [default to undefined]
**subaccount** | [**RefundCreateResponseDataTransactionSubaccount**](RefundCreateResponseDataTransactionSubaccount.md) |  | [default to undefined]
**split** | **object** |  | [default to undefined]
**orderId** | **string** |  | [default to undefined]
**paidAt** | **string** |  | [default to undefined]
**posTransactionData** | **string** |  | [default to undefined]
**source** | **string** |  | [default to undefined]
**feesBreakdown** | **string** |  | [default to undefined]

## Example

```typescript
import { RefundCreateResponseDataTransaction } from '@alex-paystack/sdk';

const instance: RefundCreateResponseDataTransaction = {
    id,
    domain,
    reference,
    amount,
    paidAt,
    channel,
    currency,
    authorization,
    customer,
    plan,
    subaccount,
    split,
    orderId,
    paidAt,
    posTransactionData,
    source,
    feesBreakdown,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
