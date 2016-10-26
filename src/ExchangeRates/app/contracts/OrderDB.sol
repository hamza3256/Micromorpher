pragma solidity ^0.4.2;

import "Order.sol";
import "Owned.sol";

contract OrderDB is Order, Owned {

  enum OrderStatus { OPEN, DELETED, COMPLETED }

  struct Order {    
    address creator;
    string offerCurrency;
    uint256 offerAmount;
    uint256 etherAmount;
		OrderStatus status;	
  }

  event OrderPlaced(uint256 _epochTime, address _creator);
  event OrderCompleted(uint256 _epochTime, address _creator);
  event OrderDeleted(uint256 _epochTime, address _creator);

	mapping(bytes32 => Order) private orders;

  function OrderDB() {
    
  }

  function getOrderId(uint256 _epochTime, address _creator) public constant returns (bytes32) {
    return sha3(_epochTime,_creator);
  }

	// hint - use js now() to generate the epochTime and make it unique
  function placeOrder(uint256 _epochTime, address _creator, string _offerCurrency, uint256 _offerAmount, uint256 _etherValue) public {
    var key = getOrderId(_epochTime,_creator); 
    orders[key] = Order(_creator,_offerCurrency,_offerAmount,_etherValue,OrderStatus.OPEN);
    OrderPlaced(_epochTime, _creator);
  }

  function completeOrder(uint256 _epochTime, address _creator) public {
  	var key = getOrderId(_epochTime,_creator); 
    Order thisOrder = orders[key];
    thisOrder.status = OrderStatus.COMPLETED;
    OrderCompleted(_epochTime,_creator);
  }

  function deleteOrder(uint256 _epochTime, address _creator) public {
  	var key = getOrderId(_epochTime,_creator); 
    Order thisOrder = orders[key];
    thisOrder.status = OrderStatus.DELETED;
    OrderDeleted(_epochTime,_creator);
  }

  function getOrder(uint256 _epochTime, address _creator) public constant returns (address,string,uint256,uint256,int256) {
  	var key = getOrderId(_epochTime,_creator); 
    Order thisOrder = orders[key];
  	return (thisOrder.creator,
  					thisOrder.offerCurrency,
  					thisOrder.offerAmount,
  					thisOrder.etherAmount,
  					int256(thisOrder.status));
  }


  function getOrderStatus(uint256 _epochTime, address _creator) public constant returns (int) {
  	var key = getOrderId(_epochTime,_creator); 
    Order thisOrder = orders[key];
  	return int(thisOrder.status);
  }

  function getOrderCreator(uint256 _epochTime, address _creator) public constant returns (address) {
      var key = getOrderId(_epochTime,_creator); 
    	Order thisOrder = orders[key];
      return thisOrder.creator;
  } 

  function getOrderOfferCurrency(uint256 _epochTime, address _creator) public constant returns (string) {
      var key = getOrderId(_epochTime,_creator); 
    	Order thisOrder = orders[key];
      return thisOrder.offerCurrency;
  }

  function getOrderOfferAmount(uint256 _epochTime, address _creator) public constant returns (uint256) {
      var key = getOrderId(_epochTime,_creator); 
    	Order thisOrder = orders[key];
      return thisOrder.offerAmount;
  }

  function getOrderEtherAmount(uint256 _epochTime, address _creator) public constant returns (uint256) {
      var key = getOrderId(_epochTime,_creator); 
    	Order thisOrder = orders[key];
      return thisOrder.etherAmount;
  }

  function isOpen(uint256 _epochTime, address _creator) public constant returns (bool) {
  	var key = getOrderId(_epochTime,_creator); 
    Order thisOrder = orders[key];
  	if ( thisOrder.status == OrderStatus.OPEN ) { 
			return true;
  	}
  	return false;
  }

  function isCompleted(uint256 _epochTime, address _creator) public constant returns (bool) {
  	var key = getOrderId(_epochTime,_creator); 
    Order thisOrder = orders[key];
  	if ( thisOrder.status == OrderStatus.COMPLETED ) { 
			return true;
  	}
  	return false;
  }

  function isDeleted(uint256 _epochTime, address _creator) public constant returns (bool) {
    var key = getOrderId(_epochTime,_creator); 
    Order thisOrder = orders[key];
  	if ( thisOrder.status == OrderStatus.DELETED ) { 
			return true;
  	}
  	return false;
  }

}