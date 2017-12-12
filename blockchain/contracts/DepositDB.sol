pragma solidity ^0.4.11;

import "Depositor.sol";
import "Mortal.sol";

contract DepositDB is Depositor, Mortal {

  mapping(string => uint256) private depositStore;

  /* function DepositDB() {
	} */

  function deposit(string _code, uint256 _value) onlyOwner {
		depositStore[_code] += _value;
	}

	function withdraw(string _code, uint256 _value) onlyOwner {
		uint256 depositedAmount = depositStore[_code];
		if ( depositedAmount >= _value ) {
			uint256 newAmount = depositedAmount - _value;
      depositStore[_code] = newAmount;
		}
  }

	function getDepositedAmount(string _code) public constant returns (uint256) {
		return depositStore[_code];
	}
}
