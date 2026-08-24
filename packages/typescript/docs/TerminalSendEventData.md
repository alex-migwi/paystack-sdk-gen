# TerminalSendEventData

The parameters needed to perform the specified action

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **number** | The invoice or transaction  ID you want to push to the Terminal | [optional] [default to undefined]
**reference** | **string** | The offline_reference from the Payment Request response | [optional] [default to undefined]

## Example

```typescript
import { TerminalSendEventData } from '@alex-paystack/sdk';

const instance: TerminalSendEventData = {
    id,
    reference,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
