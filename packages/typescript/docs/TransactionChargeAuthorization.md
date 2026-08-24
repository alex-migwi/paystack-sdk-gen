# TransactionChargeAuthorization


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Customer\&#39;s email address | [default to undefined]
**amount** | **number** | Amount in the lower denomination of your currency | [default to undefined]
**authorizationCode** | **string** | Valid authorization code to charge | [default to undefined]
**reference** | **string** | Unique transaction reference. Only -, ., &#x3D; and alphanumeric characters allowed. | [optional] [default to undefined]
**currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]
**splitCode** | **string** | The split code of the transaction split | [optional] [default to undefined]
**split** | [**SplitCreate**](SplitCreate.md) |  | [optional] [default to undefined]
**subaccount** | **string** | The code for the subaccount that owns the payment | [optional] [default to undefined]
**transactionCharge** | **string** | A flat fee to charge the subaccount for a transaction.  This overrides the split percentage set when the subaccount was created | [optional] [default to undefined]
**bearer** | **string** | The bearer of the transaction charge | [optional] [default to undefined]
**metadata** | **string** | Stringified JSON object of custom data | [optional] [default to undefined]
**queue** | **boolean** | If you are making a scheduled charge call, it is a good idea to queue them so the processing system does not get overloaded causing transaction processing errors. | [optional] [default to undefined]

## Example

```typescript
import { TransactionChargeAuthorization } from '@alex-paystack/sdk';

const instance: TransactionChargeAuthorization = {
    email,
    amount,
    authorizationCode,
    reference,
    currency,
    splitCode,
    split,
    subaccount,
    transactionCharge,
    bearer,
    metadata,
    queue,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
