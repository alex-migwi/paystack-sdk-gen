# DedicatedVirtualAccountSplit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountNumber** | **string** | Valid Dedicated virtual account | [default to undefined]
**subaccount** | **string** | Subaccount code of the account you want to split the transaction with | [optional] [default to undefined]
**splitCode** | **string** | Split code consisting of the lists of accounts you want to split the transaction with | [optional] [default to undefined]

## Example

```typescript
import { DedicatedVirtualAccountSplit } from '@alex-paystack/sdk';

const instance: DedicatedVirtualAccountSplit = {
    accountNumber,
    subaccount,
    splitCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
