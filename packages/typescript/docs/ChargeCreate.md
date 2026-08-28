# ChargeCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Customer\&#39;s email address | [default to undefined]
**amount** | **number** | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR | [default to undefined]
**authorizationCode** | **string** | An authorization code to charge. | [optional] [default to undefined]
**pin** | **string** | 4-digit PIN (send with a non-reusable authorization code) | [optional] [default to undefined]
**reference** | **string** | Unique transaction reference. Only -, .&#x60;, &#x3D; and alphanumeric characters allowed. | [optional] [default to undefined]
**birthday** | **string** | The customer\&#39;s birthday in the format YYYY-MM-DD e.g 2017-05-16 | [optional] [default to undefined]
**deviceId** | **string** | This is the unique identifier of the device a user uses in making payment.  Only -, .&#x60;, &#x3D; and alphanumeric characters are allowed. | [optional] [default to undefined]
**metadata** | **object** | JSON object of custom data | [optional] [default to undefined]

## Example

```typescript
import { ChargeCreate } from '@alex-paystack/sdk';

const instance: ChargeCreate = {
    email,
    amount,
    authorizationCode,
    pin,
    reference,
    birthday,
    deviceId,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
