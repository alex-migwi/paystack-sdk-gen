# DedicatedVirtualAccountCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **string** | The code for the previously created customer | [default to undefined]
**preferredBank** | **string** | The bank slug for preferred bank. To get a list of available banks, use the List Providers endpoint | [optional] [default to undefined]
**subaccount** | **string** | Subaccount code of the account you want to split the transaction with | [optional] [default to undefined]
**splitCode** | **string** | Split code consisting of the lists of accounts you want to split the transaction with | [optional] [default to undefined]

## Example

```typescript
import { DedicatedVirtualAccountCreate } from '@alex-paystack/sdk';

const instance: DedicatedVirtualAccountCreate = {
    customer,
    preferredBank,
    subaccount,
    splitCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
