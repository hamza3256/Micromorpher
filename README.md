# Currency Exchange

Turn FIAT currencies into ETHER.

## Dependencies 

+ [geth](https://github.com/ethereum/go-ethereum/wiki/geth)
+ [embark](https://github.com/iurimatias/embark-framework)
+ [node](https://nodejs.org/en/)
+ [npm](https://www.npmjs.com/)

## Install Guide

Install all the dependencies then download this repository.

## Running the Example

Checkout the Master branch - it should always contain a working example of the Currency Exchanger application. 

The Currency Exchange application contains three seperate components:

1. The blockchain component that contains the smart contracts. This runs under the [Embark](https://github.com/iurimatias/embark-framework) framework - it is where you start the blockchain running and where you deploy the smart contracts to the blockchain.
2. A frontend Currency Exchange Administrator, running under [React](https://facebook.github.io/react/), whereby you can fund the exchange smart contract, set exchange rates, view currency exchange events and withdraw deposited currencies
3. A frontend Currency Exchange application, where users can exchange FIAT currencies for Ether

The examples below should be run in the order given. 

### 1. Run the Blockchain

Change to the blockchain home directory `src/ExchangeRates`. 

To run the blockchain, use `embark blockchain`.

To deploy the smart contracts, use `embark run`.

### 2. Run the Currency Exchange Administrator

Change to the Currency Exchange Administrator home directory `src/react-exchange-rates`.

Edit the file `app/index.jsx` so the constructor function variables `exchangerAbi` and `contractAddress` contain the correct values. These values will have changed after Step 1 above (actually, the `exchangerAbi` variable may not have changed, but the `contractAddress` variable certainly will have), since you deployed your own versions of the smart contracts to the blockchain. To get the necessary values, open the file `../ExchangeRates/dist/js/app.js` and find the variable `Exchanger` near the end of that file; it begins this way: `Exchanger = new EmbarkJS.Contract`. The `exchangerAbi` value is the array beginning at the square bracket immediately after `({abi: `, up until its closing square bracket, immediately before `, address: '0x`. The `contractAddress` variable is that whole hex' address immediately after the ABI array definition, which will look something similar to: `0xf348821c4ba241bc267ddbfd075d46ac46ebb171`.

Once you have the correct values for `exchangerAbi` and `contractAddress`, you must build the development release of the Currency Exchange Administrator. The easiest way to do that is to run `npm run dev`. That sets up a process that continuously watches for changes in the subdirectory `app` and, as long as the changes do not contain errors, deploys them to `build/client/public`. You should also run `npm run copy`, which puts the required html and css into `build/client/public`. Once you have deployed to `build/client/public`, run `npm run start`, which will fire up a simple web server on port 8081 of your local machine. Finally, load the address `http://localhost:8081` into a browser. As long as you've followed the steps above correctly, that should give you an interface to the Currency Exchange Administrator. 

### 3. Run the Currency Exchanger

Change to the Currency Exchange Administrator home directory `src/react-do-exchange`.

Similar to above, you need to ensure that the constructor variables `exchangerAbi` and `contractAddress`, in the file `app/index.jsx`, contain the correct values. Once that's so, build the package in the same way too, i.e. run `npm run dev` and `npm run copy`. Once you've done that correctly, `npm run start` will fire up a simple web server at `http://localhost:8080`. Loading that address into a browser will fire up the user interface to exchange currencies.




