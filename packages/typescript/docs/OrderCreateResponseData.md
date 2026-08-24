# OrderCreateResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discounts** | **Array&lt;any&gt;** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**shippingAddress** | **string** |  | [default to undefined]
**integration** | **number** |  | [default to undefined]
**domain** | **string** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**customer** | **number** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**payForMe** | **boolean** |  | [default to undefined]
**shipping** | [**OrderCreateResponseDataShipping**](OrderCreateResponseDataShipping.md) |  | [default to undefined]
**shippingFees** | **number** |  | [default to undefined]
**shippingMethod** | [**OrderCreateResponseDataShippingMethod**](OrderCreateResponseDataShippingMethod.md) |  | [optional] [default to undefined]
**metadata** | **object** |  | [default to undefined]
**orderCode** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**refunded** | **boolean** |  | [default to undefined]
**isViewed** | **boolean** |  | [default to undefined]
**expirationDate** | **string** |  | [default to undefined]
**id** | **number** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**items** | **Array&lt;any&gt;** |  | [default to undefined]
**payForMeCode** | **string** |  | [default to undefined]
**discountAmount** | **number** |  | [default to undefined]

## Example

```typescript
import { OrderCreateResponseData } from '@alex-paystack/sdk';

const instance: OrderCreateResponseData = {
    discounts,
    currency,
    shippingAddress,
    integration,
    domain,
    email,
    customer,
    amount,
    payForMe,
    shipping,
    shippingFees,
    shippingMethod,
    metadata,
    orderCode,
    status,
    refunded,
    isViewed,
    expirationDate,
    id,
    createdAt,
    updatedAt,
    items,
    payForMeCode,
    discountAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
