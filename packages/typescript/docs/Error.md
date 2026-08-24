# ModelError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **boolean** | An indicator for the state of the request | [optional] [default to undefined]
**message** | **string** | A short description of the error | [optional] [default to undefined]
**meta** | [**ErrorMeta**](ErrorMeta.md) |  | [optional] [default to undefined]
**type** | **string** | A tag to indicate the type of the error | [optional] [default to undefined]
**code** | **string** | The error code | [optional] [default to undefined]
**errorCodeMappingNotFound** | **boolean** | An indicator for error mapping for the request | [optional] [default to undefined]

## Example

```typescript
import { ModelError } from '@alex-paystack/sdk';

const instance: ModelError = {
    status,
    message,
    meta,
    type,
    code,
    errorCodeMappingNotFound,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
