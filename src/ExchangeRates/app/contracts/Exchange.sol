pragma solidity ^0.4.2;

contract Exchange {

  function placeOrder(address _creator, string offerCurrency, uint256 offerAmount, string wantCurrency, uint256 wantValue) {}
  function completeOrder(int256 _orderId, string _offerCurrency, address _completor, string _wantCurrency, uint256 _wantAmount) {}
  function deleteOrder(int256 orderId) {}

  function withdraw(address addr, string code, uint256 value) {}
  function getDepositedAmount(address addr, string code) constant returns (uint256) {}

  function setRate(string code, uint256 rate) {}
  function getRate(string code) constant returns (uint256) {}
  function getEtherAmount(string _code, uint256 _amount) public constant returns (uint256) {}
}