# CustomerValidate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**firstName** | **string** | Customer\&#39;s first name | [default to undefined]
**middleName** | **string** | Customer\&#39;s middle name | [optional] [default to undefined]
**lastName** | **string** | Customer\&#39;s last name | [default to undefined]
**type** | **string** | Predefined types of identification. | [default to 'bank_account']
**value** | **string** | Customer\&#39;s identification number. | [optional] [default to undefined]
**country** | **string** | Two-letter country code of identification issuer | [default to undefined]
**bvn** | **string** | Customer\&#39;s Bank Verification Number | [default to undefined]
**bankCode** | **string** | You can get the list of bank codes by calling the List Banks endpoint (https://api.paystack.co/bank). | [default to undefined]
**accountNumber** | **string** | Customer\&#39;s bank account number. | [default to undefined]

## Example

```typescript
import { CustomerValidate } from '@alex-paystack/sdk';

const instance: CustomerValidate = {
    firstName,
    middleName,
    lastName,
    type,
    value,
    country,
    bvn,
    bankCode,
    accountNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
