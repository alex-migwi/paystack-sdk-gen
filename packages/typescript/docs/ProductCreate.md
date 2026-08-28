# ProductCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of product | [default to undefined]
**description** | **string** | The description of the product | [default to undefined]
**price** | **number** | Price should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR  | [default to undefined]
**currency** | **string** | Currency in which price is set. Allowed values are: NGN, GHS, ZAR or USD  | [default to undefined]
**unlimited** | **boolean** | Set to true if the product has unlimited stock. Leave as false if the product has limited stock  | [optional] [default to undefined]
**quantity** | **number** | Number of products in stock. Use if limited is true | [optional] [default to undefined]
**splitCode** | **string** | The split code if sharing the transaction with partners | [optional] [default to undefined]
**metadata** | **string** | Stringified JSON object of custom data | [optional] [default to undefined]

## Example

```typescript
import { ProductCreate } from '@alex-paystack/sdk';

const instance: ProductCreate = {
    name,
    description,
    price,
    currency,
    unlimited,
    quantity,
    splitCode,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
