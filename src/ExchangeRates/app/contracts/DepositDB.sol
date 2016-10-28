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
		var addr = msg.sender;
		if ( _value > 0 ) {
			storageContract.setUInt256Value(sha3(addr,_code), _value);
			return true;
		}
		return false;
	}

	function withdraw(string _code, uint256 _value) public returns (bool) {
		var addr = msg.sender;
		if ( _value > 0 ) {
			uint256 depositedAmount = Storage(storageContract).getUInt256Value(sha3(addr,_code));
			if ( depositedAmount >= _value ) {
				uint256 newAmount = depositedAmount - _value;
				storageContract.setUInt256Value(sha3(addr,_code), newAmount);
				return true;
			}
		}
		return false;
	}

	function getDepositedAmount(string code) public constant returns (uint256) {
		var addr = msg.sender;
		return storageContract.getUInt256Value(sha3(addr,code));
	}

}