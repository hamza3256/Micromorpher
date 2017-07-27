class AdminExchangeHandler {

  constructor () {
    this.exchange = {
      currency: undefined,
      rate: undefined
    }
  }

  reset () {
    this.exchange.currency = undefined
    this.exchange.rate = undefined
  }

  checkSet () {
    if ((this.exchange.currency === undefined) ||
        (this.exchange.rate === undefined)) {
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

  getCurrency () {
    return this.exchange.currency
  }

  getRate () {
    return this.exchange.rate
  }
}

export default AdminExchangeHandler
