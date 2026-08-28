# TransferInitiate

Transfer initiation model

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS. | [default to undefined]
**recipient** | **string** | The transfer recipient\&#39;s code | [default to undefined]
**reference** | **string** | To ensure idempotency, you need to provide e a unique identifier for the request.  The identifier should be a lowercase alphanumeric string with only -,_  symbols allowed.  | [default to undefined]
**reason** | **string** | The reason or narration for the transfer. | [optional] [default to undefined]
**source** | **string** | The source of funds to send from | [default to 'balance']
**currency** | **string** | Specify the currency of the transfer. | [optional] [default to CurrencyEnum_Ngn]

## Example

```typescript
import { TransferInitiate } from '@alex-paystack/sdk';

const instance: TransferInitiate = {
    amount,
    recipient,
    reference,
    reason,
    source,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
