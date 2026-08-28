# TransactionInitialize

Initialize a transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **string** | Customer\&#39;s email address | [default to undefined]
**amount** | **number** | Amount should be in smallest denomination of the currency.  | [default to undefined]
**currency** | [**Currency**](Currency.md) |  | [optional] [default to undefined]
**reference** | **string** | Unique transaction reference. Only -, ., &#x3D; and alphanumeric characters allowed. | [optional] [default to undefined]
**channels** | **Array&lt;string&gt;** | An array of payment channels to control what channels you want to make available to the user to make a payment with | [optional] [default to undefined]
**callbackUrl** | **string** | Fully qualified url, e.g. https://example.com/ to redirect your customers to after a successful payment. Use this to override the callback url provided on the dashboard for this transaction  | [optional] [default to undefined]
**plan** | **string** | If transaction is to create a subscription to a predefined plan, provide plan code here.  This would invalidate the value provided in amount  | [optional] [default to undefined]
**invoiceLimit** | **number** | Number of times to charge customer during subscription to plan | [optional] [default to undefined]
**splitCode** | **string** | The split code of the transaction split | [optional] [default to undefined]
**split** | [**SplitCreate**](SplitCreate.md) |  | [optional] [default to undefined]
**subaccount** | **string** | The code for the subaccount that owns the payment | [optional] [default to undefined]
**transactionCharge** | **string** | A flat fee to charge the subaccount for a transaction.  This overrides the split percentage set when the subaccount was created  | [optional] [default to undefined]
**bearer** | **string** | The bearer of the transaction charge | [optional] [default to undefined]
**label** | **string** | Used to replace the email address shown on the Checkout | [optional] [default to undefined]
**metadata** | **object** | JSON object of custom data | [optional] [default to undefined]

## Example

```typescript
import { TransactionInitialize } from '@alex-paystack/sdk';

const instance: TransactionInitialize = {
    email,
    amount,
    currency,
    reference,
    channels,
    callbackUrl,
    plan,
    invoiceLimit,
    splitCode,
    split,
    subaccount,
    transactionCharge,
    bearer,
    label,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
