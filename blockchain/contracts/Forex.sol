pragma solidity ^0.5.0;

// Exchange rate interface

contract Forex {

	function setRate(string memory code, uint256 rate) public;
	function getRate(string memory code) public view returns (uint256);
	function getEtherAmount(string memory _code, uint256 _amount) public view returns (uint256);

}
