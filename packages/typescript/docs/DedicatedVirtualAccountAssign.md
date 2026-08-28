# DedicatedVirtualAccountAssign


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Customer\&#39;s email address | [default to undefined]
**firstName** | **string** | Customer\&#39;s first name | [default to undefined]
**lastName** | **string** | Customer\&#39;s last name | [default to undefined]
**phone** | **string** | Customer\&#39;s phone name | [default to undefined]
**preferredBank** | **string** | The bank slug for preferred bank. To get a list of available banks,  use the List Banks endpoint, passing &#x60;pay_with_bank_transfer&#x3D;true&#x60; query parameter  | [default to undefined]
**country** | **string** | The two letter code country | [default to undefined]
**accountNumber** | **string** | Customer\&#39;s account number | [optional] [default to undefined]
**bvn** | **string** | Customer\&#39;s Bank Verification Number | [optional] [default to undefined]
**bankCode** | **string** | Customer\&#39;s bank code | [optional] [default to undefined]
**subaccount** | **string** | Subaccount code of the account you want to split the transaction with | [optional] [default to undefined]
**splitCode** | **string** | Split code consisting of the lists of accounts you want to split the transaction with | [optional] [default to undefined]

## Example

```typescript
import { DedicatedVirtualAccountAssign } from '@alex-paystack/sdk';

const instance: DedicatedVirtualAccountAssign = {
    email,
    firstName,
    lastName,
    phone,
    preferredBank,
    country,
    accountNumber,
    bvn,
    bankCode,
    subaccount,
    splitCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
