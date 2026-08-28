# RefundCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | **string** | The reference of a previosuly completed transaction | [default to undefined]
**amount** | **number** | Amount to be refunded to the customer. It cannot be more than the original transaction amount | [optional] [default to undefined]
**currency** | **string** | Three-letter ISO currency | [optional] [default to undefined]
**customerNote** | **string** | Customer reason | [optional] [default to undefined]
**merchantNote** | **string** | Merchant reason | [optional] [default to undefined]

## Example

```typescript
import { RefundCreate } from '@alex-paystack/sdk';

const instance: RefundCreate = {
    transaction,
    amount,
    currency,
    customerNote,
    merchantNote,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
