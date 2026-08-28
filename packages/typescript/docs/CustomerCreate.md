# CustomerCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Customer\&#39;s email address | [default to undefined]
**firstName** | **string** | Customer\&#39;s first name | [optional] [default to undefined]
**lastName** | **string** | Customer\&#39;s last name | [optional] [default to undefined]
**phone** | **string** | Customer\&#39;s phone number | [optional] [default to undefined]
**metadata** | **string** | Stringified JSON object of custom data | [optional] [default to undefined]

## Example

```typescript
import { CustomerCreate } from '@alex-paystack/sdk';

const instance: CustomerCreate = {
    email,
    firstName,
    lastName,
    phone,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
