# TransactionTotalsResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**totalTransactions** | **number** |  | [default to undefined]
**totalVolume** | **number** |  | [default to undefined]
**totalVolumeByCurrency** | [**Array&lt;TransactionTotalVolumeByCurrencyArray&gt;**](TransactionTotalVolumeByCurrencyArray.md) |  | [default to undefined]
**pendingTransfers** | **number** |  | [default to undefined]
**pendingTransfersByCurrency** | [**Array&lt;TransactionPendingTransfersByCurrencyArray&gt;**](TransactionPendingTransfersByCurrencyArray.md) |  | [default to undefined]

## Example

```typescript
import { TransactionTotalsResponseData } from '@alex-paystack/sdk';

const instance: TransactionTotalsResponseData = {
    totalTransactions,
    totalVolume,
    totalVolumeByCurrency,
    pendingTransfers,
    pendingTransfersByCurrency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
