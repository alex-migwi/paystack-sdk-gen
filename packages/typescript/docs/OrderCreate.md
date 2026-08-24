# OrderCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | The email of the customer placing the order | [default to undefined]
**firstName** | **string** | The customer\&#39;s first name | [default to undefined]
**lastName** | **string** | The customer\&#39;s last name | [default to undefined]
**phone** | **string** | The customer\&#39;s mobile number | [default to undefined]
**currency** | **string** | Currency in which amount is set | [default to undefined]
**items** | [**Array&lt;OrderItems&gt;**](OrderItems.md) |  | [default to undefined]
**shipping** | [**OrderShipping**](OrderShipping.md) |  | [default to undefined]
**isGift** | **boolean** | A flag to indicate if the order is for someone else | [optional] [default to undefined]
**payForMe** | **boolean** | A flag to indicate if the someone else should pay for the order | [optional] [default to undefined]

## Example

```typescript
import { OrderCreate } from '@alex-paystack/sdk';

const instance: OrderCreate = {
    email,
    firstName,
    lastName,
    phone,
    currency,
    items,
    shipping,
    isGift,
    payForMe,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
