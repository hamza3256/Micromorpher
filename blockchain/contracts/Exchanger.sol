pragma solidity ^0.5.0;

// ForEx exchanger
// Steve Huckle

import "Exchange.sol";
import "DepositDB.sol";
import "ForexDB.sol";
import "OrderDB.sol";
import "Mortal.sol";

contract Exchanger is Exchange, Mortal {

  //mapping(string => uint256) private rateStorage;
  //mapping(bytes32 => uint256) private rateStorage;

  ForexDB private forexDB;
  OrderDB private orderDB;
  DepositDB private depositDB;

  event Funded(address sender, uint rate);
  event OrderPlaced(uint256 _epochTime, address _creator);
  event OrderCompleted(uint256 _epochTime, address _creator);
  event OrderDeleted(uint256 _epochTime, address _creator);
  event Deposited(string _offerCurrency, uint256 _offerAmount);
  event Withdrawn(string code, uint256 value);
  event RateSet(string code, uint256 rate);

  constructor() public {
    forexDB = new ForexDB();
	  orderDB = new OrderDB();
		depositDB = new DepositDB();
  }

  function() external payable onlyOwner {
    emit Funded(msg.sender, msg.value);
  }

  function placeOrder(uint256 _epochTime, address payable _creator, string memory _offerCurrency, uint256 _offerAmount, uint256 _etherValue) public onlyOwner {
  	orderDB.placeOrder(_epochTime,_creator,_offerCurrency,_offerAmount,_etherValue);
  	emit OrderPlaced(_epochTime, _creator);
  }

  function completeOrder(uint256 _epochTime, address payable _creator, string memory _offerCurrency, uint256 _offerAmount, uint256 _etherValue) public onlyOwner {
		//var sent = _creator.send(_etherValue);
    if ( orderDB.isOpen(_epochTime,_creator) ) {
			orderDB.completeOrder(_epochTime,_creator);
			depositDB.deposit(_offerCurrency,_offerAmount);
			if (_creator.send(_etherValue)) {
    		emit OrderCompleted(_epochTime,_creator);
        emit Deposited(_offerCurrency,_offerAmount);
			} else {
				placeOrder(_epochTime,_creator,_offerCurrency,_offerAmount,_etherValue);
				withdraw(_offerCurrency,_offerAmount);
			}
		}
  }

  function deleteOrder(uint256 _epochTime, address _creator) public onlyOwner {
		orderDB.deleteOrder(_epochTime,_creator);
    emit OrderDeleted(_epochTime,_creator);
  }

  function getOrderId(uint256 _epochTime, address _creator) public onlyOwner view returns (bytes32) {
    return orderDB.getOrderId(_epochTime,_creator);
  }

  function withdraw(string memory _code, uint256 _value) public onlyOwner {
  	// Need to do something with the return result here
    uint256 depositedAmount = depositDB.getDepositedAmount(_code);
    if (depositedAmount >= _value) {
    	 depositDB.withdraw(_code,_value);
    	 emit Withdrawn(_code,_value);
    }
  }

  function getDepositedAmount(string memory code) public onlyOwner view returns (uint256) {
  	return depositDB.getDepositedAmount(code);
  }

  function setRate(string memory _code, uint256 _rate) public onlyOwner {
  	forexDB.setRate(_code,_rate);
		emit RateSet(_code,_rate);
    //var key = sha3(_code);
    //rateStorage[key] = _rate;
    //rateStorage[_code] = _rate;
  }

  function getRate(string memory _code) public onlyOwner view returns (uint256) {
  	return forexDB.getRate(_code);
    //var key = sha3(_code);
    //return rateStorage[key];
    //return rateStorage[_code];
  }

  function getEtherAmount(string memory _code, uint256 _amount) public onlyOwner view returns (uint256) {
    return forexDB.getEtherAmount(_code,_amount);
  }

}
