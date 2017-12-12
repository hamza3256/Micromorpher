pragma solidity ^0.4.11;

contract Order {

  function placeOrder(uint256 _epochTime, address _creator, string _offerCurrency, uint256 _offerAmount, uint256 _etherValue);
  function completeOrder(uint256 _epochTime, address _creator);
  function deleteOrder(uint256 _epochTime, address _creator);

  function getOrderId(uint256 _epochTime, address _creator) constant returns (bytes32);
  function getOrder(uint256 _epochTime, address _creator) constant returns (address,string,uint256,uint256,int256);
  function getOrderStatus(uint256 _epochTime, address _creator) constant returns (int);
  function getOrderCreator(uint256 _epochTime, address _creator) constant returns (address);
  function getOrderOfferCurrency(uint256 _epochTime, address _creator) constant returns (string);
  function getOrderOfferAmount(uint256 _epochTime, address _creator) constant returns (uint256);
  function getOrderEtherAmount(uint256 _epochTime, address _creator) constant returns (uint256);
  function isOpen(uint256 _epochTime, address _creator) constant returns (bool);
  function isDeleted(uint256 _epochTime, address _creator) constant returns (bool);
  function isCompleted(uint256 _epochTime, address _creator) constant returns (bool);

}
