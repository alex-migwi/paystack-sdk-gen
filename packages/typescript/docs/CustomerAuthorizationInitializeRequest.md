# CustomerAuthorizationInitializeRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Customer\&#39;s email address | [default to undefined]
**channel** | **string** | direct_debit is the only supported option for now | [default to undefined]
**callbackUrl** | **string** | Fully qualified url (e.g. https://example.com/) to redirect your customer to | [optional] [default to undefined]
**account** | [**CustomerAuthorizationInitializeAccount**](CustomerAuthorizationInitializeAccount.md) |  | [optional] [default to undefined]
**address** | [**CustomerAuthorizationInitializeAddress**](CustomerAuthorizationInitializeAddress.md) |  | [optional] [default to undefined]

## Example

```typescript
import { CustomerAuthorizationInitializeRequest } from '@alex-paystack/sdk';

const instance: CustomerAuthorizationInitializeRequest = {
    email,
    channel,
    callbackUrl,
    account,
    address,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
