# TransactionPartialDebit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Customer\&#39;s email address | [default to undefined]
**amount** | **number** | Specified in the lowest denomination of your currency | [default to undefined]
**authorizationCode** | **string** | Valid authorization code to charge | [default to undefined]
**currency** | [**Currency**](Currency.md) |  | [default to undefined]
**atLeast** | **string** | Minimum amount to charge | [optional] [default to undefined]
**reference** | **string** | Unique transaction reference. Only -, ., &#x3D; and alphanumeric characters allowed. | [optional] [default to undefined]

## Example

```typescript
import { TransactionPartialDebit } from '@alex-paystack/sdk';

const instance: TransactionPartialDebit = {
    email,
    amount,
    authorizationCode,
    currency,
    atLeast,
    reference,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
