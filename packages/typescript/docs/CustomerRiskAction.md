# CustomerRiskAction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **string** | The customer code from the response of the customer creation | [default to undefined]
**riskAction** | **string** | This determines the fraud rules that should be applied to the customer | [optional] [default to RiskActionEnum_Default]

## Example

```typescript
import { CustomerRiskAction } from '@alex-paystack/sdk';

const instance: CustomerRiskAction = {
    customer,
    riskAction,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
