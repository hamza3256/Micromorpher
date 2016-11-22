# Install Guide

These are the installation instructions for the _Currency Exchange_ and _The Answer_ applications.

## Checkout Master

Checkout the Master branch of this repository - it should contain a working example of the demonstrations contained herein.

## Dependencies

You must ensure you have the following dependencies installed.

1. [node](https://nodejs.org/en/)
2. [geth](https://github.com/ethereum/go-ethereum/wiki/geth)
3. [embark](https://github.com/iurimatias/embark-framework)

You will need a text editor. Fyi, these instructions and the code herein was written using [Atom](https://atom.io/ "Atom"), with linters and markdown packages installed.

You will also need a browser for the demonstrations. You may need to clear its cache, so you might wish to consider using a different browser to the one you use for normal browsing. Fyi, the development tools in [Opera](http://www.opera.com/) are really nice.

## Run the Blockchain

This repository uses the [embark](https://github.com/iurimatias/embark-framework) framework for smart contract deployment. Because it contains two separate examples of blockchain based applications (_Currency Exchanger_ and _The Answer_), you can run the blockchain from two separate places - it doesn't matter which because both places will create a blockchain that will be accessible from http://localhost:8545.

Hence, either change to the directory `src/ExchangeRates`, or to the directory `src/TheAnswer`, then run the blockchain via `embark blockchain`.

## Installing the Examples

For the _Currency Exchange_ application, follow the instructions in [CurrencyExchangeInstall.md](CurrencyExchangeInstall.md). For _The Answer_, follow the instructions in [TheAnswerInstall.md](TheAnswerInstall.md).
