class AppStrings {

  static heading = 'Micromorpher (alpha)'
  static home = 'Home'
  static about = 'About'
  static overview = 'Overview'
  static help = 'Help'
  static future = 'Future Work'
  static admin = 'Admin'
  static exchange = 'Exchange'
  static events = 'Events'
}

class HomeStrings {

  static heading = 'Home'

  static info = '**Micromorpher** is a prototype distributed application (dApp) that demonstrates the possibility of converting small amounts of £s (or other FIAT currencies) into Ether, using blockchain smart contracts.'
}

class AboutStrings {

  static heading = 'About Micromorpher'

  static info = '**Micromorpher** version 0.0.2.<br /><br />Created by [Steven Huckle](https://glowkeeper.github.io/) at the [University of Sussex](https://www.sussex.ac.uk/). '

}

class OverviewStrings {

  static heading = 'Overview of Micromorpher'

  static info = 'The original test **Micromorpher** application was the result of the academic paper, [Towards a post-cash society: An application to convert fiat money into a cryptocurrency](http://dx.doi.org/10.5210/fm.v22i3.7410), by Steven Huckle, Martin White and Rituparna Bhattacharya, of the [University of Sussex Informatics Department](http://www.sussex.ac.uk/informatics/).'

}

class HelpStrings {

  static heading = 'Help'

  static info = ''

}

class FutureStrings {

  static heading = 'Future Work'

  static info = '1) Integrate with PayPal<br /> 2) Implement anti-money laundering (AML) and know your customer (KYC) regulations (see [bitcoin forum](https://bitcointalk.org/index.php?topic=454795.0) on AML/KYC)<br />3) Get exchange rates via a public api, such as [coinbase](https://developers.coinbase.com/api/v2)<br />4) Do a live exchange!<br />5) Lock certain functionality based on account type - i.e. only show admin menu if the account type is an admin<br />6) See [open issues](https://github.com/glowkeeper/Micromorpher/issues)<br />7) All other ideas welcome ;)'
}

class ExchangerAppStrings {

  static heading = 'Micromorpher Exchange'
  static home = 'Exchanger Home'
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

  static heading = 'Micromorpher Admin'
  static home = 'Admin Home'
  static admin = 'Admin Account'
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

export {AppStrings, HomeStrings, AboutStrings, OverviewStrings, HelpStrings, FutureStrings, ExchangerAppStrings, ExchangerHomeStrings, ExchangerAccountStrings, ExchangerStrings, AdminAppStrings, AdminHomeStrings, AdminStrings, AdminExchangeStrings, AdminWithdrawStrings, AdminEventViewerStrings, CountryCodes}
