pragma solidity ^0.5.0;

import "Depositor.sol";
import "Mortal.sol";

contract DepositDB is Depositor, Mortal {

  mapping(string => uint256) private depositStore;

  /* function DepositDB() {
	} */

  function deposit(string memory _code, uint256 _value) public onlyOwner {
		depositStore[_code] += _value;
	}

	function withdraw(string memory _code, uint256 _value) public onlyOwner {
		uint256 depositedAmount = depositStore[_code];
		if ( depositedAmount >= _value ) {
			uint256 newAmount = depositedAmount - _value;
      depositStore[_code] = newAmount;
		}
  }

	function getDepositedAmount(string memory _code) public view returns (uint256) {
		return depositStore[_code];
	}
}
