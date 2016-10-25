pragma solidity ^0.4.2;

contract Order {

  function getOrderId() returns (uint256) {}
  function placeOrder(uint256 _orderId, address _creator, string _offerCurrency, uint256 _offerAmount, uint256 _etherValue) returns (bool) {}
  function completeOrder(uint256 _orderId, address _completor) returns (bool) {}

  function deleteOrder(uint256 _orderId) returns (bool) {}
  function getOrder(uint256 _orderId) public constant returns (address,string,uint256,uint256,int256) {}
  function getOrderStatus(uint256 _orderId) constant returns (int) {}
  function getOrderCreator(uint256 _orderId) constant returns (address) {} 
  function getOrderOfferCurrency(uint256 _orderId) constant returns (string) {}    
  function getOrderOfferCurrencySha(uint256 _orderId, string _forexHash) constant returns (bytes32) {}
  function getOrderOfferAmount(uint256 _orderId) constant returns (uint256) {}
  function getOrderEtherAmount(uint256 _orderId) constant returns (uint256) {} 
  function isUninitialised(uint256 orderId) constant returns (bool) {}
  function isOpen(uint256 orderId) constant returns (bool) {}
  function isDeleted(uint256 orderId) constant returns (bool) {}
  function isCompleted(uint256 orderId) constant returns (bool) {}

}