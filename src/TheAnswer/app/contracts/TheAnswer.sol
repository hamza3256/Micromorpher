pragma solidity ^0.4.2;

// The Answer
// Steve Huckle

contract TheAnswer {

  string private question;
  uint256 constant answer = 42;

  event Question(string question, uint256 answer);

  function TheAnswer () {
	   question = "";
  }

  function setQuestion(string _question) public {
  	question = _question;
  	Question(question,answer);
  }
}
