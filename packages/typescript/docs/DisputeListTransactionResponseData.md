# DisputeListTransactionResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**history** | [**Array&lt;DisputeHistoryArray&gt;**](DisputeHistoryArray.md) |  | [default to undefined]
**messages** | [**Array&lt;DisputeMessagesArray&gt;**](DisputeMessagesArray.md) |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**last4** | **string** |  | [default to undefined]
**bin** | **string** |  | [default to undefined]
**transactionReference** | **string** |  | [default to undefined]
**merchantTransactionReference** | **string** |  | [default to undefined]
**refundAmount** | **number** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**domain** | **string** |  | [default to undefined]
**resolution** | **string** |  | [default to undefined]
**category** | **string** |  | [default to undefined]
**note** | **string** |  | [default to undefined]
**attachments** | **string** |  | [default to undefined]
**id** | **number** |  | [default to undefined]
**integration** | **number** |  | [default to undefined]
**transaction** | [**DisputeListTransactionResponseDataTransaction**](DisputeListTransactionResponseDataTransaction.md) |  | [default to undefined]
**createdBy** | **number** |  | [default to undefined]
**evidence** | **string** |  | [default to undefined]
**resolvedAt** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**dueAt** | **string** |  | [default to undefined]

## Example

```typescript
import { DisputeListTransactionResponseData } from '@alex-paystack/sdk';

const instance: DisputeListTransactionResponseData = {
    history,
    messages,
    currency,
    last4,
    bin,
    transactionReference,
    merchantTransactionReference,
    refundAmount,
    status,
    domain,
    resolution,
    category,
    note,
    attachments,
    id,
    integration,
    transaction,
    createdBy,
    evidence,
    resolvedAt,
    createdAt,
    updatedAt,
    dueAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
