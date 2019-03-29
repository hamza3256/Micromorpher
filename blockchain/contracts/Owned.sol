pragma solidity ^0.5.0;

contract Owned {

  address payable owner;

  constructor() public { owner = msg.sender; }

  modifier onlyOwner {
    require(
        msg.sender == owner,
        "Only owner can call this function."
    );
    _;
  }

  function transferOwnership(address payable _newOwner) public onlyOwner {
      owner = _newOwner;
  }
}
