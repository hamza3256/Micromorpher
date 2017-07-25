pragma solidity ^0.4.11;

import "Depositor.sol";
import "Owned.sol";

contract DepositDB is Depositor, Owned {

  mapping(bytes32 => uint256) private depositStore;
  uint private timeStamp;

  function DepositDB() {
		timeStamp = now;
	}

  function deposit(string _code, uint256 _value) public returns (bool) {
		var key = sha3(_code, timeStamp);
		if ( _value > 0 ) {
      depositStore[key] = _value;
			return true;
		}
		return false;
	}

	function withdraw(string _code, uint256 _value) public returns (bool) {
		var key = sha3(_code, timeStamp);
		if ( _value > 0 ) {
			uint256 depositedAmount = depositStore[key];
			if ( depositedAmount >= _value ) {
				uint256 newAmount = depositedAmount - _value;
        depositStore[key] = newAmount;
				return true;
			}
		}
		return false;
	}

	function getDepositedAmount(string _code) public constant returns (uint256) {
		var key = sha3(_code, timeStamp);
		return depositStore[key];
	}

}
