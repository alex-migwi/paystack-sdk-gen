# SubscriptionFetchResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**domain** | **string** |  | [default to undefined]
**status** | **string** |  | [default to undefined]
**subscriptionCode** | **string** |  | [default to undefined]
**emailToken** | **string** |  | [default to undefined]
**amount** | **number** |  | [default to undefined]
**cronExpression** | **string** |  | [default to undefined]
**nextPaymentDate** | **string** |  | [default to undefined]
**openInvoice** | **string** |  | [default to undefined]
**createdAt** | **string** |  | [default to undefined]
**cancelledAt** | **string** |  | [default to undefined]
**integration** | **number** |  | [default to undefined]
**plan** | [**SubscriptionFetchResponseDataPlan**](SubscriptionFetchResponseDataPlan.md) |  | [default to undefined]
**authorization** | [**TransactionPartialDebitResponseDataAuthorization**](TransactionPartialDebitResponseDataAuthorization.md) |  | [default to undefined]
**customer** | [**TransactionFetchResponseDataCustomer**](TransactionFetchResponseDataCustomer.md) |  | [default to undefined]
**invoices** | **Array&lt;any&gt;** |  | [default to undefined]
**invoicesHistory** | **Array&lt;any&gt;** |  | [default to undefined]
**invoiceLimit** | **number** |  | [default to undefined]
**splitCode** | **string** |  | [default to undefined]
**mostRecentInvoice** | **string** |  | [default to undefined]
**paymentsCount** | **number** |  | [default to undefined]
**metadata** | **object** |  | [default to undefined]

## Example

```typescript
import { SubscriptionFetchResponseData } from '@alex-paystack/sdk';

const instance: SubscriptionFetchResponseData = {
    id,
    domain,
    status,
    subscriptionCode,
    emailToken,
    amount,
    cronExpression,
    nextPaymentDate,
    openInvoice,
    createdAt,
    cancelledAt,
    integration,
    plan,
    authorization,
    customer,
    invoices,
    invoicesHistory,
    invoiceLimit,
    splitCode,
    mostRecentInvoice,
    paymentsCount,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
