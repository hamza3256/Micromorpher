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

  function placeOrder(uint256 _epochTime, address _creator, string _offerCurrency, uint256 _offerAmount, uint256 _etherValue) public onlyOwner {
  	orderDB.placeOrder(_epochTime,_creator,_offerCurrency,_offerAmount,_etherValue);
  }

  function completeOrder(uint256 _epochTime, address _creator) public onlyOwner {
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
 	
  function deleteOrder(uint256 _epochTime, address _creator) public onlyOwner {
		orderDB.deleteOrder(_epochTime,_creator); 
  }

  function withdraw(string code, uint256 value) public onlyOwner {
  	// Need to do something with the return result here
  	depositDB.withdraw(code,value);
  }

  function getDepositedAmount(string code) public constant returns (uint256) {
  	return depositDB.getDepositedAmount(code);
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
  }

}
