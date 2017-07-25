pragma solidity ^0.4.11;

import "Depositor.sol";
import "ExternalStorage.sol";
import "Owned.sol";

contract DepositDB is Depositor, Owned {

  uint private timeStamp;

  function DepositDB() {
		timeStamp = now;
	}

	function deposit(string _code, uint256 _value) public returns (bool) {
		var key = sha3(_code, timeStamp);
		if ( _value > 0 ) {
			ExternalStorage.setUInt256Value(key, _value);
			return true;
		}
		return false;
	}

	function withdraw(string _code, uint256 _value) public returns (bool) {
		var key = sha3(_code, timeStamp);
		if ( _value > 0 ) {
			uint256 depositedAmount = ExternalStorage.getUInt256Value(key);
			if ( depositedAmount >= _value ) {
				uint256 newAmount = depositedAmount - _value;
				ExternalStorage.setUInt256Value(key, newAmount);
				return true;
			}
		}
		return false;
	}

	function getDepositedAmount(string _code) public constant returns (uint256) {
		var key = sha3(_code, timeStamp);
		return ExternalStorage.getUInt256Value(key);
	}

}
