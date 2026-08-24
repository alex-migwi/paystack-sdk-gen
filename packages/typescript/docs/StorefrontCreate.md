# StorefrontCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the storefront | [default to undefined]
**slug** | **string** | A unique identifier to access your store. Once the storefront is created, it can be accessed from https://paystack.shop/your-slug  | [default to undefined]
**currency** | **string** | Currency for prices of products in your storefront. | [default to undefined]
**description** | **string** | The description of the storefront | [optional] [default to undefined]

## Example

```typescript
import { StorefrontCreate } from '@alex-paystack/sdk';

const instance: StorefrontCreate = {
    name,
    slug,
    currency,
    description,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
