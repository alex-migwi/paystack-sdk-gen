# DisputeResolve


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resolution** | **string** | Dispute resolution. Accepted values, merchant-accepted, declined | [default to undefined]
**message** | **string** | Reason for resolving | [default to undefined]
**refundAmount** | **number** | The amount to refund, in the subunit of your integration currency | [default to undefined]
**uploadedFilename** | **string** | Filename of attachment returned via response from the Dispute upload URL | [default to undefined]
**evidence** | **number** | Evidence Id for fraud claims | [optional] [default to undefined]

## Example

```typescript
import { DisputeResolve } from '@alex-paystack/sdk';

const instance: DisputeResolve = {
    resolution,
    message,
    refundAmount,
    uploadedFilename,
    evidence,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
