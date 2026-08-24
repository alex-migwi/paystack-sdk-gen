# SplitCreate

Split configuration for transactions 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the transaction split | [default to undefined]
**type** | **string** | The type of transaction split you want to create. | [default to undefined]
**subaccounts** | [**Array&lt;SplitSubaccounts&gt;**](SplitSubaccounts.md) | A list of object containing subaccount code and number of shares | [default to undefined]
**currency** | **string** | The transaction currency | [default to undefined]
**bearerType** | **string** | This allows you specify how the transaction charge should be processed | [optional] [default to undefined]
**bearerSubaccount** | **string** | This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type | [optional] [default to undefined]

## Example

```typescript
import { SplitCreate } from '@alex-paystack/sdk';

const instance: SplitCreate = {
    name,
    type,
    subaccounts,
    currency,
    bearerType,
    bearerSubaccount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
