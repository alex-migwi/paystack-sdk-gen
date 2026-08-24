# VirtualTerminalCreateResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** |  | [default to undefined]
**name** | **string** |  | [default to undefined]
**integration** | **number** |  | [default to undefined]
**domain** | **string** |  | [default to undefined]
**code** | **string** |  | [default to undefined]
**paymentMethods** | **Array&lt;any&gt;** |  | [default to undefined]
**active** | **boolean** |  | [default to undefined]
**metadata** | **string** |  | [default to undefined]
**destinations** | [**Array&lt;VirtualTerminalCreateResponseDataDestinationsInner&gt;**](VirtualTerminalCreateResponseDataDestinationsInner.md) |  | [default to undefined]
**currency** | **string** |  | [default to undefined]

## Example

```typescript
import { VirtualTerminalCreateResponseData } from '@alex-paystack/sdk';

const instance: VirtualTerminalCreateResponseData = {
    id,
    name,
    integration,
    domain,
    code,
    paymentMethods,
    active,
    metadata,
    destinations,
    currency,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
