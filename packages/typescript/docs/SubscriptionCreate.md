# SubscriptionCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **string** | Customer\&#39;s email address or customer code | [default to undefined]
**plan** | **string** | Plan code | [default to undefined]
**authorization** | **string** | If customer has multiple authorizations, you can set the desired authorization you wish to use for this subscription here.  If this is not supplied, the customer\&#39;s most recent authorization would be used | [optional] [default to undefined]
**startDate** | **string** | Set the date for the first debit. (ISO 8601 format) e.g. 2017-05-16T00:30:13+01:00 | [optional] [default to undefined]

## Example

```typescript
import { SubscriptionCreate } from '@alex-paystack/sdk';

const instance: SubscriptionCreate = {
    customer,
    plan,
    authorization,
    startDate,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
