# TransferRecipientCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | Recipient Type | [default to undefined]
**name** | **string** | The recipient\&#39;s name according to their account registration. | [default to undefined]
**accountNumber** | **string** | Recipient\&#39;s bank account number | [default to undefined]
**bankCode** | **string** | Recipient\&#39;s bank code. You can get the list of Bank Codes by calling the List Banks endpoint | [default to undefined]
**description** | **string** | A description for this recipient | [optional] [default to undefined]
**currency** | **string** | Currency for the account receiving the transfer | [optional] [default to undefined]
**authorizationCode** | **string** | An authorization code from a previous transaction | [optional] [default to undefined]
**metadata** | **object** | JSON object of custom data | [optional] [default to undefined]

## Example

```typescript
import { TransferRecipientCreate } from '@alex-paystack/sdk';

const instance: TransferRecipientCreate = {
    type,
    name,
    accountNumber,
    bankCode,
    description,
    currency,
    authorizationCode,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
