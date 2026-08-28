# TransferBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** | Amount to transfer in kobo if currency is NGN and pesewas if currency is GHS. | [default to undefined]
**recipient** | **string** | The transfer recipient\&#39;s code | [default to undefined]
**reference** | **string** | To ensure idempotency, you need to provide e a unique identifier for the request.  The identifier should be a lowercase alphanumeric string with only -,_  symbols allowed.  | [default to undefined]
**reason** | **string** | The reason or narration for the transfer. | [optional] [default to undefined]

## Example

```typescript
import { TransferBase } from '@alex-paystack/sdk';

const instance: TransferBase = {
    amount,
    recipient,
    reference,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
