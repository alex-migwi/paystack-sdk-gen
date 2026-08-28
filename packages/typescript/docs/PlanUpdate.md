# PlanUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of plan | [optional] [default to undefined]
**amount** | **number** | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR | [optional] [default to undefined]
**interval** | **string** | Payment interval | [optional] [default to undefined]
**description** | **boolean** | A description for this plan | [optional] [default to undefined]
**sendInvoices** | **boolean** | Set to false if you don\&#39;t want invoices to be sent to your customers | [optional] [default to undefined]
**sendSms** | **boolean** | Set to false if you don\&#39;t want text messages to be sent to your customers | [optional] [default to undefined]
**currency** | **string** | Currency in which amount is set. Allowed values are NGN, GHS, ZAR or USD | [optional] [default to undefined]
**invoiceLimit** | **number** | Number of invoices to raise during subscription to this plan.  Can be overridden by specifying an invoice_limit while subscribing. | [optional] [default to undefined]

## Example

```typescript
import { PlanUpdate } from '@alex-paystack/sdk';

const instance: PlanUpdate = {
    name,
    amount,
    interval,
    description,
    sendInvoices,
    sendSms,
    currency,
    invoiceLimit,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
