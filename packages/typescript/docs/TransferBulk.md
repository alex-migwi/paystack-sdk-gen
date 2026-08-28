# TransferBulk


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **string** | The source of funds for the transfer. | [default to 'balance']
**currency** | **string** | Specify the currency of the transfer. | [optional] [default to CurrencyEnum_Ngn]
**transfers** | [**Array&lt;TransferBase&gt;**](TransferBase.md) | A list of transfer object | [default to undefined]

## Example

```typescript
import { TransferBulk } from '@alex-paystack/sdk';

const instance: TransferBulk = {
    source,
    currency,
    transfers,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
