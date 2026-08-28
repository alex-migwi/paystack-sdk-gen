# ChargeSubmitPhoneResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**transactionDate** | **string** |  | [default to undefined]
**reference** | **string** |  | [default to undefined]
**domain** | **string** |  | [default to undefined]
**redirectUrl** | **string** |  | [default to undefined]
**metadata** | **object** |  | [default to undefined]
**gatewayResponse** | **string** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**channel** | **string** |  | [default to undefined]
**fees** | **number** |  | [default to undefined]
**authorization** | [**ChargeSubmitPinResponseDataAuthorization**](ChargeSubmitPinResponseDataAuthorization.md) |  | [default to undefined]
**customer** | [**ChargeSubmitPinResponseDataCustomer**](ChargeSubmitPinResponseDataCustomer.md) |  | [default to undefined]
**displayText** | **string** |  | [default to undefined]

## Example

```typescript
import { ChargeSubmitPhoneResponseData } from '@alex-paystack/sdk';

const instance: ChargeSubmitPhoneResponseData = {
    status,
    amount,
    currency,
    transactionDate,
    reference,
    domain,
    redirectUrl,
    metadata,
    gatewayResponse,
    message,
    channel,
    fees,
    authorization,
    customer,
    displayText,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
