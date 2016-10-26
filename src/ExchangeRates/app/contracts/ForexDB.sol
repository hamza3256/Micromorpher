pragma solidity ^0.4.2;

// ForEx exchange rates relative to Ether
// Steve Huckle

import "Storage.sol";
import "Forex.sol";

contract ForexDB is Forex {

	Storage private storageContract;

	//mapping(bytes32 => uint256) private rateStorage;
	//mapping(string => uint256) private rateStorage;

	event RateSet(bytes32 key, string code, uint256 rate);
	event RateGot(bytes32 key, string code);
	
	function ForexDB(address _storageContract) {
		storageContract = Storage(_storageContract);
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
		var key = sha3(_code);
		//rateStorage[key] = _rate;
		Storage(storageContract).setUInt256Value(key,_rate);
		RateSet(key,_code,_rate);
	}

	function getRate(string _code) public constant returns (uint256) {
		var key = sha3(_code);			
		RateGot(key,_code);	
		//return rateStorage[key];	
		return Storage(storageContract).getUInt256Value(key);

	}

	function getEtherAmount(string _code, uint256 _amount) public constant returns (uint256) {
		var key = sha3(_code);
		var rate = Storage(storageContract).getUInt256Value(key);
		uint256 thisWei = 0;
		if ( rate > 0) {
			thisWei = _amount / rate;
		}		
		return thisWei;
	}

}