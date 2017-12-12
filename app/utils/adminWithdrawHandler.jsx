class AdminWithdrawHandler {

  constructor () {
    this.withdraw = {
      currency: undefined,
      amount: undefined,
      withdrawAmount: undefined
    }
  }

  reset () {
    this.withdraw.currency = undefined
    this.withdraw.amount = undefined
    this.withdraw.withdrawAmount = undefined
  }

  checkSet () {
    if ((this.withdraw.currency === undefined) ||
        (this.withdraw.amount === undefined) ||
        (this.withdraw.withdrawAmount === undefined)) {
      return false
    } else {
      return true
    }
  }

  setCurrency (_currency) {
      this.withdraw.currency = _currency
  }

  setAmount (_amount) {
    this.withdraw.amount = _amount
  }

  setWithdrawAmount (_amount) {
    if (_amount <= this.withdraw.amount ) {
      this.withdraw.withdrawAmount = _amount
    }
  }


  getCurrency () {
    return this.withdraw.currency
  }

  getAmount () {
    return this.withdraw.amount
  }

  getWithdrawAmount () {
    return this.withdraw.withdrawAmount
  }
}

export default AdminWithdrawHandler
