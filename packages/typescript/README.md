## @alex-paystack/sdk@1.0.0

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition will be automatically resolved via `package.json`. ([Reference](https://www.typescriptlang.org/docs/handbook/declaration-files/consumption.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @alex-paystack/sdk@1.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### Documentation for API Endpoints

All URIs are relative to *https://api.paystack.co*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ApplePayApi* | [**listApplePayDomains**](docs/ApplePayApi.md#listapplepaydomains) | **GET** /apple-pay/domain | List Domains
*ApplePayApi* | [**registerApplePayDomain**](docs/ApplePayApi.md#registerapplepaydomain) | **POST** /apple-pay/domain | Register Domain
*ApplePayApi* | [**unregisterApplePayDomain**](docs/ApplePayApi.md#unregisterapplepaydomain) | **DELETE** /apple-pay/domain | Unregister Domain
*BalanceApi* | [**fetchBalance**](docs/BalanceApi.md#fetchbalance) | **GET** /balance | Fetch Balance
*BalanceApi* | [**ledgerBalance**](docs/BalanceApi.md#ledgerbalance) | **GET** /balance/ledger | Balance Ledger
*BankApi* | [**listBanks**](docs/BankApi.md#listbanks) | **GET** /bank | List Banks
*BankApi* | [**resolveAccountNumber**](docs/BankApi.md#resolveaccountnumber) | **GET** /bank/resolve | Resolve Account Number
*BankApi* | [**validateBankAccount**](docs/BankApi.md#validatebankaccount) | **POST** /bank/validate | Validate Bank Account
*BulkChargeApi* | [**fetchBulkChargeBatch**](docs/BulkChargeApi.md#fetchbulkchargebatch) | **GET** /bulkcharge/{code} | Fetch Bulk Charge Batch
*BulkChargeApi* | [**initiateBulkCharge**](docs/BulkChargeApi.md#initiatebulkcharge) | **POST** /bulkcharge | Initiate Bulk Charge
*BulkChargeApi* | [**listBulkChargeItems**](docs/BulkChargeApi.md#listbulkchargeitems) | **GET** /bulkcharge/{code}/charges | List Charges in a Batch
*BulkChargeApi* | [**listBulkCharges**](docs/BulkChargeApi.md#listbulkcharges) | **GET** /bulkcharge | List Bulk Charge Batches
*BulkChargeApi* | [**pauseBulkChargeBatch**](docs/BulkChargeApi.md#pausebulkchargebatch) | **GET** /bulkcharge/pause/{code} | Pause Bulk Charge Batch
*BulkChargeApi* | [**resumeBulkChargeBatch**](docs/BulkChargeApi.md#resumebulkchargebatch) | **GET** /bulkcharge/resume/{code} | Resume Bulk Charge Batch
*ChargeApi* | [**createCharge**](docs/ChargeApi.md#createcharge) | **POST** /charge | Create Charge
*ChargeApi* | [**submitChargeAddress**](docs/ChargeApi.md#submitchargeaddress) | **POST** /charge/submit_address | Submit Address
*ChargeApi* | [**submitChargeBirthday**](docs/ChargeApi.md#submitchargebirthday) | **POST** /charge/submit_birthday | Submit Birthday
*ChargeApi* | [**submitChargeOtp**](docs/ChargeApi.md#submitchargeotp) | **POST** /charge/submit_otp | Submit OTP
*ChargeApi* | [**submitChargePhone**](docs/ChargeApi.md#submitchargephone) | **POST** /charge/submit_phone | Submit Phone
*ChargeApi* | [**submitChargePin**](docs/ChargeApi.md#submitchargepin) | **POST** /charge/submit_pin | Submit PIN
*ChargeApi* | [**verifyCharge**](docs/ChargeApi.md#verifycharge) | **GET** /charge/{reference} | Check pending charge
*CustomerApi* | [**createCustomer**](docs/CustomerApi.md#createcustomer) | **POST** /customer | Create Customer
*CustomerApi* | [**deactivateAuthorizationCustomer**](docs/CustomerApi.md#deactivateauthorizationcustomer) | **POST** /customer/authorization/deactivate | Deactivate Authorization
*CustomerApi* | [**directDebitActivationChargeCustomer**](docs/CustomerApi.md#directdebitactivationchargecustomer) | **PUT** /customer/{id}/directdebit-activation-charge | Direct Debit Activation Charge
*CustomerApi* | [**fetchCustomer**](docs/CustomerApi.md#fetchcustomer) | **GET** /customer/{code} | Fetch Customer
*CustomerApi* | [**fetchMandateAuthorizationsCustomer**](docs/CustomerApi.md#fetchmandateauthorizationscustomer) | **GET** /customer/{id}/directdebit-mandate-authorizations | Fetch Mandate Authorizations
*CustomerApi* | [**initializeAuthorizationCustomer**](docs/CustomerApi.md#initializeauthorizationcustomer) | **POST** /customer/authorization/initialize | Initialize Authorization
*CustomerApi* | [**initializeDirectDebitCustomer**](docs/CustomerApi.md#initializedirectdebitcustomer) | **POST** /customer/{id}/initialize-direct-debit | Initialize Direct Debit
*CustomerApi* | [**listCustomers**](docs/CustomerApi.md#listcustomers) | **GET** /customer | List Customers
*CustomerApi* | [**riskActionCustomer**](docs/CustomerApi.md#riskactioncustomer) | **POST** /customer/set_risk_action | Set Risk Action
*CustomerApi* | [**updateCustomer**](docs/CustomerApi.md#updatecustomer) | **PUT** /customer/{code} | Update Customer
*CustomerApi* | [**validateCustomer**](docs/CustomerApi.md#validatecustomer) | **POST** /customer/{code}/identification | Validate Customer
*CustomerApi* | [**verifyAuthorizationCustomer**](docs/CustomerApi.md#verifyauthorizationcustomer) | **GET** /customer/authorization/verify/{reference} | Verify Authorization
*DedicatedVirtualAccountApi* | [**assignDedicatedAccount**](docs/DedicatedVirtualAccountApi.md#assigndedicatedaccount) | **POST** /dedicated_account/assign | Assign Dedicated Account
*DedicatedVirtualAccountApi* | [**createDedicatedAccount**](docs/DedicatedVirtualAccountApi.md#creatededicatedaccount) | **POST** /dedicated_account | Create Dedicated Account
*DedicatedVirtualAccountApi* | [**deactivateDedicatedAccount**](docs/DedicatedVirtualAccountApi.md#deactivatededicatedaccount) | **DELETE** /dedicated_account/{id} | Deactivate Dedicated Account
*DedicatedVirtualAccountApi* | [**fetchDedicatedAccount**](docs/DedicatedVirtualAccountApi.md#fetchdedicatedaccount) | **GET** /dedicated_account/{id} | Fetch Dedicated Account
*DedicatedVirtualAccountApi* | [**fetchDedicatedAccountProviders**](docs/DedicatedVirtualAccountApi.md#fetchdedicatedaccountproviders) | **GET** /dedicated_account/available_providers | Fetch Bank Providers
*DedicatedVirtualAccountApi* | [**listDedicatedAccounts**](docs/DedicatedVirtualAccountApi.md#listdedicatedaccounts) | **GET** /dedicated_account | List Dedicated Accounts
*DedicatedVirtualAccountApi* | [**removeDedicatedAccountSplit**](docs/DedicatedVirtualAccountApi.md#removededicatedaccountsplit) | **DELETE** /dedicated_account/split | Remove Split from Dedicated Account
*DedicatedVirtualAccountApi* | [**requeryDedicatedAccount**](docs/DedicatedVirtualAccountApi.md#requerydedicatedaccount) | **GET** /dedicated_account/requery | Requery Dedicated Account
*DedicatedVirtualAccountApi* | [**splitDedicatedAccount**](docs/DedicatedVirtualAccountApi.md#splitdedicatedaccount) | **POST** /dedicated_account/split | Split Dedicated Account Transaction
*DirectDebitApi* | [**listMandateAuthorizationsDirectdebit**](docs/DirectDebitApi.md#listmandateauthorizationsdirectdebit) | **GET** /directdebit/mandate-authorizations | List Mandate Authorizations
*DirectDebitApi* | [**triggerActivationChargeDirectdebit**](docs/DirectDebitApi.md#triggeractivationchargedirectdebit) | **PUT** /directdebit/activation-charge | Trigger Activation Charge
*DisputeApi* | [**addDisputeEvidence**](docs/DisputeApi.md#adddisputeevidence) | **POST** /dispute/{id}/evidence | Add Evidence
*DisputeApi* | [**exportDisputes**](docs/DisputeApi.md#exportdisputes) | **GET** /dispute/export | Export Disputes
*DisputeApi* | [**fetchDispute**](docs/DisputeApi.md#fetchdispute) | **GET** /dispute/{id} | Fetch Dispute
*DisputeApi* | [**fetchDisputeUploadUrl**](docs/DisputeApi.md#fetchdisputeuploadurl) | **GET** /dispute/{id}/upload_url | Fetch Upload URL
*DisputeApi* | [**listDisputes**](docs/DisputeApi.md#listdisputes) | **GET** /dispute | List Disputes
*DisputeApi* | [**listTransactionDisputes**](docs/DisputeApi.md#listtransactiondisputes) | **GET** /dispute/transaction/{id} | List Transaction Disputes
*DisputeApi* | [**resolveDispute**](docs/DisputeApi.md#resolvedispute) | **PUT** /dispute/{id}/resolve | Resolve Dispute
*DisputeApi* | [**updateDispute**](docs/DisputeApi.md#updatedispute) | **PUT** /dispute/{id} | Update Dispute
*IntegrationApi* | [**fetchPaymentSessionTimeout**](docs/IntegrationApi.md#fetchpaymentsessiontimeout) | **GET** /integration/payment_session_timeout | Fetch Payment Session Timeout
*IntegrationApi* | [**updatePaymentSessionTimeout**](docs/IntegrationApi.md#updatepaymentsessiontimeout) | **PUT** /integration/payment_session_timeout | Update Payment Session Timeout
*MiscellaneousApi* | [**listAvsStates**](docs/MiscellaneousApi.md#listavsstates) | **GET** /address_verification/states | List States (AVS)
*MiscellaneousApi* | [**listCountries**](docs/MiscellaneousApi.md#listcountries) | **GET** /country | List Countries
*MiscellaneousApi* | [**resolveCardBin**](docs/MiscellaneousApi.md#resolvecardbin) | **GET** /decision/bin/{bin} | Resolve Card BIN
*OrderApi* | [**createOrder**](docs/OrderApi.md#createorder) | **POST** /order | Create Order
*OrderApi* | [**fetchOrder**](docs/OrderApi.md#fetchorder) | **GET** /order/{id} | Fetch Order
*OrderApi* | [**fetchProductOrders**](docs/OrderApi.md#fetchproductorders) | **GET** /order/product/{id} | Fetch Product Orders
*OrderApi* | [**listOrders**](docs/OrderApi.md#listorders) | **GET** /order | List Orders
*OrderApi* | [**validateOrder**](docs/OrderApi.md#validateorder) | **GET** /order/{code}/validate | Validate Order
*PageApi* | [**addProductsToPage**](docs/PageApi.md#addproductstopage) | **POST** /page/{id}/product | Add Products
*PageApi* | [**checkPageSlugAvailability**](docs/PageApi.md#checkpageslugavailability) | **GET** /page/check_slug_availability/{slug} | Check Slug Availability
*PageApi* | [**createPage**](docs/PageApi.md#createpage) | **POST** /page | Create Page
*PageApi* | [**fetchPage**](docs/PageApi.md#fetchpage) | **GET** /page/{id} | Fetch Page
*PageApi* | [**listPages**](docs/PageApi.md#listpages) | **GET** /page | List Pages
*PageApi* | [**updatePage**](docs/PageApi.md#updatepage) | **PUT** /page/{id} | Update Page
*PaymentRequestApi* | [**archivePaymentRequest**](docs/PaymentRequestApi.md#archivepaymentrequest) | **POST** /paymentrequest/archive/{id} | Archive Payment Request
*PaymentRequestApi* | [**createPaymentRequest**](docs/PaymentRequestApi.md#createpaymentrequest) | **POST** /paymentrequest | Create Payment Request
*PaymentRequestApi* | [**fetchPaymentRequest**](docs/PaymentRequestApi.md#fetchpaymentrequest) | **GET** /paymentrequest/{id} | Fetch Payment Request
*PaymentRequestApi* | [**finalizePaymentRequest**](docs/PaymentRequestApi.md#finalizepaymentrequest) | **POST** /paymentrequest/finalize/{id} | Finalize Payment Request
*PaymentRequestApi* | [**listPaymentRequest**](docs/PaymentRequestApi.md#listpaymentrequest) | **GET** /paymentrequest | List Payment Request
*PaymentRequestApi* | [**notifyPaymentRequest**](docs/PaymentRequestApi.md#notifypaymentrequest) | **POST** /paymentrequest/notify/{id} | Send Notification
*PaymentRequestApi* | [**totalsPaymentRequest**](docs/PaymentRequestApi.md#totalspaymentrequest) | **GET** /paymentrequest/totals | Payment Request Total
*PaymentRequestApi* | [**updatePaymentRequest**](docs/PaymentRequestApi.md#updatepaymentrequest) | **PUT** /paymentrequest/{id} | Update Payment Request
*PaymentRequestApi* | [**verifyPaymentRequest**](docs/PaymentRequestApi.md#verifypaymentrequest) | **GET** /paymentrequest/verify/{id} | Verify Payment Request
*PlanApi* | [**createPlan**](docs/PlanApi.md#createplan) | **POST** /plan | Create Plan
*PlanApi* | [**fetchPlan**](docs/PlanApi.md#fetchplan) | **GET** /plan/{code} | Fetch Plan
*PlanApi* | [**listPlans**](docs/PlanApi.md#listplans) | **GET** /plan | List Plans
*PlanApi* | [**updatePlan**](docs/PlanApi.md#updateplan) | **PUT** /plan/{code} | Update Plan
*ProductApi* | [**createProduct**](docs/ProductApi.md#createproduct) | **POST** /product | Create Product
*ProductApi* | [**deleteProduct**](docs/ProductApi.md#deleteproduct) | **DELETE** /product/{id} | Delete Product
*ProductApi* | [**fetchProduct**](docs/ProductApi.md#fetchproduct) | **GET** /product/{id} | Fetch Product
*ProductApi* | [**listProducts**](docs/ProductApi.md#listproducts) | **GET** /product | List Products
*ProductApi* | [**updateProduct**](docs/ProductApi.md#updateproduct) | **PUT** /product/{id} | Update product
*RefundApi* | [**createRefund**](docs/RefundApi.md#createrefund) | **POST** /refund | Create Refund
*RefundApi* | [**fetchRefund**](docs/RefundApi.md#fetchrefund) | **GET** /refund/{id} | Fetch Refund
*RefundApi* | [**listRefunds**](docs/RefundApi.md#listrefunds) | **GET** /refund | List Refunds
*RefundApi* | [**retryRefund**](docs/RefundApi.md#retryrefund) | **POST** /refund/retry_with_customer_details/{id} | Retry Refund
*SettlementApi* | [**fetchSettlementTransactions**](docs/SettlementApi.md#fetchsettlementtransactions) | **GET** /settlement/{id}/transactions | Fetch Settlement Transactions
*SettlementApi* | [**listSettlements**](docs/SettlementApi.md#listsettlements) | **GET** /settlement | List Settlements
*SplitApi* | [**addSubaccountToSplit**](docs/SplitApi.md#addsubaccounttosplit) | **POST** /split/{id}/subaccount/add | Add Subaccount to Split
*SplitApi* | [**createSplit**](docs/SplitApi.md#createsplit) | **POST** /split | Create Split
*SplitApi* | [**fetchSplit**](docs/SplitApi.md#fetchsplit) | **GET** /split/{id} | Fetch Split
*SplitApi* | [**listSplits**](docs/SplitApi.md#listsplits) | **GET** /split | List Splits
*SplitApi* | [**removeSubaccountFromSplit**](docs/SplitApi.md#removesubaccountfromsplit) | **POST** /split/{id}/subaccount/remove | Remove Subaccount from split
*SplitApi* | [**updateSplit**](docs/SplitApi.md#updatesplit) | **PUT** /split/{id} | Update Split
*StorefrontApi* | [**addProductsToStorefront**](docs/StorefrontApi.md#addproductstostorefront) | **POST** /storefront/{id}/product | Add Products to Storefront
*StorefrontApi* | [**createStorefront**](docs/StorefrontApi.md#createstorefront) | **POST** /storefront | Create Storefront
*StorefrontApi* | [**deleteStorefront**](docs/StorefrontApi.md#deletestorefront) | **DELETE** /storefront/{id} | Delete Storefront
*StorefrontApi* | [**duplicateStorefront**](docs/StorefrontApi.md#duplicatestorefront) | **POST** /storefront/{id}/duplicate | Duplicate Storefront
*StorefrontApi* | [**fetchStorefront**](docs/StorefrontApi.md#fetchstorefront) | **GET** /storefront/{id} | Fetch Storefront
*StorefrontApi* | [**fetchStorefrontOrders**](docs/StorefrontApi.md#fetchstorefrontorders) | **GET** /storefront/{id}/order | Fetch Storefront Orders
*StorefrontApi* | [**listStorefrontProducts**](docs/StorefrontApi.md#liststorefrontproducts) | **GET** /storefront/{id}/product | List Storefront Products
*StorefrontApi* | [**listStorefronts**](docs/StorefrontApi.md#liststorefronts) | **GET** /storefront | List Storefronts
*StorefrontApi* | [**publishStorefront**](docs/StorefrontApi.md#publishstorefront) | **POST** /storefront/{id}/publish | Publish Storefront
*StorefrontApi* | [**updateStorefront**](docs/StorefrontApi.md#updatestorefront) | **PUT** /storefront/{id} | Update Storefront
*StorefrontApi* | [**verifyStorefrontSlug**](docs/StorefrontApi.md#verifystorefrontslug) | **GET** /storefront/verify/{slug} | Verify Storefront Slug
*SubaccountApi* | [**createSubaccount**](docs/SubaccountApi.md#createsubaccount) | **POST** /subaccount | Create Subaccount
*SubaccountApi* | [**fetchSubaccount**](docs/SubaccountApi.md#fetchsubaccount) | **GET** /subaccount/{code} | Fetch Subaccount
*SubaccountApi* | [**listSubaccounts**](docs/SubaccountApi.md#listsubaccounts) | **GET** /subaccount | List Subaccounts
*SubaccountApi* | [**updateSubaccount**](docs/SubaccountApi.md#updatesubaccount) | **PUT** /subaccount/{code} | Update Subaccount
*SubscriptionApi* | [**createSubscription**](docs/SubscriptionApi.md#createsubscription) | **POST** /subscription | Create Subscription
*SubscriptionApi* | [**disableSubscription**](docs/SubscriptionApi.md#disablesubscription) | **POST** /subscription/disable | Disable Subscription
*SubscriptionApi* | [**enableSubscription**](docs/SubscriptionApi.md#enablesubscription) | **POST** /subscription/enable | Enable Subscription
*SubscriptionApi* | [**fetchSubscription**](docs/SubscriptionApi.md#fetchsubscription) | **GET** /subscription/{code} | Fetch Subscription
*SubscriptionApi* | [**listSubscriptions**](docs/SubscriptionApi.md#listsubscriptions) | **GET** /subscription | List Subscriptions
*SubscriptionApi* | [**manageEmailSubscription**](docs/SubscriptionApi.md#manageemailsubscription) | **POST** /subscription/{code}/manage/email | Send Update Subscription Link
*SubscriptionApi* | [**manageLinkSubscription**](docs/SubscriptionApi.md#managelinksubscription) | **GET** /subscription/{code}/manage/link | Generate Update Subscription Link
*TerminalApi* | [**commissionTerminal**](docs/TerminalApi.md#commissionterminal) | **POST** /terminal/commission_device | Commission Terminal
*TerminalApi* | [**decommissionTerminal**](docs/TerminalApi.md#decommissionterminal) | **POST** /terminal/decommission_device | Decommission Terminal
*TerminalApi* | [**fetchEventStatusTerminal**](docs/TerminalApi.md#fetcheventstatusterminal) | **GET** /terminal/{terminal_id}/event/{event_id} | Fetch Event Status
*TerminalApi* | [**fetchTerminal**](docs/TerminalApi.md#fetchterminal) | **GET** /terminal/{terminal_id} | Fetch Terminal
*TerminalApi* | [**fetchTerminalStatusTerminal**](docs/TerminalApi.md#fetchterminalstatusterminal) | **GET** /terminal/{terminal_id}/presence | Fetch Terminal Status
*TerminalApi* | [**listTerminal**](docs/TerminalApi.md#listterminal) | **GET** /terminal | List Terminals
*TerminalApi* | [**sendEventTerminal**](docs/TerminalApi.md#sendeventterminal) | **POST** /terminal/{id}/event | Send Event
*TerminalApi* | [**updateTerminal**](docs/TerminalApi.md#updateterminal) | **PUT** /terminal/{terminal_id} | Update Terminal
*TransactionApi* | [**chargeAuthorization**](docs/TransactionApi.md#chargeauthorization) | **POST** /transaction/charge_authorization | Charge Authorization
*TransactionApi* | [**exportTransactions**](docs/TransactionApi.md#exporttransactions) | **GET** /transaction/export | Export Transactions
*TransactionApi* | [**fetchTransaction**](docs/TransactionApi.md#fetchtransaction) | **GET** /transaction/{id} | Fetch Transaction
*TransactionApi* | [**getTransactionTotals**](docs/TransactionApi.md#gettransactiontotals) | **GET** /transaction/totals | Transaction Totals
*TransactionApi* | [**initializeTransaction**](docs/TransactionApi.md#initializetransaction) | **POST** /transaction/initialize | Initialize Transaction
*TransactionApi* | [**listTransactions**](docs/TransactionApi.md#listtransactions) | **GET** /transaction | List Transactions
*TransactionApi* | [**partialDebitTransaction**](docs/TransactionApi.md#partialdebittransaction) | **POST** /transaction/partial_debit | Partial Debit
*TransactionApi* | [**verifyTransaction**](docs/TransactionApi.md#verifytransaction) | **GET** /transaction/verify/{reference} | Verify Transaction
*TransactionApi* | [**viewTransactionTimeline**](docs/TransactionApi.md#viewtransactiontimeline) | **GET** /transaction/timeline/{id} | Fetch Transaction Timeline
*TransferApi* | [**disableOtpFinalizeTransfer**](docs/TransferApi.md#disableotpfinalizetransfer) | **POST** /transfer/disable_otp_finalize | Finalize Disabling OTP for Transfers
*TransferApi* | [**disableOtpTransfer**](docs/TransferApi.md#disableotptransfer) | **POST** /transfer/disable_otp | Disable OTP for Transfers
*TransferApi* | [**enableOtpTransfer**](docs/TransferApi.md#enableotptransfer) | **POST** /transfer/enable_otp | Enable OTP requirement for Transfers
*TransferApi* | [**exportTransferTransfer**](docs/TransferApi.md#exporttransfertransfer) | **GET** /transfer/export | Export Transfers
*TransferApi* | [**fetchTransfer**](docs/TransferApi.md#fetchtransfer) | **GET** /transfer/{code} | Fetch Transfer
*TransferApi* | [**finalizeTransfer**](docs/TransferApi.md#finalizetransfer) | **POST** /transfer/finalize_transfer | Finalize Transfer
*TransferApi* | [**initiateBulkTransfer**](docs/TransferApi.md#initiatebulktransfer) | **POST** /transfer/bulk | Initiate Bulk Transfer
*TransferApi* | [**initiateTransfer**](docs/TransferApi.md#initiatetransfer) | **POST** /transfer | Initiate Transfer
*TransferApi* | [**listTransfers**](docs/TransferApi.md#listtransfers) | **GET** /transfer | List Transfers
*TransferApi* | [**resendOtpTransfer**](docs/TransferApi.md#resendotptransfer) | **POST** /transfer/resend_otp | Resend OTP for Transfer
*TransferApi* | [**verifyTransfer**](docs/TransferApi.md#verifytransfer) | **GET** /transfer/verify/{reference} | Verify Transfer
*TransferRecipientApi* | [**createBulkTransferRecipient**](docs/TransferRecipientApi.md#createbulktransferrecipient) | **POST** /transferrecipient/bulk | Bulk Create Transfer Recipient
*TransferRecipientApi* | [**createTransferRecipient**](docs/TransferRecipientApi.md#createtransferrecipient) | **POST** /transferrecipient | Create Transfer Recipient
*TransferRecipientApi* | [**deleteTransferrecipient**](docs/TransferRecipientApi.md#deletetransferrecipient) | **DELETE** /transferrecipient/{code} | Delete Transfer Recipient
*TransferRecipientApi* | [**fetchTransferrecipient**](docs/TransferRecipientApi.md#fetchtransferrecipient) | **GET** /transferrecipient/{code} | Fetch Transfer recipient
*TransferRecipientApi* | [**listTransferRecipients**](docs/TransferRecipientApi.md#listtransferrecipients) | **GET** /transferrecipient | List Transfer Recipients
*TransferRecipientApi* | [**updateTransferrecipient**](docs/TransferRecipientApi.md#updatetransferrecipient) | **PUT** /transferrecipient/{code} | Update Transfer Recipient
*VirtualTerminalApi* | [**addSplitCodeVirtualTerminal**](docs/VirtualTerminalApi.md#addsplitcodevirtualterminal) | **PUT** /virtual_terminal/{code}/split_code | Add Split Code to Virtual Terminal
*VirtualTerminalApi* | [**createVirtualTerminal**](docs/VirtualTerminalApi.md#createvirtualterminal) | **POST** /virtual_terminal | Create Virtual Terminal
*VirtualTerminalApi* | [**deactivateVirtualTerminal**](docs/VirtualTerminalApi.md#deactivatevirtualterminal) | **PUT** /virtual_terminal/{code}/deactivate | Deactivate Virtual Terminal
*VirtualTerminalApi* | [**deleteSplitCodeVirtualTerminal**](docs/VirtualTerminalApi.md#deletesplitcodevirtualterminal) | **DELETE** /virtual_terminal/{code}/split_code | Remove Split Code from Virtual Terminal
*VirtualTerminalApi* | [**destinationAssignVirtualTerminal**](docs/VirtualTerminalApi.md#destinationassignvirtualterminal) | **POST** /virtual_terminal/{code}/destination/assign | Assign Destination to Virtual Terminal
*VirtualTerminalApi* | [**destinationUnassignVirtualTerminal**](docs/VirtualTerminalApi.md#destinationunassignvirtualterminal) | **POST** /virtual_terminal/{code}/destination/unassign | Unassign Destination from Virtual Terminal
*VirtualTerminalApi* | [**fetchVirtualTerminal**](docs/VirtualTerminalApi.md#fetchvirtualterminal) | **GET** /virtual_terminal/{code} | Fetch Virtual Terminal
*VirtualTerminalApi* | [**listVirtualTerminal**](docs/VirtualTerminalApi.md#listvirtualterminal) | **GET** /virtual_terminal | List Virtual Terminals
*VirtualTerminalApi* | [**updateVirtualTerminal**](docs/VirtualTerminalApi.md#updatevirtualterminal) | **PUT** /virtual_terminal/{code} | Update Virtual Terminal


### Documentation For Models

 - [ApplePayCreateOkModel](docs/ApplePayCreateOkModel.md)
 - [ApplePayParam](docs/ApplePayParam.md)
 - [BalanceCheckResponse](docs/BalanceCheckResponse.md)
 - [BalanceCheckResponseArray](docs/BalanceCheckResponseArray.md)
 - [BalanceFetchLedgerResponse](docs/BalanceFetchLedgerResponse.md)
 - [BalanceFetchLedgerResponseArray](docs/BalanceFetchLedgerResponseArray.md)
 - [Bank](docs/Bank.md)
 - [BankValidateRequest](docs/BankValidateRequest.md)
 - [BulkChargeFetchBulkBatchChargesResponse](docs/BulkChargeFetchBulkBatchChargesResponse.md)
 - [BulkChargeFetchBulkBatchChargesResponseArray](docs/BulkChargeFetchBulkBatchChargesResponseArray.md)
 - [BulkChargeFetchBulkBatchChargesResponseArrayCustomer](docs/BulkChargeFetchBulkBatchChargesResponseArrayCustomer.md)
 - [BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata](docs/BulkChargeFetchBulkBatchChargesResponseArrayCustomerMetadata.md)
 - [BulkChargeFetchBulkBatchChargesResponseMeta](docs/BulkChargeFetchBulkBatchChargesResponseMeta.md)
 - [BulkChargeFetchResponse](docs/BulkChargeFetchResponse.md)
 - [BulkChargeInitiate](docs/BulkChargeInitiate.md)
 - [BulkChargeInitiateResponse](docs/BulkChargeInitiateResponse.md)
 - [BulkChargeInitiateResponseData](docs/BulkChargeInitiateResponseData.md)
 - [BulkChargeListResponse](docs/BulkChargeListResponse.md)
 - [BulkChargeListResponseArray](docs/BulkChargeListResponseArray.md)
 - [BulkChargeListResponseMeta](docs/BulkChargeListResponseMeta.md)
 - [BulkChargeListResponseMetaPerPage](docs/BulkChargeListResponseMetaPerPage.md)
 - [BulkChargePauseResponse](docs/BulkChargePauseResponse.md)
 - [BulkChargeResumeResponse](docs/BulkChargeResumeResponse.md)
 - [ChargeAuthorizationResponse](docs/ChargeAuthorizationResponse.md)
 - [ChargeAuthorizationResponseData](docs/ChargeAuthorizationResponseData.md)
 - [ChargeAuthorizationResponseDataAuthorization](docs/ChargeAuthorizationResponseDataAuthorization.md)
 - [ChargeAuthorizationResponseDataCustomer](docs/ChargeAuthorizationResponseDataCustomer.md)
 - [ChargeAuthorizationResponseDataCustomerMetadata](docs/ChargeAuthorizationResponseDataCustomerMetadata.md)
 - [ChargeAuthorizationResponseDataLog](docs/ChargeAuthorizationResponseDataLog.md)
 - [ChargeAuthorizationResponseDataLogHistoryInner](docs/ChargeAuthorizationResponseDataLogHistoryInner.md)
 - [ChargeCheckPendingResponse](docs/ChargeCheckPendingResponse.md)
 - [ChargeCreate](docs/ChargeCreate.md)
 - [ChargeCreateResponse](docs/ChargeCreateResponse.md)
 - [ChargeCreateResponseData](docs/ChargeCreateResponseData.md)
 - [ChargeSubmitAddress](docs/ChargeSubmitAddress.md)
 - [ChargeSubmitBirthday](docs/ChargeSubmitBirthday.md)
 - [ChargeSubmitBirthdayResponse](docs/ChargeSubmitBirthdayResponse.md)
 - [ChargeSubmitBirthdayResponseData](docs/ChargeSubmitBirthdayResponseData.md)
 - [ChargeSubmitOTP](docs/ChargeSubmitOTP.md)
 - [ChargeSubmitOtpResponse](docs/ChargeSubmitOtpResponse.md)
 - [ChargeSubmitPhone](docs/ChargeSubmitPhone.md)
 - [ChargeSubmitPhoneResponse](docs/ChargeSubmitPhoneResponse.md)
 - [ChargeSubmitPhoneResponseData](docs/ChargeSubmitPhoneResponseData.md)
 - [ChargeSubmitPin](docs/ChargeSubmitPin.md)
 - [ChargeSubmitPinResponse](docs/ChargeSubmitPinResponse.md)
 - [ChargeSubmitPinResponseData](docs/ChargeSubmitPinResponseData.md)
 - [ChargeSubmitPinResponseDataAuthorization](docs/ChargeSubmitPinResponseDataAuthorization.md)
 - [ChargeSubmitPinResponseDataCustomer](docs/ChargeSubmitPinResponseDataCustomer.md)
 - [ChargeSuccessData](docs/ChargeSuccessData.md)
 - [ChargeSuccessDataAuthorization](docs/ChargeSuccessDataAuthorization.md)
 - [ChargeSuccessDataCustomer](docs/ChargeSuccessDataCustomer.md)
 - [ChargeSuccessEvent](docs/ChargeSuccessEvent.md)
 - [ControlPanelFetchPaymentSessionTimeoutResponse](docs/ControlPanelFetchPaymentSessionTimeoutResponse.md)
 - [ControlPanelFetchPaymentSessionTimeoutResponseData](docs/ControlPanelFetchPaymentSessionTimeoutResponseData.md)
 - [ControlPanelUpdatePaymentSessionTimeoutResponse](docs/ControlPanelUpdatePaymentSessionTimeoutResponse.md)
 - [CreateChargeRequest](docs/CreateChargeRequest.md)
 - [Currency](docs/Currency.md)
 - [CustomerAuthorizationInitializeAccount](docs/CustomerAuthorizationInitializeAccount.md)
 - [CustomerAuthorizationInitializeAddress](docs/CustomerAuthorizationInitializeAddress.md)
 - [CustomerAuthorizationInitializeRequest](docs/CustomerAuthorizationInitializeRequest.md)
 - [CustomerAuthorizationInitializeResponse](docs/CustomerAuthorizationInitializeResponse.md)
 - [CustomerAuthorizationInitializeResponseData](docs/CustomerAuthorizationInitializeResponseData.md)
 - [CustomerAuthorizationVerifyResponse](docs/CustomerAuthorizationVerifyResponse.md)
 - [CustomerAuthorizationVerifyResponseCustomer](docs/CustomerAuthorizationVerifyResponseCustomer.md)
 - [CustomerAuthorizationVerifyResponseData](docs/CustomerAuthorizationVerifyResponseData.md)
 - [CustomerCreate](docs/CustomerCreate.md)
 - [CustomerCreateResponse](docs/CustomerCreateResponse.md)
 - [CustomerCreateResponseData](docs/CustomerCreateResponseData.md)
 - [CustomerDeactivateAuthorization](docs/CustomerDeactivateAuthorization.md)
 - [CustomerDeactivateAuthorizationResponse](docs/CustomerDeactivateAuthorizationResponse.md)
 - [CustomerDirectDebitActivationChargeRequest](docs/CustomerDirectDebitActivationChargeRequest.md)
 - [CustomerDirectDebitActivationChargeResponse](docs/CustomerDirectDebitActivationChargeResponse.md)
 - [CustomerFetchMandateAuthorizationsResponse](docs/CustomerFetchMandateAuthorizationsResponse.md)
 - [CustomerFetchMandateAuthorizationsResponseData](docs/CustomerFetchMandateAuthorizationsResponseData.md)
 - [CustomerFetchMandateAuthorizationsResponseDataCustomer](docs/CustomerFetchMandateAuthorizationsResponseDataCustomer.md)
 - [CustomerFetchMandateAuthorizationsResponseMeta](docs/CustomerFetchMandateAuthorizationsResponseMeta.md)
 - [CustomerFetchResponse](docs/CustomerFetchResponse.md)
 - [CustomerFetchResponseData](docs/CustomerFetchResponseData.md)
 - [CustomerInitializeDirectDebitAccount](docs/CustomerInitializeDirectDebitAccount.md)
 - [CustomerInitializeDirectDebitAddress](docs/CustomerInitializeDirectDebitAddress.md)
 - [CustomerInitializeDirectDebitRequest](docs/CustomerInitializeDirectDebitRequest.md)
 - [CustomerInitializeDirectDebitResponse](docs/CustomerInitializeDirectDebitResponse.md)
 - [CustomerInitializeDirectDebitResponseData](docs/CustomerInitializeDirectDebitResponseData.md)
 - [CustomerListResponse](docs/CustomerListResponse.md)
 - [CustomerListResponseArray](docs/CustomerListResponseArray.md)
 - [CustomerListResponseMeta](docs/CustomerListResponseMeta.md)
 - [CustomerRiskAction](docs/CustomerRiskAction.md)
 - [CustomerUpdate](docs/CustomerUpdate.md)
 - [CustomerUpdateResponse](docs/CustomerUpdateResponse.md)
 - [CustomerUpdateResponseData](docs/CustomerUpdateResponseData.md)
 - [CustomerValidate](docs/CustomerValidate.md)
 - [CustomerValidateResponse](docs/CustomerValidateResponse.md)
 - [CustomerWhitelistBlacklistResponse](docs/CustomerWhitelistBlacklistResponse.md)
 - [CustomerWhitelistBlacklistResponseData](docs/CustomerWhitelistBlacklistResponseData.md)
 - [DedicatedNubanCreateResponse](docs/DedicatedNubanCreateResponse.md)
 - [DedicatedNubanCreateResponseData](docs/DedicatedNubanCreateResponseData.md)
 - [DedicatedNubanCreateResponseDataAssignment](docs/DedicatedNubanCreateResponseDataAssignment.md)
 - [DedicatedNubanCreateResponseDataCustomer](docs/DedicatedNubanCreateResponseDataCustomer.md)
 - [DedicatedNubanDeactivateResponse](docs/DedicatedNubanDeactivateResponse.md)
 - [DedicatedNubanDeactivateResponseData](docs/DedicatedNubanDeactivateResponseData.md)
 - [DedicatedNubanDeactivateResponseDataAssignment](docs/DedicatedNubanDeactivateResponseDataAssignment.md)
 - [DedicatedNubanFetchResponse](docs/DedicatedNubanFetchResponse.md)
 - [DedicatedNubanFetchResponseData](docs/DedicatedNubanFetchResponseData.md)
 - [DedicatedNubanListResponse](docs/DedicatedNubanListResponse.md)
 - [DedicatedNubanListResponseArray](docs/DedicatedNubanListResponseArray.md)
 - [DedicatedNubanListResponseArrayBank](docs/DedicatedNubanListResponseArrayBank.md)
 - [DedicatedNubanListResponseArrayCustomer](docs/DedicatedNubanListResponseArrayCustomer.md)
 - [DedicatedNubanListResponseArraySplitConfig](docs/DedicatedNubanListResponseArraySplitConfig.md)
 - [DedicatedVirtualAccountAssign](docs/DedicatedVirtualAccountAssign.md)
 - [DedicatedVirtualAccountCreate](docs/DedicatedVirtualAccountCreate.md)
 - [DedicatedVirtualAccountRemoveSplit](docs/DedicatedVirtualAccountRemoveSplit.md)
 - [DedicatedVirtualAccountSplit](docs/DedicatedVirtualAccountSplit.md)
 - [DirectDebitActivationChargeRequest](docs/DirectDebitActivationChargeRequest.md)
 - [DirectDebitActivationChargeResponse](docs/DirectDebitActivationChargeResponse.md)
 - [DisputeAddEvidenceResponse](docs/DisputeAddEvidenceResponse.md)
 - [DisputeAddEvidenceResponseData](docs/DisputeAddEvidenceResponseData.md)
 - [DisputeEvidence](docs/DisputeEvidence.md)
 - [DisputeExportResponse](docs/DisputeExportResponse.md)
 - [DisputeFetchResponse](docs/DisputeFetchResponse.md)
 - [DisputeFetchResponseData](docs/DisputeFetchResponseData.md)
 - [DisputeFetchResponseDataTransaction](docs/DisputeFetchResponseDataTransaction.md)
 - [DisputeFetchResponseDataTransactionAuthorization](docs/DisputeFetchResponseDataTransactionAuthorization.md)
 - [DisputeHistoryArray](docs/DisputeHistoryArray.md)
 - [DisputeListResponse](docs/DisputeListResponse.md)
 - [DisputeListResponseArray](docs/DisputeListResponseArray.md)
 - [DisputeListResponseArrayTransaction](docs/DisputeListResponseArrayTransaction.md)
 - [DisputeListTransactionResponse](docs/DisputeListTransactionResponse.md)
 - [DisputeListTransactionResponseData](docs/DisputeListTransactionResponseData.md)
 - [DisputeListTransactionResponseDataTransaction](docs/DisputeListTransactionResponseDataTransaction.md)
 - [DisputeMessagesArray](docs/DisputeMessagesArray.md)
 - [DisputeResolve](docs/DisputeResolve.md)
 - [DisputeResolveResponse](docs/DisputeResolveResponse.md)
 - [DisputeResolveResponseData](docs/DisputeResolveResponseData.md)
 - [DisputeResolveResponseDataMessage](docs/DisputeResolveResponseDataMessage.md)
 - [DisputeUpdate](docs/DisputeUpdate.md)
 - [DisputeUpdateResponse](docs/DisputeUpdateResponse.md)
 - [DisputeUploadURLResponse](docs/DisputeUploadURLResponse.md)
 - [DisputeUploadURLResponseData](docs/DisputeUploadURLResponseData.md)
 - [EFT](docs/EFT.md)
 - [ErrorMeta](docs/ErrorMeta.md)
 - [ErrorRecordsArray](docs/ErrorRecordsArray.md)
 - [InvoicePaymentFailedEvent](docs/InvoicePaymentFailedEvent.md)
 - [InvoicePaymentFailedEventData](docs/InvoicePaymentFailedEventData.md)
 - [MetadataCustomFieldsArray](docs/MetadataCustomFieldsArray.md)
 - [MiscellaneousListBanksResponse](docs/MiscellaneousListBanksResponse.md)
 - [MiscellaneousListBanksResponseArray](docs/MiscellaneousListBanksResponseArray.md)
 - [MiscellaneousListCountriesResponse](docs/MiscellaneousListCountriesResponse.md)
 - [MiscellaneousListCountriesResponseArray](docs/MiscellaneousListCountriesResponseArray.md)
 - [MiscellaneousListCountriesResponseArrayRelationships](docs/MiscellaneousListCountriesResponseArrayRelationships.md)
 - [MiscellaneousListCountriesResponseArrayRelationshipsCurrency](docs/MiscellaneousListCountriesResponseArrayRelationshipsCurrency.md)
 - [MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrencies](docs/MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrencies.md)
 - [MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesNGN](docs/MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesNGN.md)
 - [MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesNGNBank](docs/MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesNGNBank.md)
 - [MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesNGNBankAccountNumberPattern](docs/MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesNGNBankAccountNumberPattern.md)
 - [MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesUSD](docs/MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesUSD.md)
 - [MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesUSDBank](docs/MiscellaneousListCountriesResponseArrayRelationshipsCurrencySupportedCurrenciesUSDBank.md)
 - [MiscellaneousListCountriesResponseArrayRelationshipsIntegrationFeature](docs/MiscellaneousListCountriesResponseArrayRelationshipsIntegrationFeature.md)
 - [MiscellaneousListCountriesResponseArrayRelationshipsIntegrationType](docs/MiscellaneousListCountriesResponseArrayRelationshipsIntegrationType.md)
 - [MiscellaneousListStatesResponse](docs/MiscellaneousListStatesResponse.md)
 - [MiscellaneousListStatesResponseArray](docs/MiscellaneousListStatesResponseArray.md)
 - [MobileMoney](docs/MobileMoney.md)
 - [ModelError](docs/ModelError.md)
 - [OrderCreate](docs/OrderCreate.md)
 - [OrderCreateResponse](docs/OrderCreateResponse.md)
 - [OrderCreateResponseData](docs/OrderCreateResponseData.md)
 - [OrderCreateResponseDataShipping](docs/OrderCreateResponseDataShipping.md)
 - [OrderCreateResponseDataShippingMethod](docs/OrderCreateResponseDataShippingMethod.md)
 - [OrderFetchProductResponse](docs/OrderFetchProductResponse.md)
 - [OrderFetchProductResponseArray](docs/OrderFetchProductResponseArray.md)
 - [OrderFetchProductResponseMeta](docs/OrderFetchProductResponseMeta.md)
 - [OrderFetchResponse](docs/OrderFetchResponse.md)
 - [OrderFetchResponseData](docs/OrderFetchResponseData.md)
 - [OrderItems](docs/OrderItems.md)
 - [OrderItemsArray](docs/OrderItemsArray.md)
 - [OrderListResponse](docs/OrderListResponse.md)
 - [OrderListResponseArray](docs/OrderListResponseArray.md)
 - [OrderListResponseMeta](docs/OrderListResponseMeta.md)
 - [OrderShipping](docs/OrderShipping.md)
 - [OrderValidateResponse](docs/OrderValidateResponse.md)
 - [OrderValidateResponseData](docs/OrderValidateResponseData.md)
 - [OrderValidateResponseDataIntegration](docs/OrderValidateResponseDataIntegration.md)
 - [PageAddProductsResponse](docs/PageAddProductsResponse.md)
 - [PageAddProductsResponseData](docs/PageAddProductsResponseData.md)
 - [PageCheckSlugAvailabilityResponse](docs/PageCheckSlugAvailabilityResponse.md)
 - [PageCreate](docs/PageCreate.md)
 - [PageCreateResponse](docs/PageCreateResponse.md)
 - [PageCreateResponseData](docs/PageCreateResponseData.md)
 - [PageFetchResponse](docs/PageFetchResponse.md)
 - [PageFetchResponseData](docs/PageFetchResponseData.md)
 - [PageListResponse](docs/PageListResponse.md)
 - [PageListResponseArray](docs/PageListResponseArray.md)
 - [PageProduct](docs/PageProduct.md)
 - [PageProductsArray](docs/PageProductsArray.md)
 - [PageUpdate](docs/PageUpdate.md)
 - [PageUpdateResponse](docs/PageUpdateResponse.md)
 - [PageUpdateResponseData](docs/PageUpdateResponseData.md)
 - [PaymentRequestArchiveResponse](docs/PaymentRequestArchiveResponse.md)
 - [PaymentRequestCreate](docs/PaymentRequestCreate.md)
 - [PaymentRequestCreateResponse](docs/PaymentRequestCreateResponse.md)
 - [PaymentRequestCreateResponseData](docs/PaymentRequestCreateResponseData.md)
 - [PaymentRequestFinalizeResponse](docs/PaymentRequestFinalizeResponse.md)
 - [PaymentRequestFinalizeResponseData](docs/PaymentRequestFinalizeResponseData.md)
 - [PaymentRequestFinalizeResponseDataDiscount](docs/PaymentRequestFinalizeResponseDataDiscount.md)
 - [PaymentRequestLineItemsArray](docs/PaymentRequestLineItemsArray.md)
 - [PaymentRequestListResponse](docs/PaymentRequestListResponse.md)
 - [PaymentRequestListResponseArray](docs/PaymentRequestListResponseArray.md)
 - [PaymentRequestNotificationsArray](docs/PaymentRequestNotificationsArray.md)
 - [PaymentRequestPendingArray](docs/PaymentRequestPendingArray.md)
 - [PaymentRequestSendNotificationResponse](docs/PaymentRequestSendNotificationResponse.md)
 - [PaymentRequestSuccessfulArray](docs/PaymentRequestSuccessfulArray.md)
 - [PaymentRequestTaxArray](docs/PaymentRequestTaxArray.md)
 - [PaymentRequestTotalArray](docs/PaymentRequestTotalArray.md)
 - [PaymentRequestTotalResponse](docs/PaymentRequestTotalResponse.md)
 - [PaymentRequestTotalResponseData](docs/PaymentRequestTotalResponseData.md)
 - [PaymentRequestUpdate](docs/PaymentRequestUpdate.md)
 - [PaymentRequestUpdateResponse](docs/PaymentRequestUpdateResponse.md)
 - [PaymentRequestUpdateResponseData](docs/PaymentRequestUpdateResponseData.md)
 - [PaymentRequestVerifyResponse](docs/PaymentRequestVerifyResponse.md)
 - [PaymentRequestVerifyResponseData](docs/PaymentRequestVerifyResponseData.md)
 - [PaymentRequestVerifyResponseDataIntegration](docs/PaymentRequestVerifyResponseDataIntegration.md)
 - [PaymentSession](docs/PaymentSession.md)
 - [PlanCreate](docs/PlanCreate.md)
 - [PlanCreateResponse](docs/PlanCreateResponse.md)
 - [PlanCreateResponseData](docs/PlanCreateResponseData.md)
 - [PlanFetchResponse](docs/PlanFetchResponse.md)
 - [PlanFetchResponseData](docs/PlanFetchResponseData.md)
 - [PlanListResponse](docs/PlanListResponse.md)
 - [PlanListResponseArray](docs/PlanListResponseArray.md)
 - [PlanUpdate](docs/PlanUpdate.md)
 - [PlanUpdateResponse](docs/PlanUpdateResponse.md)
 - [ProductCreate](docs/ProductCreate.md)
 - [ProductCreateResponse](docs/ProductCreateResponse.md)
 - [ProductCreateResponseData](docs/ProductCreateResponseData.md)
 - [ProductDeleteResponse](docs/ProductDeleteResponse.md)
 - [ProductFetchResponse](docs/ProductFetchResponse.md)
 - [ProductFetchResponseData](docs/ProductFetchResponseData.md)
 - [ProductListsResponse](docs/ProductListsResponse.md)
 - [ProductListsResponseArray](docs/ProductListsResponseArray.md)
 - [ProductListsResponseArrayMetadata](docs/ProductListsResponseArrayMetadata.md)
 - [ProductListsResponseArrayShippingFields](docs/ProductListsResponseArrayShippingFields.md)
 - [ProductListsResponseMeta](docs/ProductListsResponseMeta.md)
 - [ProductUpdate](docs/ProductUpdate.md)
 - [ProductUpdateResponse](docs/ProductUpdateResponse.md)
 - [ProductUpdateResponseData](docs/ProductUpdateResponseData.md)
 - [RefundCreate](docs/RefundCreate.md)
 - [RefundCreateResponse](docs/RefundCreateResponse.md)
 - [RefundCreateResponseData](docs/RefundCreateResponseData.md)
 - [RefundCreateResponseDataTransaction](docs/RefundCreateResponseDataTransaction.md)
 - [RefundCreateResponseDataTransactionAuthorization](docs/RefundCreateResponseDataTransactionAuthorization.md)
 - [RefundCreateResponseDataTransactionCustomer](docs/RefundCreateResponseDataTransactionCustomer.md)
 - [RefundCreateResponseDataTransactionSubaccount](docs/RefundCreateResponseDataTransactionSubaccount.md)
 - [RefundFetchResponse](docs/RefundFetchResponse.md)
 - [RefundFetchResponseData](docs/RefundFetchResponseData.md)
 - [RefundFetchResponseDataCustomer](docs/RefundFetchResponseDataCustomer.md)
 - [RefundListResponse](docs/RefundListResponse.md)
 - [RefundListResponseArray](docs/RefundListResponseArray.md)
 - [RefundListResponseMeta](docs/RefundListResponseMeta.md)
 - [RefundRetry](docs/RefundRetry.md)
 - [RefundRetryAccountDetails](docs/RefundRetryAccountDetails.md)
 - [RefundRetryResponse](docs/RefundRetryResponse.md)
 - [RefundRetryResponseData](docs/RefundRetryResponseData.md)
 - [Response](docs/Response.md)
 - [SplitAddUpdateSubaccountResponse](docs/SplitAddUpdateSubaccountResponse.md)
 - [SplitCreate](docs/SplitCreate.md)
 - [SplitCreateResponse](docs/SplitCreateResponse.md)
 - [SplitCreateResponseData](docs/SplitCreateResponseData.md)
 - [SplitFetchResponse](docs/SplitFetchResponse.md)
 - [SplitFetchResponseData](docs/SplitFetchResponseData.md)
 - [SplitListResponse](docs/SplitListResponse.md)
 - [SplitListResponseArray](docs/SplitListResponseArray.md)
 - [SplitRemoveSubaccountResponse](docs/SplitRemoveSubaccountResponse.md)
 - [SplitSubaccounts](docs/SplitSubaccounts.md)
 - [SplitSubaccountsArray](docs/SplitSubaccountsArray.md)
 - [SplitSubaccountsArraySubaccount](docs/SplitSubaccountsArraySubaccount.md)
 - [SplitUpdate](docs/SplitUpdate.md)
 - [SplitUpdateResponse](docs/SplitUpdateResponse.md)
 - [StorefrontAddProducts](docs/StorefrontAddProducts.md)
 - [StorefrontContactsArray](docs/StorefrontContactsArray.md)
 - [StorefrontCreate](docs/StorefrontCreate.md)
 - [StorefrontCreateResponse](docs/StorefrontCreateResponse.md)
 - [StorefrontCreateResponseData](docs/StorefrontCreateResponseData.md)
 - [StorefrontDeleteResponse](docs/StorefrontDeleteResponse.md)
 - [StorefrontFetchResponse](docs/StorefrontFetchResponse.md)
 - [StorefrontFetchResponseMeta](docs/StorefrontFetchResponseMeta.md)
 - [StorefrontListResponse](docs/StorefrontListResponse.md)
 - [StorefrontListResponseArray](docs/StorefrontListResponseArray.md)
 - [StorefrontUpdate](docs/StorefrontUpdate.md)
 - [StorefrontUpdateResponse](docs/StorefrontUpdateResponse.md)
 - [SubaccountCreate](docs/SubaccountCreate.md)
 - [SubaccountCreateResponse](docs/SubaccountCreateResponse.md)
 - [SubaccountCreateResponseData](docs/SubaccountCreateResponseData.md)
 - [SubaccountFetchResponse](docs/SubaccountFetchResponse.md)
 - [SubaccountFetchResponseData](docs/SubaccountFetchResponseData.md)
 - [SubaccountListResponse](docs/SubaccountListResponse.md)
 - [SubaccountListResponseArray](docs/SubaccountListResponseArray.md)
 - [SubaccountListResponseMeta](docs/SubaccountListResponseMeta.md)
 - [SubaccountUpdate](docs/SubaccountUpdate.md)
 - [SubaccountUpdateResponse](docs/SubaccountUpdateResponse.md)
 - [SubaccountUpdateResponseData](docs/SubaccountUpdateResponseData.md)
 - [SubscriptionCreate](docs/SubscriptionCreate.md)
 - [SubscriptionCreateEvent](docs/SubscriptionCreateEvent.md)
 - [SubscriptionCreateEventData](docs/SubscriptionCreateEventData.md)
 - [SubscriptionCreateResponse](docs/SubscriptionCreateResponse.md)
 - [SubscriptionCreateResponseData](docs/SubscriptionCreateResponseData.md)
 - [SubscriptionDisableEvent](docs/SubscriptionDisableEvent.md)
 - [SubscriptionDisableEventData](docs/SubscriptionDisableEventData.md)
 - [SubscriptionDisableResponse](docs/SubscriptionDisableResponse.md)
 - [SubscriptionFetchResponse](docs/SubscriptionFetchResponse.md)
 - [SubscriptionFetchResponseData](docs/SubscriptionFetchResponseData.md)
 - [SubscriptionFetchResponseDataPlan](docs/SubscriptionFetchResponseDataPlan.md)
 - [SubscriptionListResponse](docs/SubscriptionListResponse.md)
 - [SubscriptionListResponseArray](docs/SubscriptionListResponseArray.md)
 - [SubscriptionListResponseArrayAuthorization](docs/SubscriptionListResponseArrayAuthorization.md)
 - [SubscriptionListResponseArrayCustomer](docs/SubscriptionListResponseArrayCustomer.md)
 - [SubscriptionListResponseArrayPlan](docs/SubscriptionListResponseArrayPlan.md)
 - [SubscriptionToggle](docs/SubscriptionToggle.md)
 - [TerminalActivationToggle](docs/TerminalActivationToggle.md)
 - [TerminalCommissionDeviceResponse](docs/TerminalCommissionDeviceResponse.md)
 - [TerminalDecommissionDeviceResponse](docs/TerminalDecommissionDeviceResponse.md)
 - [TerminalGetResponse](docs/TerminalGetResponse.md)
 - [TerminalGetResponseData](docs/TerminalGetResponseData.md)
 - [TerminalGetStatusResponse](docs/TerminalGetStatusResponse.md)
 - [TerminalGetStatusResponseData](docs/TerminalGetStatusResponseData.md)
 - [TerminalListsResponse](docs/TerminalListsResponse.md)
 - [TerminalListsResponseArray](docs/TerminalListsResponseArray.md)
 - [TerminalListsResponseMeta](docs/TerminalListsResponseMeta.md)
 - [TerminalSendEvent](docs/TerminalSendEvent.md)
 - [TerminalSendEventData](docs/TerminalSendEventData.md)
 - [TerminalUpate](docs/TerminalUpate.md)
 - [TerminalUpdateResponse](docs/TerminalUpdateResponse.md)
 - [TransactionChargeAuthorization](docs/TransactionChargeAuthorization.md)
 - [TransactionExportResponse](docs/TransactionExportResponse.md)
 - [TransactionExportResponseData](docs/TransactionExportResponseData.md)
 - [TransactionFetchResponse](docs/TransactionFetchResponse.md)
 - [TransactionFetchResponseData](docs/TransactionFetchResponseData.md)
 - [TransactionFetchResponseDataAuthorization](docs/TransactionFetchResponseDataAuthorization.md)
 - [TransactionFetchResponseDataCustomer](docs/TransactionFetchResponseDataCustomer.md)
 - [TransactionFetchResponseDataMetadata](docs/TransactionFetchResponseDataMetadata.md)
 - [TransactionFetchResponseDataSource](docs/TransactionFetchResponseDataSource.md)
 - [TransactionInitialize](docs/TransactionInitialize.md)
 - [TransactionInitializeBadRequestModel](docs/TransactionInitializeBadRequestModel.md)
 - [TransactionInitializeResponse](docs/TransactionInitializeResponse.md)
 - [TransactionInitializeResponseData](docs/TransactionInitializeResponseData.md)
 - [TransactionListResponse](docs/TransactionListResponse.md)
 - [TransactionListResponseArray](docs/TransactionListResponseArray.md)
 - [TransactionListResponseArrayAuthorization](docs/TransactionListResponseArrayAuthorization.md)
 - [TransactionListResponseArrayCustomer](docs/TransactionListResponseArrayCustomer.md)
 - [TransactionListResponseArraySource](docs/TransactionListResponseArraySource.md)
 - [TransactionListResponseMeta](docs/TransactionListResponseMeta.md)
 - [TransactionListResponseMetaPerPage](docs/TransactionListResponseMetaPerPage.md)
 - [TransactionPartialDebit](docs/TransactionPartialDebit.md)
 - [TransactionPartialDebitResponse](docs/TransactionPartialDebitResponse.md)
 - [TransactionPartialDebitResponseData](docs/TransactionPartialDebitResponseData.md)
 - [TransactionPartialDebitResponseDataAuthorization](docs/TransactionPartialDebitResponseDataAuthorization.md)
 - [TransactionPartialDebitResponseDataCustomer](docs/TransactionPartialDebitResponseDataCustomer.md)
 - [TransactionPendingTransfersByCurrencyArray](docs/TransactionPendingTransfersByCurrencyArray.md)
 - [TransactionTimelineResponse](docs/TransactionTimelineResponse.md)
 - [TransactionTotalVolumeByCurrencyArray](docs/TransactionTotalVolumeByCurrencyArray.md)
 - [TransactionTotalsResponse](docs/TransactionTotalsResponse.md)
 - [TransactionTotalsResponseData](docs/TransactionTotalsResponseData.md)
 - [TransferBase](docs/TransferBase.md)
 - [TransferBulk](docs/TransferBulk.md)
 - [TransferBulkResponse](docs/TransferBulkResponse.md)
 - [TransferBulkResponseArray](docs/TransferBulkResponseArray.md)
 - [TransferCreateResponse](docs/TransferCreateResponse.md)
 - [TransferCreateResponseData](docs/TransferCreateResponseData.md)
 - [TransferDisablesOtpResponse](docs/TransferDisablesOtpResponse.md)
 - [TransferEnablesOtpResponse](docs/TransferEnablesOtpResponse.md)
 - [TransferFailedEvent](docs/TransferFailedEvent.md)
 - [TransferFeesBreakdownArray](docs/TransferFeesBreakdownArray.md)
 - [TransferFetchResponse](docs/TransferFetchResponse.md)
 - [TransferFetchResponseData](docs/TransferFetchResponseData.md)
 - [TransferFinalize](docs/TransferFinalize.md)
 - [TransferFinalizeDisableOTP](docs/TransferFinalizeDisableOTP.md)
 - [TransferFinalizeDisablesOtpResponse](docs/TransferFinalizeDisablesOtpResponse.md)
 - [TransferInitiate](docs/TransferInitiate.md)
 - [TransferListResponse](docs/TransferListResponse.md)
 - [TransferListResponseArray](docs/TransferListResponseArray.md)
 - [TransferListResponseArrayRecipient](docs/TransferListResponseArrayRecipient.md)
 - [TransferListResponseArrayRecipientDetails](docs/TransferListResponseArrayRecipientDetails.md)
 - [TransferListResponseArraySession](docs/TransferListResponseArraySession.md)
 - [TransferRecipientBulk](docs/TransferRecipientBulk.md)
 - [TransferRecipientBulkCreateResponse](docs/TransferRecipientBulkCreateResponse.md)
 - [TransferRecipientBulkCreateResponseData](docs/TransferRecipientBulkCreateResponseData.md)
 - [TransferRecipientCreate](docs/TransferRecipientCreate.md)
 - [TransferRecipientCreateResponse](docs/TransferRecipientCreateResponse.md)
 - [TransferRecipientCreateResponseData](docs/TransferRecipientCreateResponseData.md)
 - [TransferRecipientDeleteResponse](docs/TransferRecipientDeleteResponse.md)
 - [TransferRecipientErrorsArray](docs/TransferRecipientErrorsArray.md)
 - [TransferRecipientFetchResponse](docs/TransferRecipientFetchResponse.md)
 - [TransferRecipientFetchResponseData](docs/TransferRecipientFetchResponseData.md)
 - [TransferRecipientFetchResponseDataDetails](docs/TransferRecipientFetchResponseDataDetails.md)
 - [TransferRecipientListResponse](docs/TransferRecipientListResponse.md)
 - [TransferRecipientListResponseArray](docs/TransferRecipientListResponseArray.md)
 - [TransferRecipientListResponseArrayDetails](docs/TransferRecipientListResponseArrayDetails.md)
 - [TransferRecipientUpdate](docs/TransferRecipientUpdate.md)
 - [TransferRecipientUpdateResponse](docs/TransferRecipientUpdateResponse.md)
 - [TransferResendOTP](docs/TransferResendOTP.md)
 - [TransferResendsOtpResponse](docs/TransferResendsOtpResponse.md)
 - [TransferReversedEvent](docs/TransferReversedEvent.md)
 - [TransferSuccessData](docs/TransferSuccessData.md)
 - [TransferSuccessDataRecipient](docs/TransferSuccessDataRecipient.md)
 - [TransferSuccessDataRecipientDetails](docs/TransferSuccessDataRecipientDetails.md)
 - [TransferSuccessEvent](docs/TransferSuccessEvent.md)
 - [TransferVerifyResponse](docs/TransferVerifyResponse.md)
 - [TransferVerifyResponseData](docs/TransferVerifyResponseData.md)
 - [TransferVerifyResponseDataRecipient](docs/TransferVerifyResponseDataRecipient.md)
 - [TransferVerifyResponseDataRecipientDetails](docs/TransferVerifyResponseDataRecipientDetails.md)
 - [USSD](docs/USSD.md)
 - [VerificationResolveAccountNumberResponse](docs/VerificationResolveAccountNumberResponse.md)
 - [VerificationResolveAccountNumberResponseData](docs/VerificationResolveAccountNumberResponseData.md)
 - [VerificationResolveCardBINResponse](docs/VerificationResolveCardBINResponse.md)
 - [VerificationResolveCardBINResponseData](docs/VerificationResolveCardBINResponseData.md)
 - [VerificationValidateAccountResponse](docs/VerificationValidateAccountResponse.md)
 - [VerificationValidateAccountResponseData](docs/VerificationValidateAccountResponseData.md)
 - [VerifyResponse](docs/VerifyResponse.md)
 - [VerifyResponseData](docs/VerifyResponseData.md)
 - [VerifyResponseDataAuthorization](docs/VerifyResponseDataAuthorization.md)
 - [VerifyResponseDataCustomer](docs/VerifyResponseDataCustomer.md)
 - [VerifyResponseDataLog](docs/VerifyResponseDataLog.md)
 - [VerifyResponseDataLogHistoryInner](docs/VerifyResponseDataLogHistoryInner.md)
 - [VerifyResponseDataMetadata](docs/VerifyResponseDataMetadata.md)
 - [VerifyResponseDataPlanObject](docs/VerifyResponseDataPlanObject.md)
 - [VirtualTerminalAddSplitCode](docs/VirtualTerminalAddSplitCode.md)
 - [VirtualTerminalAddSplitCodeResponse](docs/VirtualTerminalAddSplitCodeResponse.md)
 - [VirtualTerminalAddSplitCodeResponseData](docs/VirtualTerminalAddSplitCodeResponseData.md)
 - [VirtualTerminalCreate](docs/VirtualTerminalCreate.md)
 - [VirtualTerminalCreateDestinationsInner](docs/VirtualTerminalCreateDestinationsInner.md)
 - [VirtualTerminalCreateResponse](docs/VirtualTerminalCreateResponse.md)
 - [VirtualTerminalCreateResponseData](docs/VirtualTerminalCreateResponseData.md)
 - [VirtualTerminalCreateResponseDataDestinationsInner](docs/VirtualTerminalCreateResponseDataDestinationsInner.md)
 - [VirtualTerminalDeactivateResponse](docs/VirtualTerminalDeactivateResponse.md)
 - [VirtualTerminalDeleteSplitCode](docs/VirtualTerminalDeleteSplitCode.md)
 - [VirtualTerminalDeleteSplitCodeResponse](docs/VirtualTerminalDeleteSplitCodeResponse.md)
 - [VirtualTerminalDestinationAssign](docs/VirtualTerminalDestinationAssign.md)
 - [VirtualTerminalDestinationAssignResponse](docs/VirtualTerminalDestinationAssignResponse.md)
 - [VirtualTerminalDestinationAssignResponseDataInner](docs/VirtualTerminalDestinationAssignResponseDataInner.md)
 - [VirtualTerminalDestinationUnassign](docs/VirtualTerminalDestinationUnassign.md)
 - [VirtualTerminalDestinationUnassignResponse](docs/VirtualTerminalDestinationUnassignResponse.md)
 - [VirtualTerminalFetchResponse](docs/VirtualTerminalFetchResponse.md)
 - [VirtualTerminalFetchResponseData](docs/VirtualTerminalFetchResponseData.md)
 - [VirtualTerminalFetchResponseDataDestinationsInner](docs/VirtualTerminalFetchResponseDataDestinationsInner.md)
 - [VirtualTerminalListResponse](docs/VirtualTerminalListResponse.md)
 - [VirtualTerminalListResponseArray](docs/VirtualTerminalListResponseArray.md)
 - [VirtualTerminalListResponseMeta](docs/VirtualTerminalListResponseMeta.md)
 - [VirtualTerminalUpdate](docs/VirtualTerminalUpdate.md)
 - [VirtualTerminalUpdateResponse](docs/VirtualTerminalUpdateResponse.md)
 - [WebhookEvent](docs/WebhookEvent.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization


Authentication schemes defined for the API:
<a id="bearerAuth"></a>
### bearerAuth

- **Type**: Bearer authentication (JWT / API Key)

