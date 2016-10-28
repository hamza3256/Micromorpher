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

  event Funded(address sender, uint rate);
  event OrderPlaced(uint256 _epochTime, address _creator);
  event OrderCompleted(uint256 _epochTime, address _creator);
  event OrderDeleted(uint256 _epochTime, address _creator);
  event RateSet(string code, uint256 rate);

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
  	OrderPlaced(_epochTime, _creator);
  }

  function completeOrder(uint256 _epochTime, address _creator, string _offerCurrency, uint256 _offerAmount, uint256 _etherValue) public onlyOwner {
		//var sent = _creator.send(_etherValue);
		if ( orderDB.isOpen(_epochTime,_creator) ) {
			orderDB.completeOrder(_epochTime,_creator);
			if (!_creator.send(_etherValue)) {
				orderDB.placeOrder(_epochTime,_creator,_offerCurrency,_offerAmount,_etherValue);
			}
	    OrderCompleted(_epochTime,_creator);
		}
  }
 	
  function deleteOrder(uint256 _epochTime, address _creator) public onlyOwner {
		orderDB.deleteOrder(_epochTime,_creator);		
    OrderDeleted(_epochTime,_creator);
  }

  function getOrderId(uint256 _epochTime, address _creator) public onlyOwner constant returns (bytes32) {
    return orderDB.getOrderId(_epochTime,_creator);
  }

  function withdraw(string code, uint256 value) public onlyOwner {
  	// Need to do something with the return result here
  	depositDB.withdraw(code,value);
  }

  function getDepositedAmount(string code) public onlyOwner constant returns (uint256) {
  	return depositDB.getDepositedAmount(code);
  }
  
  function setRate(string _code, uint256 _rate) public onlyOwner {
  	forexDB.setRate(_code,_rate);  	
		RateSet(_code,_rate);
    //var key = sha3(_code);
    //rateStorage[key] = _rate;
    //rateStorage[_code] = _rate;
  }

  function getRate(string _code) public onlyOwner constant returns (uint256) {
  	return forexDB.getRate(_code);
    //var key = sha3(_code);
    //return rateStorage[key];
    //return rateStorage[_code];
  }

  function getEtherAmount(string _code, uint256 _amount) public onlyOwner constant returns (uint256) {
    return forexDB.getEtherAmount(_code,_amount);
  }

}
