# TransactionPartialDebitResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**transactionDate** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**reference** | **string** |  | [default to undefined]
**domain** | **string** |  | [default to undefined]
**metadata** | **string** |  | [default to undefined]
**gatewayResponse** | **string** |  | [default to undefined]
**message** | **string** |  | [default to undefined]
**channel** | **string** |  | [default to undefined]
**ipAddress** | **string** |  | [default to undefined]
**log** | [**ChargeAuthorizationResponseDataLog**](ChargeAuthorizationResponseDataLog.md) |  | [default to undefined]
**fees** | **number** |  | [default to undefined]
**authorization** | [**TransactionPartialDebitResponseDataAuthorization**](TransactionPartialDebitResponseDataAuthorization.md) |  | [default to undefined]
**customer** | [**TransactionPartialDebitResponseDataCustomer**](TransactionPartialDebitResponseDataCustomer.md) |  | [default to undefined]
**plan** | **number** |  | [default to undefined]
**requestedAmount** | **number** |  | [default to undefined]
**id** | **number** |  | [default to undefined]

## Example

```typescript
import { TransactionPartialDebitResponseData } from '@alex-paystack/sdk';

const instance: TransactionPartialDebitResponseData = {
    amount,
    currency,
    transactionDate,
    status,
    reference,
    domain,
    metadata,
    gatewayResponse,
    message,
    channel,
    ipAddress,
    log,
    fees,
    authorization,
    customer,
    plan,
    requestedAmount,
    id,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
