# VirtualTerminalCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **string** | The name of the virtual terminal | [default to undefined]
**destinations** | [**Array&lt;VirtualTerminalCreateDestinationsInner&gt;**](VirtualTerminalCreateDestinationsInner.md) | Array of objects containing recipients for payment notifications for the Virtual Terminal. | [default to undefined]
**splitCode** | **string** | Split code to associate with the virtual terminal | [optional] [default to undefined]
**metadata** | **object** | Additional custom data as key-value pairs | [optional] [default to undefined]

## Example

```typescript
import { VirtualTerminalCreate } from '@alex-paystack/sdk';

const instance: VirtualTerminalCreate = {
    name,
    destinations,
    splitCode,
    metadata,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
