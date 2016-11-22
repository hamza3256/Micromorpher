# VirtualBox _The Answer_ Demonstration

Below are the instructions for running _The Answer_ from within VirtualBox.

It is assumed you have already followed the instructions in [VBoxInstall.md](VBoxInstall.md).

## 1. Start the Guest OS

**Start** the Guest OS `Sussex`.

![Start](../images/vboxStart.png)

## 2. Login and Load Atom (Text Editor)

Once the Guest OS has booted, you will see a login prompt, asking you to login to the account `sussex`:

![Login](../images/login.png)

- Password: h3ll0w0rld

Launch `atom` from the `Application Launch Bar`:

![Atom](../images/atom.png)

Open the folder `/home/sussex/gitrepos/ExchangeCurrency`:

![ExchangeCurrency Directory](../images/exchangeDirectory.png)

## 3. Write the Smart Contract

Open the file `src/TheAnswer/app/contracts/TheAnswer.sol` and edit it so it looks like this:

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

## 4. Deploy the Contract

Login to the VirtualBox Guest OS `bitnami-nodejs`:

- Login: bitnami
- Password: h3ll0w0rld

Change to the directory `share/ExchangeCurrency/src/TheAnswer` (`cd /share/ExchangeCurrency/src/TheAnswer`). The command `embark run` will deploy the contract to the running blockchain.

## 5. Install the Front End

Because you have mounted the Virtual Box's shared drive on your local machine, the changes below can be done there. However, if you prefer, you can continue to work on the VirtualBox Guest OS. If so, the files mentioned below are relative to `/share`. Otherwise, the files are relative to where you mounted them under `Finder`/`Nautilus`/`File Manager`.

The [React](https://facebook.github.io/react/) based front end has been written for you. However, you still need to edit the file `ExchangeCurrency/src/react-the-answer/app/index.jsx` so the constructor function variables `answerAbi` and `contractAddress` contain the correct values. To get the necessary values, open the file `../TheAnswer/dist/js/app.js` and find the variable `TheAnswer` near the end of that file; it begins this way: `TheAnswer = new EmbarkJS.Contract`. The `answerAbi` value is the array beginning at the square bracket immediately after `({abi: `, up until its closing square bracket, immediately before `, address: '0x`. The `contractAddress` variable is the whole hex' address immediately after the ABI array definition, which will look something similar to: `0x11bcf0e4dfeacd5d68a05180ceee4d50cc7cf720`.

Save the file. There is a daemon running on the VirtualBox Guest OS that will notice the changes you just made. It will build the front end application for you.  

## 6. Load the URI

On your local machine, open a browser at the following URI:

- http://192.168.56.100:8082

## 7. Run the Demo

Follow the instructions in [TheAnswerDemo.md](TheAnswerDemo.md).
