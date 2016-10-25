pragma solidity ^0.4.2;

// ForEx exchanger
// Steve Huckle

import "Exchange.sol";
import "Depositor.sol";
import "Forex.sol";
import "Order.sol";
import "Mortal.sol";

contract Exchanger is Exchange, Mortal {

  //mapping(string => uint256) private rateStorage;
  //mapping(bytes32 => uint256) private rateStorage;

  Forex private forexDB;
  Order private orderDB;
  Depositor private depositDB;

  mapping(address => uint256) private funds;

  event Funded(address sender, uint rate);

  function Exchanger(address _forexDB, address _orderDB, address _depositDB) {  
		forexDB = Forex(_forexDB);
	  orderDB = Order(_orderDB);
		depositDB = Depositor(_depositDB);
  }

  function() payable onlyOwner {
    Funded(msg.sender, msg.value);
  }

  function placeOrder(address _creator, string _offerCurrency, uint256 _offerAmount, string _wantCurrency, uint256 _wantValue) public {
		var deposited = depositDB.deposit(_offerCurrency, _offerAmount);
		if ( deposited ) {
			orderDB.placeOrder(_creator,_offerCurrency,_offerAmount,_wantCurrency,_wantValue);
  	}
  }

  function completeOrder(int256 _orderId, string _offerCurrency, address _completor, string _wantCurrency, uint256 _wantAmount) public {
		/*var creator = orderDB.getOrderCreator(_orderId);
	  // Passing in _offerCurrency is a Hack 
		// because you can't presently return strings to internal functions in Solidity
		// So this wont work
	  //var offeredCurrency = orderContract.getOrderOfferCurrency(_orderId);				
		var offeredAmount = orderDB.getOrderOfferAmount(_orderId);  
		var withdrawn = depositDB.withdraw(creator,_offerCurrency,offeredAmount);
		if ( withdrawn > 0 && withdrawn == offeredAmount ) {
			// Put that in the order _completor's account
			var deposited = depositDB.deposit(_completor,_offerCurrency,withdrawn);
      if ( deposited ) {
        // Put the wanted currency in the order creator's account
        deposited = depositDB.deposit(creator,_wantCurrency,_wantAmount);
        if ( deposited ) {
          orderDB.completeOrder(_orderId,_completor,_wantCurrency,_wantAmount);
        } else {
          depositDB.withdraw(creator,_wantCurrency,_wantAmount);
          depositDB.deposit(creator,_offerCurrency,offeredAmount);
        }
      }
		} else {
			depositDB.deposit(creator,_offerCurrency,offeredAmount);
		}*/
  }

  function deleteOrder(int256 orderId) public {
		orderDB.deleteOrder(orderId); 
  }

  function withdraw(address addr, string code, uint256 value) public {
  	depositDB.withdraw(addr,code,value);
  }

  function getDepositedAmount(address addr, string code) public constant returns (uint256) {
  	if ( addr != 0x0 ) {
  		return depositDB.getDepositedAmount(addr,code);
  	}
  	return 0;
  }
  
  function setRate(string _code, uint256 _rate) public {
  	forexDB.setRate(_code,_rate);
    //var key = sha3(_code);
    //rateStorage[key] = _rate;
    //rateStorage[_code] = _rate;
  }

  function getRate(string _code) public constant returns (uint256) {
  	return forexDB.getRate(_code);
    //var key = sha3(_code);
    //return rateStorage[key];
    //return rateStorage[_code];
  }

  function getEtherAmount(string _code, uint256 _amount) public constant returns (uint256) {
    return forexDB.getEtherAmount(_code,_amount);
  }*/

}
