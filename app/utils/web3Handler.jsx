import Web3 from 'web3'

class Web3Handler {

  /*
  let ethereum = (window as any).ethereum
  let web3 = (window as any).web3

  if (ethereum) {
    //console.log('New MetaMask!')
    web3 = new Web3(ethereum)
    blockchainProvider = new ethers.providers.Web3Provider(web3.currentProvider)
    await ethereum.enable()
  } else if (typeof web3 !== 'undefined') {
    //console.log('In legacy web3 provider')
    blockchainProvider = new ethers.providers.Web3Provider(web3.currentProvider)
  } else {
    const host = Blockchain.host
    const port = Blockchain.port
    const provider = host + ":" + port
    const network = Blockchain.network
    blockchainProvider = new ethers.providers.JsonRpcProvider(provider, network)
  }
  */

  constructor (host, port) {
    this._getWeb3(host, port)
  }

  async _getWeb3 (host, port) {

    let ethereum = window.ethereum
    this.web3 = window.web3


    if (ethereum) {
      this.web3 = new Web3(ethereum)
      try {
        console.log('Ethereum')
        await ethereum.enable()
      } catch (error) {
        // User denied account access...
        console.log("Ethereum disabled")
      }
    } else if (this.web3) {
      console.log('Legacy dapp browsers...')
      this.web3 = new Web3(web3.currentProvider);
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
        let host = '127.0.0.1'
        let port = '8545'
        this.web3 = new Web3(new Web3.providers.HttpProvider('http://' + host + ':' + port))
    }

    setInterval(this._setAccount.bind(this), 3000)
  }

  // metamask sets its account to web3.eth.accounts[0]
async _setAccount () {
    const accounts = await this.web3.eth.getAccounts()
    if (accounts[0] !== this.account) {
      this.account = accounts[0]
      console.log("Setting account", this.account)
    }
  }

  _callChecker (_func, _cb) {
    // console.log('in func call checker')
    if ((typeof _func === 'function') && (typeof _cb === 'function')) {
      // console.log('Passed call checker!')
      return true
    } else {
      /* console.log('failed call checker!')
      console.log('func ' + _func)
      console.log('cb ' + _cb) */
      return false
    }
  }

  _callParamsChecker (_func, _params, _cb) {
    if ((typeof _func === 'function') && (typeof _cb === 'function') && (Array.isArray(_params))) {
      return true
    } else {
      return false
    }
  }

  _call (_caller, _func, _cb, _isBatch) {
    if (this._callChecker(_func, _cb)) {
      if (_isBatch) {
        this.batch.add(_func(function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        }))
      } else {
        // console.log('blah ' + _func)
        _func(function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        })
      }
    }
  }

  _call1Params (_caller, _func, _params, _cb, _isBatch) {
    if (this._callParamsChecker(_func, _params, _cb)) {
      if (_isBatch) {
        this.batch.add(_func(_params[0], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        }))
      } else {
        _func(_params[0], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        })
      }
    }
  }

  _call2Params (_caller, _func, _params, _cb, _isBatch) {
    if (this._callParamsChecker(_func, _params, _cb)) {
      if (_isBatch) {
        this.batch.add(_func(_params[0], _params[1], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        }))
      } else {
        _func(_params[0], _params[1], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        })
      }
    }
  }

  _call3Params (_caller, _func, _params, _cb, _isBatch) {
    /* console.log('caller ' + _caller)
    console.log('func ' + _func)
    console.log('params ' + _params)
    console.log('cb ' + _cb)
    console.log('batch ' + _isBatch) */
    if (this._callParamsChecker(_func, _params, _cb)) {
      if (_isBatch) {
        this.batch.add(_func(_params[0], _params[1], _params[2], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        }))
      } else {
        _func(_params[0], _params[1], _params[2], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        })
      }
    }
  }

  _call4Params (_caller, _func, _params, _cb, _isBatch) {
    /* console.log('caller ' + _caller)
    console.log('func ' + _func)
    console.log('params ' + _params)
    console.log('cb ' + _cb)
    console.log('batch ' + _isBatch) */
    if (this._callParamsChecker(_func, _params, _cb)) {
      if (_isBatch) {
        /* console.log('param0 ' + _params[0])
        console.log('param0 ' + _params[1])
        console.log('param0 ' + _params[2])
        console.log('param0 ' + _params[3]) */
        this.batch.add(_func(_params[0], _params[1], _params[2], _params[3], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        }))
      } else {
        _func(_params[0], _params[1], _params[2], _params[3], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        })
      }
    }
  }

  _call5Params (_caller, _func, _params, _cb, _isBatch) {
    if (this._callParamsChecker(_func, _params, _cb)) {
      if (_isBatch) {
        this.batch.add(_func(_params[0], _params[1], _params[2], _params[3], _params[4], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        }))
      } else {
        _func(_params[0], _params[1], _params[2], _params[3], _params[4], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        })
      }
    }
  }

  _call6Params (_caller, _func, _params, _cb, _isBatch) {
    if (this._callParamsChecker(_func, _params, _cb)) {
      if (_isBatch) {
        this.batch.add(_func(_params[0], _params[1], _params[2], _params[3], _params[4], _params[5], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        }))
      } else {
        _func(_params[0], _params[1], _params[2], _params[3], _params[4], _params[5], function (err, result) {
          if (err) {
            console.log(err)
          } else {
            _cb(_caller, result)
          }
        })
      }
    }
  }

  getAccount () {
    return this.account
  }

  getWeb3 () {
    return this.web3
  }

  createBatch () {
    this.batch = undefined
    this.batch = this.web3.createBatch()
  }

  executeBatch () {
    this.batch.execute()
  }

  callHandler (_caller, _func, _cb, _isBatch) {
    // console.log('in grrrr call handler')
    // console.log(_transactionObject)
    // console.log(_func)
    this._call(_caller, _func, _cb, _isBatch)
  }

  callParamHandler (_caller, _func, _params, _cb, _isBatch) {
    // console.log("in absolutely new call handler")
    // console.log(_transactionObject)
    // console.log(_func)
    // console.log(_params.length)
    // const transactionObject = {from: this.account, data: params}
    switch (_params.length) {
      case 1:
        this._call1Params(_caller, _func, _params, _cb, _isBatch)
        break
      case 2:
        this._call2Params(_caller, _func, _params, _cb, _isBatch)
        break
      case 3:
        this._call3Params(_caller, _func, _params, _cb, _isBatch)
        break
      case 4:
        this._call4Params(_caller, _func, _params, _cb, _isBatch)
        break
      case 5:
        this._call5Params(_caller, _func, _params, _cb, _isBatch)
        break
      case 6:
        this._call6Params(_caller, _func, _params, _cb, _isBatch)
        break
      default:
        this._call(_caller, _func, _cb, _isBatch)
    }
  }
}

export default Web3Handler
