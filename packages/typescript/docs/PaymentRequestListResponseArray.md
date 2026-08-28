# PaymentRequestListResponseArray


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**integration** | **number** |  | [default to undefined]
**domain** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**currency** | **string** |  | [default to undefined]
**dueDate** | **string** |  | [default to undefined]
**hasInvoice** | **boolean** |  | [default to undefined]
**invoiceNumber** | **number** |  | [default to undefined]
**description** | **string** |  | [default to undefined]
**pdfUrl** | **string** |  | [default to undefined]
**lineItems** | [**Array&lt;PaymentRequestLineItemsArray&gt;**](PaymentRequestLineItemsArray.md) |  | [default to undefined]
**tax** | [**Array&lt;PaymentRequestTaxArray&gt;**](PaymentRequestTaxArray.md) |  | [default to undefined]
**requestCode** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**paid** | **boolean** |  | [default to undefined]
**paidAt** | **string** |  | [default to undefined]
**metadata** | **string** |  | [default to undefined]
**notifications** | **Array&lt;any&gt;** |  | [default to undefined]
**offlineReference** | **string** |  | [default to undefined]
**customer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**discount** | **string** |  | [default to undefined]
**splitCode** | **string** |  | [default to undefined]

## Example

```typescript
import { PaymentRequestListResponseArray } from '@alex-paystack/sdk';

const instance: PaymentRequestListResponseArray = {
    id,
    integration,
    domain,
    amount,
    currency,
    dueDate,
    hasInvoice,
    invoiceNumber,
    description,
    pdfUrl,
    lineItems,
    tax,
    requestCode,
    status,
    paid,
    paidAt,
    metadata,
    notifications,
    offlineReference,
    customer,
    createdAt,
    discount,
    splitCode,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
