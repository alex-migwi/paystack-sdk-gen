# BulkChargeFetchBulkBatchChargesResponseArray


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**integration** | **number** |  | [default to undefined]
**bulkcharge** | **number** |  | [default to undefined]
**customer** | [**BulkChargeFetchBulkBatchChargesResponseArrayCustomer**](BulkChargeFetchBulkBatchChargesResponseArrayCustomer.md) |  | [default to undefined]
**authorization** | [**TransactionPartialDebitResponseDataAuthorization**](TransactionPartialDebitResponseDataAuthorization.md) |  | [default to undefined]
**domain** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**atLeast** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**reference** | **string** |  | [default to undefined]
**metadata** | [**TransactionFetchResponseDataMetadata**](TransactionFetchResponseDataMetadata.md) |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**attemptPartialDebit** | **boolean** |  | [default to undefined]
**id** | **number** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { BulkChargeFetchBulkBatchChargesResponseArray } from '@alex-paystack/sdk';

const instance: BulkChargeFetchBulkBatchChargesResponseArray = {
    integration,
    bulkcharge,
    customer,
    authorization,
    domain,
    amount,
    atLeast,
    currency,
    reference,
    metadata,
    status,
    message,
    attemptPartialDebit,
    id,
    createdAt,
    updatedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
