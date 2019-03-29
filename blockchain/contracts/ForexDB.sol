pragma solidity ^0.5.0;

// ForEx exchange rates relative to Ether
// Steve Huckle

import "Forex.sol";
import "Mortal.sol";

contract ForexDB is Forex, Mortal {

	mapping(string => uint256) private rateStore;

	function setRate(string memory _code, uint256 _rate) public onlyOwner {
		rateStore[_code] = _rate;
	}

	function getRate(string memory _code) public view returns (uint256) {
		return rateStore[_code];

	}

	function getEtherAmount(string memory _code, uint256 _amount) public view returns (uint256) {
		uint256 rate = getRate(_code);
		uint256 thisWei = 0;
		if ( rate > 0) {
			thisWei = _amount / rate;
		}
		return thisWei;
	}

}
