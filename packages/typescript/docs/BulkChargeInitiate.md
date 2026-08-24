# BulkChargeInitiate

A list of charge object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorization** | **string** | Customer\&#39;s card authorization code | [default to undefined]
**amount** | **number** | Amount to charge on the authorization | [default to undefined]
**reference** | **string** | A unique identifier containing lowercase letters &#x60;(a-z)&#x60;, digits &#x60;(0-9)&#x60; and these symbols: dash (&#x60;-&#x60;), underscore(&#x60;_&#x60;)  | [optional] [default to undefined]
**attemptPartialDebit** | **boolean** | A flag to indicate if you want us to try recouping lower amounts when the customer has insufficient fund | [optional] [default to undefined]
**atLeast** | **number** | Minimum amount to charge if the attempt_partial_debit flag is set | [optional] [default to undefined]
**metadata** | **object** | JSON object of custom data | [optional] [default to undefined]

## Example

```typescript
import { BulkChargeInitiate } from '@alex-paystack/sdk';

const instance: BulkChargeInitiate = {
    authorization,
    amount,
    reference,
    attemptPartialDebit,
    atLeast,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
