pragma solidity ^0.5.0;

import "Order.sol";
import "Mortal.sol";

contract OrderDB is Order, Mortal {

  enum OrderStatus { OPEN, DELETED, COMPLETED }

  struct Order {
    address creator;
    string offerCurrency;
    uint256 offerAmount;
    uint256 etherAmount;
		OrderStatus status;
  }

  mapping(bytes32 => Order) private orders;

  function getOrderId(uint256 _epochTime, address _creator) public view returns (bytes32) {
    return keccak256(
      abi.encodePacked(_epochTime,_creator)
    );
  }

	// hint - use js now() to generate the epochTime and make it unique
  function placeOrder(uint256 _epochTime, address _creator, string memory _offerCurrency, uint256 _offerAmount, uint256 _etherValue) public onlyOwner {
    bytes32 key = getOrderId(_epochTime,_creator);
    orders[key] = Order(_creator,_offerCurrency,_offerAmount,_etherValue,OrderStatus.OPEN);
  }

  function completeOrder(uint256 _epochTime, address _creator) public onlyOwner {
  	bytes32 key = getOrderId(_epochTime,_creator);
    Order storage thisOrder = orders[key];
    thisOrder.status = OrderStatus.COMPLETED;
  }

  function deleteOrder(uint256 _epochTime, address _creator) public onlyOwner {
  	bytes32 key = getOrderId(_epochTime,_creator);
    Order storage thisOrder = orders[key];
    thisOrder.status = OrderStatus.DELETED;
  }

  function getOrder(uint256 _epochTime, address _creator) public view returns (address,string memory,uint256,uint256,int256) {
  	bytes32 key = getOrderId(_epochTime,_creator);
    Order storage thisOrder = orders[key];
  	return (thisOrder.creator,
  					thisOrder.offerCurrency,
  					thisOrder.offerAmount,
  					thisOrder.etherAmount,
  					int256(thisOrder.status));
  }


  function getOrderStatus(uint256 _epochTime, address _creator) public view returns (int) {
  	bytes32 key = getOrderId(_epochTime,_creator);
    Order storage thisOrder = orders[key];
  	return int(thisOrder.status);
  }

  function getOrderCreator(uint256 _epochTime, address _creator) public view returns (address) {
    bytes32 key = getOrderId(_epochTime,_creator);
  	Order storage thisOrder = orders[key];
    return thisOrder.creator;
  }

  function getOrderOfferCurrency(uint256 _epochTime, address _creator) public view returns (string memory) {
    bytes32 key = getOrderId(_epochTime,_creator);
  	Order storage thisOrder = orders[key];
    return thisOrder.offerCurrency;
  }

  function getOrderOfferAmount(uint256 _epochTime, address _creator) public view returns (uint256) {
    bytes32 key = getOrderId(_epochTime,_creator);
  	Order storage thisOrder = orders[key];
    return thisOrder.offerAmount;
  }

  function getOrderEtherAmount(uint256 _epochTime, address _creator) public view returns (uint256) {
    bytes32 key = getOrderId(_epochTime,_creator);
  	Order storage thisOrder = orders[key];
    return thisOrder.etherAmount;
  }

  function isOpen(uint256 _epochTime, address _creator) public view returns (bool) {
  	bytes32 key = getOrderId(_epochTime,_creator);
    Order storage thisOrder = orders[key];
  	if ( thisOrder.status == OrderStatus.OPEN ) {
			return true;
  	}
  	return false;
  }

  function isCompleted(uint256 _epochTime, address _creator) public view returns (bool) {
  	bytes32 key = getOrderId(_epochTime,_creator);
    Order storage thisOrder = orders[key];
  	if ( thisOrder.status == OrderStatus.COMPLETED ) {
			return true;
  	}
  	return false;
  }

  function isDeleted(uint256 _epochTime, address _creator) public view returns (bool) {
    bytes32 key = getOrderId(_epochTime,_creator);
    Order storage thisOrder = orders[key];
  	if ( thisOrder.status == OrderStatus.DELETED ) {
			return true;
  	}
  	return false;
  }

}
