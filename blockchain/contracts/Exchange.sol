pragma solidity ^0.4.11;

contract Exchange {

  function placeOrder(uint256 _epochTime, address _creator, string _offerCurrency, uint256 _offerAmount, uint256 _etherValue);
  function completeOrder(uint256 _epochTime, address _creator, string _offerCurrency, uint256 _offerAmount, uint256 _etherValue);
  function deleteOrder(uint256 _epochTime, address _creator);

  function getOrderId(uint256 _epochTime, address _creator) constant returns (bytes32);

  function withdraw(string code, uint256 value);
  function getDepositedAmount(string code) constant returns (uint256);

  function setRate(string code, uint256 rate);
  function getRate(string code) constant returns (uint256);
  function getEtherAmount(string _code, uint256 _amount) public constant returns (uint256);
}
