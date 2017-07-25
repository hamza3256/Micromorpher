pragma solidity ^0.4.11;

// ForEx exchange rates relative to Ether
// Steve Huckle

import "Forex.sol";

contract ForexDB is Forex {

	mapping(bytes32 => uint256) private rateStore;
	uint private timeStamp;

	//mapping(bytes32 => uint256) private rateStorage;
	//mapping(string => uint256) private rateStorage;

	function ForexDB() {
		timeStamp = now;
	}

	/*function stringsEqual(string storage _a, string memory _b) private returns (bool) {
		bytes storage a = bytes(_a);
		bytes memory b = bytes(_b);
		if (a.length != b.length)
			return false;
		// @todo unroll this loop
		for (uint i = 0; i < a.length; i ++)
			if (a[i] != b[i])
				return false;
		return true;
	}*/

	function setRate(string _code, uint256 _rate) public {
		var key = sha3(_code, timeStamp);
		rateStore[key] = _rate;
	}

	function getRate(string _code) public constant returns (uint256) {
		var key = sha3(_code, timeStamp);
		return rateStore[key];

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
