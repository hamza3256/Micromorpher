pragma solidity ^0.4.11;

contract Depositor {

	function deposit(string code, uint256 value);
	function withdraw(string code, uint256 value);
	function getDepositedAmount(string code) constant returns (uint256);

}
