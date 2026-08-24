# ChargeSuccessData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**domain** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**reference** | **string** |  | [default to undefined]
**amount** | **number** | Amount in kobo/cents | [default to undefined]
**message** | **string** |  | [optional] [default to undefined]
**gatewayResponse** | **string** |  | [optional] [default to undefined]
**paidAt** | **string** |  | [optional] [default to undefined]
**createdAt** | **string** |  | [optional] [default to undefined]
**channel** | **string** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**ipAddress** | **string** |  | [optional] [default to undefined]
**metadata** | **object** |  | [optional] [default to undefined]
**customer** | [**ChargeSuccessDataCustomer**](ChargeSuccessDataCustomer.md) |  | [optional] [default to undefined]
**authorization** | [**ChargeSuccessDataAuthorization**](ChargeSuccessDataAuthorization.md) |  | [optional] [default to undefined]

## Example

```typescript
import { ChargeSuccessData } from '@alex-paystack/sdk';

const instance: ChargeSuccessData = {
    id,
    domain,
    status,
    reference,
    amount,
    message,
    gatewayResponse,
    paidAt,
    createdAt,
    channel,
    currency,
    ipAddress,
    metadata,
    customer,
    authorization,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
