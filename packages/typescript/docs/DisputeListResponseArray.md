# DisputeListResponseArray


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**refundAmount** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**resolution** | **string** |  | [default to undefined]
**domain** | **string** |  | [default to undefined]
**transaction** | [**DisputeListResponseArrayTransaction**](DisputeListResponseArrayTransaction.md) |  | [default to undefined]
**transactionReference** | **string** |  | [default to undefined]
**category** | **string** |  | [default to undefined]
**customer** | [**SubscriptionListResponseArrayCustomer**](SubscriptionListResponseArrayCustomer.md) |  | [default to undefined]
**bin** | **string** |  | [default to undefined]
**last4** | **string** |  | [default to undefined]
**dueAt** | **string** |  | [default to undefined]
**resolvedAt** | **string** |  | [default to undefined]
**evidence** | **string** |  | [default to undefined]
**attachments** | **string** |  | [default to undefined]
**note** | **string** |  | [default to undefined]
**history** | [**Array&lt;DisputeHistoryArray&gt;**](DisputeHistoryArray.md) |  | [default to undefined]
**messages** | [**Array&lt;DisputeMessagesArray&gt;**](DisputeMessagesArray.md) |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { DisputeListResponseArray } from '@alex-paystack/sdk';

const instance: DisputeListResponseArray = {
    id,
    refundAmount,
    currency,
    status,
    resolution,
    domain,
    transaction,
    transactionReference,
    category,
    customer,
    bin,
    last4,
    dueAt,
    resolvedAt,
    evidence,
    attachments,
    note,
    history,
    messages,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
