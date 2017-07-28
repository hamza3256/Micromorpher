class ExchangeHandler {

  constructor () {
    this.exchange = {
      currency: undefined,
      rate: undefined,
      amount: undefined,
      etherAmount: undefined,
      orderTime: undefined,
      account: undefined
    }
  }

  reset () {
    this.exchange.currency = undefined
    this.exchange.rate = undefined
    this.exchange.amount = undefined
    this.exchange.etherAmount = undefined
    this.exchange.orderTime = undefined
    this.exchange.account = undefined
  }

  checkSet () {
    if ((this.exchange.currency === undefined) ||
        (this.exchange.rate === undefined) ||
        (this.exchange.amount === undefined) ||
        (this.exchange.etherAmount === undefined) ||
        (this.exchange.orderTime === undefined) ||
        (this.exchange.account === undefined)) {
      return false
    } else {
      return true
    }
  }

  setCurrency (_currency) {
      this.exchange.currency = _currency
  }

  setRate (_rate) {
    this.exchange.rate = _rate
  }

  setAmount (_amount) {
    this.exchange.amount = _amount
  }

  setEtherAmount (_amount) {
    this.exchange.etherAmount = _amount
  }

  setOrderTime (_time) {
    this.exchange.orderTime = _time
  }

  setAccount (_account) {
    this.exchange.account = _account
  }

  getCurrency () {
    return this.exchange.currency
  }

  getRate () {
    return this.exchange.rate
  }

  getAmount () {
    return this.exchange.amount
  }

  getEtherAmount () {
    return this.exchange.etherAmount
  }

  getOrderTime () {
    return this.exchange.orderTime
  }

  getAccount () {
    return this.exchange.account
  }
}

export default ExchangeHandler
