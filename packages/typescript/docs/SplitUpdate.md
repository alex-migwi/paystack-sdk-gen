# SplitUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of the transaction split | [optional] [default to undefined]
**active** | **boolean** | Toggle status of split. When true, the split is active, else it\&#39;s inactive | [optional] [default to undefined]
**bearerType** | **string** | This allows you specify how the transaction charge should be processed | [optional] [default to undefined]
**bearerSubaccount** | **string** | This is the subaccount code of the customer or partner that would bear the transaction charge if you specified subaccount as the bearer type | [optional] [default to undefined]

## Example

```typescript
import { SplitUpdate } from '@alex-paystack/sdk';

const instance: SplitUpdate = {
    name,
    active,
    bearerType,
    bearerSubaccount,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
