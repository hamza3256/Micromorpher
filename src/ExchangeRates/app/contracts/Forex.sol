pragma solidity ^0.4.2;

// Exchange rate interface

contract Forex {

	function setRate(string code, uint256 rate) {}
	function getRate(string code) constant returns (uint256) {} 
	function getEtherAmount(string _code, uint256 _amount) public constant returns (uint256) {}

}
