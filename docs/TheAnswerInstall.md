# The Answer Install

Below are the instructions for installing _The Answer_ demonstration. They have been tested and run on Ubuntu 16.04 and MAC OS X.

These instructions are separate from the Virtual Box setup; if you have been supplied a `tutorial.ova` file, then please refer to `VBoxTheAnswerInstall.md` instead.

## Overview

_The Answer_ contains two separate components:

1. The blockchain component that contains the smart contracts. This runs under the [Embark](https://github.com/iurimatias/embark-framework) framework - it is where you start the blockchain running and where you deploy the smart contract to the blockchain.
2. A front end, running under the [React](https://facebook.github.io/react/) Javascript framework. It runs from a browser, and allows you to get the answer to any question.

## Dependency

Make sure the blockchain is running - see `Install.md` for instructions.

## 1. Write the Smart Contract

Change to the directory `src/TheAnswer`.

Open the file `app/contracts/TheAnswer.sol` and edit it so it looks like this:

    pragma solidity ^0.4.2;

    // The answer to any question.

    contract TheAnswer {

      string private question;
      uint256 constant answer = 42;

      event Question(string question, uint256 answer);

      function TheAnswer () {
         question = "";
      }

      function setQuestion(string thisQuestion) public {
        question = thisQuestion;
        Question(question,answer);
      }
    }

Save the file.

## 2. Deploy the Smart Contract

To deploy the smart contracts, use `embark run`.

## 3. Install the Front End

Change to _The Answer_ front end home directory `src/react-the-answer`.

The [React](https://facebook.github.io/react/) based front end has been written for you. However, you still need to edit the file `app/index.jsx` so the constructor function variables `answerAbi` and `contractAddress` contain the correct values. To get the necessary values, open the file `../TheAnswer/dist/js/app.js` and find the variable `TheAnswer` near the end of that file; it begins this way: `TheAnswer = new EmbarkJS.Contract`. The `answerAbi` value is the array beginning at the square bracket immediately after `({abi: `, up until its closing square bracket, immediately before `, address: '0x`. The `contractAddress` variable is the whole hex' address immediately after the ABI array definition, which will look something similar to: `0x11bcf0e4dfeacd5d68a05180ceee4d50cc7cf720`.

Once you have the correct values for `answerAbi` and `contractAddress`, you must build the development release of _The Answer_. Firstly, run `npm run copy`, which puts the required html and css into `build/client/public`. Then run `npm run dev`, which sets up a process that continuously watches for changes in the subdirectory `app` and, as long as the changes do not contain errors, deploys them to `build/client/public`. That runs continuously, so it will not return a prompt. So open another terminal window and run `npm run start`, which will fire up a simple web server at `http://localhost:8082`.

## 4. Load the URI

Open a browser at the following URI:

- http://localhost:8082

## 5. Run the Demo

Follow the instructions in `TheAnswerDemo.md`.
