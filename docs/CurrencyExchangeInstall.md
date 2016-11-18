# Currency Exchange Install

Below are the instructions for installing the Currency Exchange demonstration. They have been tested and run on Ubuntu 16.04 and MAC OS X.

These instructions are separate from the Virtual Box setup; if you have been supplied a `tutorial.ova` file, then please refer to [VBoxCurrencyExchangeInstall.md](VBoxCurrencyExchangeInstall.md) instead.

## Overview

The Currency Exchange application contains three separate components:

1. The blockchain component that contains the smart contracts. This runs under the [Embark](https://github.com/iurimatias/embark-framework) framework - it is where you start the blockchain running and where you deploy the smart contracts to the blockchain.
2. A frontend Currency Exchange Administrator, running under the [React](https://facebook.github.io/react/) Javascript framework. It runs from a browser, and allows you to fund the exchange smart contract, set exchange rates, view currency exchange events and withdraw deposited currencies.
3. A frontend Currency Exchange application. Again, it uses [React](https://facebook.github.io/react/) and runs from a browser. It allows users to exchange FIAT currencies for Ether.

## 1. Installing the Smart Contract

Make sure the blockchain is running - see `install.md` for instructions.

Change to the Currency Exchange smart contract directory `src/ExchangeRates`.

To deploy the smart contracts, use `embark run`.

## 2. Install the Front End Currency Exchange Administrator

Change to the Currency Exchange Administrator home directory `src/react-exchange-rates`.

Edit the file `app/index.jsx` so the constructor function variables `exchangerAbi` and `contractAddress` contain the correct values. These values will have changed after Step 1 above (actually, the `exchangerAbi` variable may not have changed, but the `contractAddress` variable certainly will have), since you deployed your own versions of the smart contracts to the blockchain. To get the necessary values, open the file `../ExchangeRates/dist/js/app.js` and find the variable `Exchanger` near the end of that file; it begins this way: `Exchanger = new EmbarkJS.Contract`. The `exchangerAbi` value is the array beginning at the square bracket immediately after `({abi: `, up until its closing square bracket, immediately before `, address: '0x`. The `contractAddress` variable is the whole hex' address immediately after the ABI array definition, which will look something similar to: `0xf348821c4ba241bc267ddbfd075d46ac46ebb171`.

Once you have the correct values for `exchangerAbi` and `contractAddress`, you must build the development release of the Currency Exchange Administrator. Firstly, run `npm run copy`, which puts the required html and css into `build/client/public`. Then run `npm run dev`, which sets up a process that continuously watches for changes in the subdirectory `app` and, as long as the changes do not contain errors, deploys them to `build/client/public`. That runs continuously, so it will not return a prompt. So open another terminal window and run `npm run start`, which will fire up a simple web server at `http://localhost:8081`.

## 3. Install the Front End Currency Exchange Application

Change to the Currency Exchange Application home directory `src/react-do-exchange`.

Similar to above, you need to ensure that the constructor variables `exchangerAbi` and `contractAddress`, in the file `app/index.jsx`, contain the correct values. Once that's so, build the package in the same way too, i.e. run `npm run copy` and `npm run dev`. Once you've done that correctly, `npm run start` will fire up a simple web server at `http://localhost:8080`.

## 4. Load the URIs

Open a browser at the following URIs, you should see interfaces allowing you to run the demonstration applications:

- The Currency Exchange Administrator
  - http://localhost:8081
- The Currency Exchanger
  - http://localhost:8080

## 5. Run the Demo's

Follow the instructions in [CurrencyExchangeDemo.md](CurrencyExchangeDemo.md).
