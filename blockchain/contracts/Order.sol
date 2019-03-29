pragma solidity ^0.5.0;

contract Order {

  function placeOrder(uint256 _epochTime, address _creator, string memory _offerCurrency, uint256 _offerAmount, uint256 _etherValue) public;
  function completeOrder(uint256 _epochTime, address _creator) public;
  function deleteOrder(uint256 _epochTime, address _creator) public;

  function getOrderId(uint256 _epochTime, address _creator) public view returns (bytes32);
  function getOrder(uint256 _epochTime, address _creator) public view returns (address,string memory,uint256,uint256,int256);
  function getOrderStatus(uint256 _epochTime, address _creator) public view returns (int);
  function getOrderCreator(uint256 _epochTime, address _creator) public view returns (address);
  function getOrderOfferCurrency(uint256 _epochTime, address _creator) public view returns (string memory);
  function getOrderOfferAmount(uint256 _epochTime, address _creator) public view returns (uint256);
  function getOrderEtherAmount(uint256 _epochTime, address _creator) public view returns (uint256);
  function isOpen(uint256 _epochTime, address _creator) public view returns (bool);
  function isDeleted(uint256 _epochTime, address _creator) public view returns (bool);
  function isCompleted(uint256 _epochTime, address _creator) public view returns (bool);

}
