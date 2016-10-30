pragma solidity ^0.4.2;

import "Depositor.sol";
import "Storage.sol";
import "Owned.sol";

contract DepositDB is Depositor, Owned {

  Storage private storageContract;

	function DepositDB(address _storageContract) {
		storageContract = Storage(_storageContract);
	}

	function deposit(string _code, uint256 _value) public returns (bool) {
		var key = sha3(_code);
		if ( _value > 0 ) {
			storageContract.setUInt256Value(key, _value);
			return true;
		}
		return false;
	}

	function withdraw(string _code, uint256 _value) public returns (bool) {
		var key = sha3(_code);
		if ( _value > 0 ) {
			uint256 depositedAmount = Storage(storageContract).getUInt256Value(key);
			if ( depositedAmount >= _value ) {
				uint256 newAmount = depositedAmount - _value;
				storageContract.setUInt256Value(key, newAmount);
				return true;
			}
		}
		return false;
	}

	function getDepositedAmount(string _code) public constant returns (uint256) {
		var key = sha3(_code);
		return storageContract.getUInt256Value(key);
	}

}