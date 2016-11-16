# Install Guide

These are the installation instructions for the _Currency Exchange_ and _The Answer_ applications.

## Checkout Master

Checkout the Master branch of this repository - it should contain a working example of the demonstrations contained herein.

## Dependencies

You must ensure you have the following dependencies installed.

+ [geth](https://github.com/ethereum/go-ethereum/wiki/geth)
+ [embark](https://github.com/iurimatias/embark-framework)
+ [node](https://nodejs.org/en/)
+ [npm](https://www.npmjs.com/)

## Run the Blockchain

This repository uses the [embark](https://github.com/iurimatias/embark-framework) framework for smart contract deployment. Because it contains two separate examples of blockchain based applications (_Currency Exchanger_ and _The Answer_), you can run the blockchain from two separate places - it doesn't matter which because both places will create a blockchain that will be accessible from http://localhost:8545.

Hence, either change to the directory `src/ExchangeRates`, or to the directory `src/TheAnswer`, then run the blockchain via `embark blockchain`.

## Running the Examples

For the _Currency Exchange_ application, follow the instructions in _CurrencyExchangeDemo.md_. For _The Answer_, follow the instructions in _TheAnswerDemo.md_.
