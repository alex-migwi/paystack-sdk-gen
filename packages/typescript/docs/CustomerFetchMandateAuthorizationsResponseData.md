# CustomerFetchMandateAuthorizationsResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**mandateId** | **number** |  | [default to undefined]
**authorizationId** | **number** |  | [default to undefined]
**authorizationCode** | **string** |  | [default to undefined]
**integrationId** | **number** |  | [default to undefined]
**accountNumber** | **string** |  | [default to undefined]
**bankCode** | **string** |  | [default to undefined]
**bankName** | **string** |  | [optional] [default to undefined]
**customer** | [**CustomerFetchMandateAuthorizationsResponseDataCustomer**](CustomerFetchMandateAuthorizationsResponseDataCustomer.md) |  | [default to undefined]
**authorizedAt** | **string** |  | [default to undefined]

## Example

```typescript
import { CustomerFetchMandateAuthorizationsResponseData } from '@alex-paystack/sdk';

const instance: CustomerFetchMandateAuthorizationsResponseData = {
    id,
    status,
    mandateId,
    authorizationId,
    authorizationCode,
    integrationId,
    accountNumber,
    bankCode,
    bankName,
    customer,
    authorizedAt,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
