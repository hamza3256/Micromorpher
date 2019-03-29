pragma solidity ^0.5.0;

contract Depositor {

	function deposit(string memory code, uint256 value) public;
	function withdraw(string memory code, uint256 value) public;
	function getDepositedAmount(string memory code) public view returns (uint256);

}
