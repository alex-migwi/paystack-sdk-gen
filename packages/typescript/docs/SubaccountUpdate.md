# SubaccountUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**businessName** | **string** | Name of business for subaccount | [optional] [default to undefined]
**settlementBank** | **string** | Bank code for the bank. You can get the list of Bank Codes by calling the List Banks endpoint. | [optional] [default to undefined]
**accountNumber** | **string** | Bank account number | [optional] [default to undefined]
**active** | **boolean** | Activate or deactivate a subaccount | [optional] [default to undefined]
**percentageCharge** | **number** | Customer\&#39;s phone number | [optional] [default to undefined]
**description** | **string** | A description for this subaccount | [optional] [default to undefined]
**primaryContactEmail** | **string** | A contact email for the subaccount | [optional] [default to undefined]
**primaryContactName** | **string** | The name of the contact person for this subaccount | [optional] [default to undefined]
**primaryContactPhone** | **string** | A phone number to call for this subaccount | [optional] [default to undefined]
**metadata** | **string** | Stringified JSON object of custom data | [optional] [default to undefined]

## Example

```typescript
import { SubaccountUpdate } from '@alex-paystack/sdk';

const instance: SubaccountUpdate = {
    businessName,
    settlementBank,
    accountNumber,
    active,
    percentageCharge,
    description,
    primaryContactEmail,
    primaryContactName,
    primaryContactPhone,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
