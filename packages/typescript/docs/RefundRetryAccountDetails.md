# RefundRetryAccountDetails

An object that contains the customer’s account details for refund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **string** | The currency of the customer\&#39;s bank account. It should be the same as the currency the payment was made | [default to undefined]
**accountNumber** | **string** | The customer\&#39;s account number | [default to undefined]
**bankId** | **string** | The ID representing the customer\&#39;s bank. You can get the list of bank IDs by calling the List Banks endpoint. | [default to undefined]

## Example

```typescript
import { RefundRetryAccountDetails } from '@alex-paystack/sdk';

const instance: RefundRetryAccountDetails = {
    currency,
    accountNumber,
    bankId,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
