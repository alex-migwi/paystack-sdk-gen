# TransferResendOTP


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transferCode** | **string** | The transfer code that requires an OTP validation | [default to undefined]
**reason** | **string** | Specify the flag to indicate the purpose of the OTP | [default to ReasonEnum_Transfer]

## Example

```typescript
import { TransferResendOTP } from '@alex-paystack/sdk';

const instance: TransferResendOTP = {
    transferCode,
    reason,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
