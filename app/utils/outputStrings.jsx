class AppStrings {

  static heading = 'Micromorpher (alpha)'
  static home = 'Home'
  static about = 'About'
  static overview = 'Overview'
  static help = 'Help'
  static admin = 'Admin'
  static exchange = 'Exchange'
  static events = 'Events'
}

class HomeStrings {

  static heading = 'Home'

  static info = 'Use this application to convert FIAT money into Ether'

}

class AboutStrings {

  static heading = 'About Micromorpher'

  static info = ''

}

class OverviewStrings {

  static heading = 'Overview of Micromorpher'

  static info = ''

}

class HelpStrings {

  static heading = 'Help'

  static info = ''

}

class ExchangerAppStrings {

  static heading = 'Currency Exchanger'
  static home = 'Home'
  static account = 'Account'
  static exchange= 'Exchange Currency'
}

class ExchangerHomeStrings {

  static info = 'Digitise your currencies.'
}

class ExchangerAccountStrings {

  static info = 'Account information.'

  static accountLabel = 'Account: '
  static accountFundsLabel = 'Ether: '
}

class ExchangerStrings {

  static info = 'Use this form to exchange currencies for Ether.'
  static exchangeCurrencyLabel = 'Exchange Currency: '
  static exchangeCurrencyPlaceholder = 'currency'
  static rateLabel = 'Exchange Rate (Amount of Selected Currency to Ether): '
  static amountPlaceholder =  'amount'
  static amountLabel =  'Amount of Selected Currency to Exchange (e.g 10.99 for £10.99): '

  static orderButtonLabel = 'Place Order!'
  static placeOrderLabel = 'Place Order: '
  static orderPlaced = 'Order Placed with transaction ID: '
  static etherLabel = 'Amount of Ether: '

  static confirmOrderButtonLabel = 'Confirm Order!'
  static confirmPlaceOrderLabel = 'Confirm Order: '

  static orderStatusLabel = 'Order State: '

}

class AdminAppStrings {

  static heading = 'Currency Exchange Administrator'
  static home = 'Home'
  static admin = 'Administrator Account'
  static exchange= 'Set Exchange Rates'
  static withdraw = 'Withdraw Deposits'
  static events = 'Events'
}

class AdminHomeStrings {

  static info = 'Administrator interface for the Currency Exchange application.'

}

class AdminStrings {

  static info = 'Use this form to fund the contract.'
  static adminAccountLabel = 'Admin Account: '
  static adminFundsLabel = 'Admin Account Funds (Ether): '
  static contractFundsLabel = 'Contract Account Funds (Ether): '
  static fundContractPlaceholder = 'amount'
  static fundContractLabel = 'Amount of Ether to Send to Contract: '
  static fundSubmitLabel = 'Send Ether to Contract: '
  static buttonLabel = 'Fund Contract!'
}


class AdminExchangeStrings {

  static info = 'Use this form to set Ether exchange rates for different currencies.'
  static exchangePlaceHolder = 'currency'
  static exchangeLabel = 'Currency: '
  static ratePlaceHolder = 'rate'
  static rateLabel = 'Exchange Rate (Amount of Selected Currency to Ether): '
  static rateSubmitLabel = 'Set Exchange Rate:'
  static buttonLabel = 'Set Rate!'
}

class AdminWithdrawStrings {

  static info = 'Use this form to withdraw given currency amount.'
  static currencyPlaceHolder = 'currency'
  static currencyLabel = 'Deposited Currency: '
  static amountLabel = 'Deposited Amount: '
  static withdrawAmountPlaceholder = 'amount'
  static withdrawAmountLabel = 'Amount of Selected Currency to Withdraw (e.g 10.99 for £10.99): '
  static buttonLabel = 'Confirm!'
  static withdrawSubmitLabel = 'Confirm Withdraw: '
}

class AdminEventViewerStrings {

  static heading = 'Event Viewer'
  static info = 'Exchanger events will appear here.'
}

class CountryCodes {

  static codes = ['GBP','USD','EUR','JPY','CHF','AED','AFN','ALL','AMD','ANG','AOA','ARS','AUD','AWG','AZN','BAM','BBD','BDT','BGN','BHD','BIF','BMD','BND','BOB','BRL','BSD','BTN','BWP','BYN','BZD','CAD','CDF','CLP','CNY','COP','CRC','CUC','CUP','CVE','CZK','DJF','DKK','DOP','DZD','EGP','ERN','ETB','FJD','FKP','GEL','GGP','GHS','GIP','GMD','GNF','GTQ','GYD','HKD','HNL','HRK','HTG','HUF','IDR','ILS','IMP','INR','IQD','IRR','ISK','JEP','JMD','JOD','KES','KGS','KHR','KMF','KPW','KRW','KWD','KYD','KZT','LAK','LBP','LKR','LRD','LSL','LYD','MAD','MDL','MGA','MKD','MMK','MNT','MOP','MRO','MUR','MVR','MWK','MXN','MYR','MZN','NAD','NGN','NIO','NOK','NPR','NZD','OMR','PAB','PEN','PGK','PHP','PKR','PLN','PYG','QAR','RON','RSD','RUB','RWF','SAR','SBD','SCR','SDG','SEK','SGD','SHP','SLL','SOS','SPL','SRD','STD','SVC','SYP','SZL','THB','TJS','TMT','TND','TOP','TRY','TTD','TVD','TWD','TZS','UAH','UGX','UYU','UZS','VEF','VND','VUV','WST','XAF','XCD','XDR','XOF','XPF','YER','ZAR','ZMW','ZWD']

}

export {ExchangerAppStrings, ExchangerHomeStrings, ExchangerAccountStrings, ExchangerStrings, AdminAppStrings, AdminHomeStrings, AdminStrings, AdminExchangeStrings, AdminWithdrawStrings, AdminEventViewerStrings, CountryCodes}
