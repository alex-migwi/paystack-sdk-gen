# BankValidateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountName** | **string** | Customer\&#39;s first and last name registered with their bank | [default to undefined]
**accountNumber** | **string** | Customer\&#39;s account number | [default to undefined]
**accountType** | **string** | The type of the customer\&#39;s account number | [default to undefined]
**bankCode** | **string** | The bank code of the customer’s bank. You can fetch the bank codes by using our List Banks endpoint | [default to undefined]
**countryCode** | **string** | The two digit ISO code of the customer’s bank | [default to undefined]
**documentType** | **string** | Customer’s mode of identity | [default to undefined]
**documentNumber** | **string** | Customer’s mode of identity number | [optional] [default to undefined]

## Example

```typescript
import { BankValidateRequest } from '@alex-paystack/sdk';

const instance: BankValidateRequest = {
    accountName,
    accountNumber,
    accountType,
    bankCode,
    countryCode,
    documentType,
    documentNumber,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
