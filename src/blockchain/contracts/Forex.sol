pragma solidity ^0.4.11;

// Exchange rate interface

contract Forex {

	function setRate(string code, uint256 rate);
	function getRate(string code) constant returns (uint256);
	function getEtherAmount(string _code, uint256 _amount) constant returns (uint256);

}
