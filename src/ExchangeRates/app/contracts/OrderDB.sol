pragma solidity ^0.4.2;

import "Order.sol";
import "Owned.sol";

contract OrderDB is Order, Owned {

  enum OrderStatus { UNINITIALISED, OPEN, DELETED, COMPLETED }

  struct NewOrder {    
    address creator;
    string offerCurrency;
    uint256 offerAmount;
    uint256 etherAmount;
	OrderStatus status;	
  }

  event OrderPlaced(uint256 orderId);
  event OrderNotPlaced();
  event OrderCompleted(uint256 orderId);
  event OrderIncomplete(uint256 orderId);
  event OrderDeleted(uint256 orderId);
  event OrderNotDeleted(uint256 orderId);

	mapping(uint256 => NewOrder) private orders;
	uint256 private orderId;

  function OrderDB() {
	orderId = 0;
    orders[orderId].status = OrderStatus.UNINITIALISED;
  }

  function getOrderId() public onlyOwner returns (uint256) {
    var thisOrderId = orderId;    
    orders[thisOrderId].status = OrderStatus.UNINITIALISED;
    orderId += 1;
    return thisOrderId;
  }

  function placeOrder(uint256 _orderId, address _creator, string _offerCurrency, uint256 _offerAmount, uint256 _etherValue) public onlyOwner returns (bool) {
    if (orders[_orderId].status == OrderStatus.UNINITIALISED ) {
      orders[_orderId].creator = _creator;
      orders[_orderId].offerCurrency = _offerCurrency;
      orders[_orderId].etherAmount = _etherValue;
      orders[_orderId].status = OrderStatus.OPEN;
      OrderPlaced(_orderId);
      return true;
    } else {
      OrderNotPlaced();
      return false;
    }
  }

  function completeOrder(uint256 _orderId, address _creator) public onlyOwner returns (bool) {
    if (orders[_orderId].status != OrderStatus.OPEN && orders[_orderId].creator != _creator ) {
      OrderIncomplete(_orderId);
      return false;
    } else {
      orders[_orderId].status = OrderStatus.COMPLETED;
      OrderCompleted(_orderId);
      return true;
    }
  }

  function deleteOrder(uint256 _orderId) public onlyOwner returns (bool) {
  	if ( orders[_orderId].status != OrderStatus.UNINITIALISED ) {
			orders[_orderId].status = OrderStatus.DELETED;
      OrderDeleted(_orderId);
    	return true;
  	}
    OrderNotDeleted(_orderId);
  	return false;
  }

  function getOrder(uint256 _orderId) public constant returns (address,string,uint256,uint256,int256) {
  	return (orders[_orderId].creator,
  					orders[_orderId].offerCurrency,
  					orders[_orderId].offerAmount,
  					orders[_orderId].etherAmount,
  					int256(orders[_orderId].status));
  }


  function getOrderStatus(uint256 _orderId) public constant returns (int) {
  	return int(orders[_orderId].status);
  }

  function getOrderCreator(uint256 _orderId) public constant returns (address) {
      return orders[_orderId].creator;
  } 

  function getOrderOfferCurrency(uint256 _orderId) public constant returns (string) {
      if ( orders[_orderId].status != OrderStatus.UNINITIALISED ) { 
          return orders[_orderId].offerCurrency;
      }
      return "";
  }

  function getOrderOfferAmount(uint256 _orderId) public constant returns (uint256) {
      if ( orders[_orderId].status != OrderStatus.UNINITIALISED ) { 
          return orders[_orderId].offerAmount;
      }
      return 0x0;
  }

  function getOrderEtherAmount(uint256 _orderId) public constant returns (uint256) {
      if ( orders[_orderId].status != OrderStatus.UNINITIALISED ) { 
          return orders[_orderId].etherAmount;
      }
      return 0x0;
  }

  function isUninitialised(uint256 _orderId) public constant returns (bool) {
  	if ( orders[_orderId].status != OrderStatus.UNINITIALISED ) { 
		return orders[_orderId].status == OrderStatus.UNINITIALISED;
  	}
  	return false;
  }

  function isOpen(uint256 _orderId) public constant returns (bool) {
  	if ( orders[_orderId].status != OrderStatus.UNINITIALISED ) { 
		return orders[_orderId].status == OrderStatus.OPEN;
  	}
  	return false;
  }

  function isCompleted(uint256 _orderId) public constant returns (bool) {
  	if ( orders[_orderId].status != OrderStatus.UNINITIALISED ) { 
		return orders[_orderId].status == OrderStatus.COMPLETED;
  	}
  	return false;
  }

  function isDeleted(uint256 _orderId) public constant returns (bool) {
      if ( orders[_orderId].status != OrderStatus.UNINITIALISED ) { 
          return orders[_orderId].status == OrderStatus.DELETED;
      }
      return false;
  }

}