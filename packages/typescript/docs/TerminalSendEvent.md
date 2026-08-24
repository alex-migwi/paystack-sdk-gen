# TerminalSendEvent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **string** | The type of event to push | [optional] [default to undefined]
**action** | **string** | The action the Terminal needs to perform. For the invoice type, the action can either be process or view.  For the transaction type, the action can either be process or print.  | [optional] [default to undefined]
**data** | [**TerminalSendEventData**](TerminalSendEventData.md) |  | [optional] [default to undefined]

## Example

```typescript
import { TerminalSendEvent } from '@alex-paystack/sdk';

const instance: TerminalSendEvent = {
    type,
    action,
    data,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
