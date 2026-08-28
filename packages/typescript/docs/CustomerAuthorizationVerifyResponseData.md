# CustomerAuthorizationVerifyResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorizationCode** | **string** |  | [default to undefined]
**channel** | **string** |  | [default to undefined]
**bank** | **string** |  | [default to undefined]
**active** | **boolean** |  | [default to undefined]
**customer** | [**CustomerAuthorizationVerifyResponseCustomer**](CustomerAuthorizationVerifyResponseCustomer.md) |  | [default to undefined]

## Example

```typescript
import { CustomerAuthorizationVerifyResponseData } from '@alex-paystack/sdk';

const instance: CustomerAuthorizationVerifyResponseData = {
    authorizationCode,
    channel,
    bank,
    active,
    customer,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
