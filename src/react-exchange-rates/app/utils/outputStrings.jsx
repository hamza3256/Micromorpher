class AppStrings {

  static heading = 'Currency Exchange Administrator'
  static admin = 'Administrator Account'
  static exchange= 'Set Exchange Rates'
  static withdraw = 'Withdraw Deposits'
  static events = 'Events'
}

class HomeStrings {

  static info = 'Use this application to set Ether exchange rates.'

}

class ExchangeStrings {

  static info = 'Use this form to set Ether exchange rates for different currencies.'
  static exchangePlaceHolder = 'currency'
  static exchangeLabel = 'Currency: '
  static ratePlaceHolder = 'rate'
  static rateLabel = 'Exchange Rate (Amount of Selected Currency to Ether): '
  static rateSubmitLabel = 'Set Exchange Rate:'
  static buttonLabel = 'Set Rate!'
  static submittedResultLabel = 'Exchange Rate Result: '
}

class WithdrawStrings {

  static info = 'Use this form to withdraw given currency amount.'
  static currencyPlaceHolder = 'currency'
  static currencyLabel = 'Deposited Currency: '
  static amountLabel = 'Deposited Amount: '
  static withdrawAmountPlaceholder = 'amount'
  static withdrawAmountLabel = 'Amount of Selected Currency to Withdraw (e.g 10.99 for £10.99): '
  static buttonLabel = 'Confirm!'
  static withdrawSubmitLabel = 'Confirm Withdraw: '
  static submittedResultLabel = 'Withdraw Result: '
}

class EventViewerStrings {

  static heading = 'Event Viewer'
  static info = 'Exchanger events will appear here.'
}


export {AppStrings, HomeStrings, ExchangeStrings, WithdrawStrings, EventViewerStrings}
