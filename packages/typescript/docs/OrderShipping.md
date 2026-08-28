# OrderShipping

The shipping details of the order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**streetLine** | **string** | The address of for the delivery | [default to undefined]
**city** | **string** | The city of the delivery address | [default to undefined]
**state** | **string** | The state of the delivery address | [default to undefined]
**country** | **string** | The country of the delivery address | [default to undefined]
**shippingFee** | **number** | The cost of delivery | [default to undefined]
**deliveryNote** | **string** | Extra details to be aware of for the delivery | [optional] [default to undefined]

## Example

```typescript
import { OrderShipping } from '@alex-paystack/sdk';

const instance: OrderShipping = {
    streetLine,
    city,
    state,
    country,
    shippingFee,
    deliveryNote,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
