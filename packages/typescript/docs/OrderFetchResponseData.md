# OrderFetchResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discounts** | **Array&lt;any&gt;** |  | [default to undefined]
**orderCode** | **string** |  | [default to undefined]
**domain** | **string** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**email** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**refunded** | **boolean** |  | [default to undefined]
**paidAt** | **string** |  | [default to undefined]
**shippingAddress** | **string** |  | [default to undefined]
**metadata** | **object** |  | [default to undefined]
**shippingFees** | **number** |  | [default to undefined]
**shippingMethod** | **string** |  | [default to undefined]
**isViewed** | **boolean** |  | [default to undefined]
**expirationDate** | **string** |  | [default to undefined]
**payForMe** | **boolean** |  | [default to undefined]
**id** | **number** |  | [default to undefined]
**integration** | **number** |  | [default to undefined]
**page** | **string** |  | [default to undefined]
**customer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | [default to undefined]
**shipping** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**updatedAt** | **string** |  | [default to undefined]
**transaction** | **number** |  | [default to undefined]
**isGift** | **boolean** |  | [default to undefined]
**payer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | [default to undefined]
**fullyRefunded** | **boolean** |  | [default to undefined]
**refundedAmount** | **number** |  | [default to undefined]
**items** | [**Array&lt;OrderItemsArray&gt;**](OrderItemsArray.md) |  | [default to undefined]
**discountAmount** | **string** |  | [default to undefined]

## Example

```typescript
import { OrderFetchResponseData } from '@alex-paystack/sdk';

const instance: OrderFetchResponseData = {
    discounts,
    orderCode,
    domain,
    currency,
    amount,
    email,
    status,
    refunded,
    paidAt,
    shippingAddress,
    metadata,
    shippingFees,
    shippingMethod,
    isViewed,
    expirationDate,
    payForMe,
    id,
    integration,
    page,
    customer,
    shipping,
    createdAt,
    updatedAt,
    transaction,
    isGift,
    payer,
    fullyRefunded,
    refundedAmount,
    items,
    discountAmount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
