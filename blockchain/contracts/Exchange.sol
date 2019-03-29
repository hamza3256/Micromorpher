pragma solidity ^0.5.0;

contract Exchange {

  function placeOrder(uint256 _epochTime, address payable _creator, string memory _offerCurrency, uint256 _offerAmount, uint256 _etherValue) public;
  function completeOrder(uint256 _epochTime, address payable _creator, string memory _offerCurrency, uint256 _offerAmount, uint256 _etherValue) public;
  function deleteOrder(uint256 _epochTime, address _creator) public;

  function getOrderId(uint256 _epochTime, address _creator) public view returns (bytes32);

  function withdraw(string memory code, uint256 value) public;
  function getDepositedAmount(string memory code) public view returns (uint256);

  function setRate(string memory code, uint256 rate) public;
  function getRate(string memory code) public view returns (uint256);
  function getEtherAmount(string memory _code, uint256 _amount) public view returns (uint256);
}
