# PageCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | Name of page | [default to undefined]
**description** | **string** | The description of the page | [optional] [default to undefined]
**amount** | **number** | Amount should be in kobo if currency is NGN, pesewas, if currency is GHS, and cents, if currency is ZAR | [optional] [default to undefined]
**currency** | **string** | The transaction currency. Defaults to your integration currency. | [optional] [default to undefined]
**slug** | **string** | URL slug you would like to be associated with this page. Page will be accessible at &#x60;https://paystack.com/pay/[slug]&#x60; | [optional] [default to undefined]
**type** | **string** | The type of payment page to create. Defaults to &#x60;payment&#x60; if no type is specified.  | [optional] [default to undefined]
**plan** | **string** | The ID of the plan to subscribe customers on this payment page to when &#x60;type&#x60; is set to &#x60;subscription&#x60;. | [optional] [default to undefined]
**fixedAmount** | **boolean** | Specifies whether to collect a fixed amount on the payment page. If true, &#x60;amount&#x60; must be passed. | [optional] [default to undefined]
**splitCode** | **string** | The split code of the transaction split. e.g. &#x60;SPL_98WF13Eb3w&#x60; | [optional] [default to undefined]
**metadata** | **object** | JSON object of custom data | [optional] [default to undefined]
**redirectUrl** | **string** | If you would like Paystack to redirect to a URL upon successful payment, specify the URL here.  | [optional] [default to undefined]
**successMessage** | **string** | A success message to display to the customer after a successful transaction  | [optional] [default to undefined]
**notificationEmail** | **string** | An email address that will receive transaction notifications for this payment page  | [optional] [default to undefined]
**collectPhone** | **boolean** | Specify whether to collect phone numbers on the payment page  | [optional] [default to undefined]
**customFields** | **Array&lt;object&gt;** | If you would like to accept custom fields, specify them here. | [optional] [default to undefined]

## Example

```typescript
import { PageCreate } from '@alex-paystack/sdk';

const instance: PageCreate = {
    name,
    description,
    amount,
    currency,
    slug,
    type,
    plan,
    fixedAmount,
    splitCode,
    metadata,
    redirectUrl,
    successMessage,
    notificationEmail,
    collectPhone,
    customFields,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
