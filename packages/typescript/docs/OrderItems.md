# OrderItems

The collection of items that make up the order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item** | **number** | The product ID of the item | [default to undefined]
**type** | **string** | The type of the item. &#x60;product&#x60; is currently the acceptable value | [default to undefined]
**quantity** | **number** | The number of items to get | [default to undefined]
**amount** | **number** | The cost of the item | [default to undefined]

## Example

```typescript
import { OrderItems } from '@alex-paystack/sdk';

const instance: OrderItems = {
    item,
    type,
    quantity,
    amount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
