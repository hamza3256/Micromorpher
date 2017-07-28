pragma solidity ^0.4.11;

// ForEx exchange rates relative to Ether
// Steve Huckle

import "Forex.sol";
import "Mortal.sol";

contract ForexDB is Forex, Mortal {

	mapping(string => uint256) private rateStore;

	/* function ForexDB() {
	} */

	function setRate(string _code, uint256 _rate) onlyOwner {
		rateStore[_code] = _rate;
	}

	function getRate(string _code) public constant returns (uint256) {
		return rateStore[_code];

	}

	function getEtherAmount(string _code, uint256 _amount) public constant returns (uint256) {
		var rate = getRate(_code);
		uint256 thisWei = 0;
		if ( rate > 0) {
			thisWei = _amount / rate;
		}
		return thisWei;
	}

}
