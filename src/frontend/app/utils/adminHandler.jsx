class AdminHandler {

constructor () {
    this.admin = {
      funds: undefined,
      newFunds: undefined
    }
  }

  reset () {
    this.admin.funds = undefined
    this.admin.newFunds = undefined
  }

  checkSet () {
    if ((this.admin.funds === undefined) ||
        (this.admin.newFunds === undefined)) {
      return false
    } else {
      return true
    }
  }

  setFunds (_funds) {
    this.admin.funds = _funds
  }

  setNewFunds (_funds) {
    if (_funds <= this.admin.funds ) {
      this.admin.newFunds = _funds
    }
  }

  getFunds () {
    return this.admin.funds
  }

  getNewFunds () {
    return this.admin.newFunds
  }
}

export default AdminHandler
