import Web3Handler from './web3Handler'

class ContractHandler {

  static exchangerAbi = [
    {
      "constant": false,
      "inputs": [
        {
          "name": "_epochTime",
          "type": "uint256"
        },
        {
          "name": "_creator",
          "type": "address"
        },
        {
          "name": "_offerCurrency",
          "type": "string"
        },
        {
          "name": "_offerAmount",
          "type": "uint256"
        },
        {
          "name": "_etherValue",
          "type": "uint256"
        }
      ],
      "name": "completeOrder",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_epochTime",
          "type": "uint256"
        },
        {
          "name": "_creator",
          "type": "address"
        }
      ],
      "name": "getOrderId",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_code",
          "type": "string"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "kill",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_code",
          "type": "string"
        }
      ],
      "name": "getRate",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "code",
          "type": "string"
        }
      ],
      "name": "getDepositedAmount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_epochTime",
          "type": "uint256"
        },
        {
          "name": "_creator",
          "type": "address"
        }
      ],
      "name": "deleteOrder",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_code",
          "type": "string"
        },
        {
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "getEtherAmount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_code",
          "type": "string"
        },
        {
          "name": "_rate",
          "type": "uint256"
        }
      ],
      "name": "setRate",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_epochTime",
          "type": "uint256"
        },
        {
          "name": "_creator",
          "type": "address"
        },
        {
          "name": "_offerCurrency",
          "type": "string"
        },
        {
          "name": "_offerAmount",
          "type": "uint256"
        },
        {
          "name": "_etherValue",
          "type": "uint256"
        }
      ],
      "name": "placeOrder",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "type": "constructor"
    },
    {
      "payable": true,
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "rate",
          "type": "uint256"
        }
      ],
      "name": "Funded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_epochTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_creator",
          "type": "address"
        }
      ],
      "name": "OrderPlaced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_epochTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_creator",
          "type": "address"
        }
      ],
      "name": "OrderCompleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_epochTime",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "_creator",
          "type": "address"
        }
      ],
      "name": "OrderDeleted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_offerCurrency",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "_offerAmount",
          "type": "uint256"
        }
      ],
      "name": "Deposited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "code",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Withdrawn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "code",
          "type": "string"
        },
        {
          "indexed": false,
          "name": "rate",
          "type": "uint256"
        }
      ],
      "name": "RateSet",
      "type": "event"
    }
  ]

  static exchangerAddress = '0xE34A21132646DFD804A35faad90e74CE38B36f85'

  constructor (_web3Handler) {
    //console.log(_web3)

    this.web3Handler = _web3Handler
    const thisWeb3 = this.web3Handler.getWeb3()
    console.log('Contract handler web3: ', thisWeb3)

    this.exchanger = new thisWeb3.eth.Contract(ContractHandler.exchangerAbi, ContractHandler.exchangerAddress)
    //this.exchanger = exchangerContract.at(ContractHandler.exchangerAddress)
  }

  getExchanger () {
    return this.exchanger
  }

  getAddress () {
    return ContractHandler.exchangerAddress
  }
}

export default ContractHandler
