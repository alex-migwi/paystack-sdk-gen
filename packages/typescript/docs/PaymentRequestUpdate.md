# PaymentRequestUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **string** | Customer id or code | [optional] [default to undefined]
**amount** | **number** | Payment request amount. Only useful if line items and tax values are ignored.  The endpoint will throw a friendly warning if neither is available. | [optional] [default to undefined]
**currency** | **string** | Specify the currency of the invoice. Allowed values are NGN, GHS, ZAR and USD. Defaults to NGN | [optional] [default to undefined]
**dueDate** | **string** | ISO 8601 representation of request due date | [optional] [default to undefined]
**description** | **string** | A short description of the payment request | [optional] [default to undefined]
**lineItems** | **Array&lt;object&gt;** | Array of line items | [optional] [default to undefined]
**tax** | **Array&lt;object&gt;** | Array of taxes | [optional] [default to undefined]
**sendNotification** | **boolean** | Indicates whether Paystack sends an email notification to customer. Defaults to true | [optional] [default to undefined]
**draft** | **boolean** | Indicate if request should be saved as draft. Defaults to false and overrides send_notification | [optional] [default to undefined]
**hasInvoice** | **Array&lt;object&gt;** | Set to true to create a draft invoice (adds an auto incrementing invoice number if none is provided) even if there are no line_items or tax passed | [optional] [default to undefined]
**invoiceNumber** | **number** | Numeric value of invoice. Invoice will start from 1 and auto increment from there. This field is to help override whatever value Paystack decides.  Auto increment for subsequent invoices continue from this point. | [optional] [default to undefined]
**splitCode** | **string** | The split code of the transaction split. | [optional] [default to undefined]

## Example

```typescript
import { PaymentRequestUpdate } from '@alex-paystack/sdk';

const instance: PaymentRequestUpdate = {
    customer,
    amount,
    currency,
    dueDate,
    description,
    lineItems,
    tax,
    sendNotification,
    draft,
    hasInvoice,
    invoiceNumber,
    splitCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
