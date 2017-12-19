# Micromorpher

[![Travis build](	https://img.shields.io/travis/glowkeeper/Micromorpher.svg?style=flat-square)](https://travis-ci.org/glowkeeper/Micromorpher)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](/docs/prs.md)
[![License LGPL-3.0](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](/docs/COPYING.txt)

This is the repository for **Micromorpher**, which is a prototype distributed application (dApp) that has the intention of converting small amounts of £s into Ether, using blockchain smart contracts.

The original test **Micromorpher** application was the result of the academic paper called, [Towards a post-cash society: An application to convert fiat money into a cryptocurrency](http://dx.doi.org/10.5210/fm.v22i3.7410), by Steve Huckle, Martin White and Rituparna Bhattacharya, of the [University of Sussex Informatics Department](http://www.sussex.ac.uk/informatics/).

The dApp discussed in the paper was just a demo - the intention now is to move it into production (however, beforehand, that means progressing through PayPal's developer test api and Ethereum's test network [rinkeby](https://www.rinkeby.io)).  

If you would like to contribute (perhaps by helping with [future work](#1), or by working on some of the [open issues](https://github.com/glowkeeper/Micromorpher/issues)), then please email s dot huckle at sussex dot ac dot uk.

## Test Demonstrator

(coming sometime in the future)

The instructions below allow you to use a demo of **Micromorpher**, which is running on [ipfs](https://ipfs.io/) and Ethereum's test network, [rinkeby](https://www.rinkeby.io). Both [ipfs](https://ipfs.io/) and [rinkeby](https://www.rinkeby.io) are distributed, peer-to-peer technologies, so by utilising them, **Micromorpher** is itself wholly distributed.

**Micromorpher** is alpha software. [MetaMask](https://metamask.io/) (discussed below) is beta software. In other words, both have their 'wrinkles'! Hence, please be patient; however, if you are having problems with the demo, please email s dot huckle at sussex dot ac dot uk - he will be pleased to help.

### Prerequisites

To run the demo, you must first install the browser plugin [MetaMask](https://metamask.io/), which allows you to sign transactions on [Ethereum](https://www.ethereum.org/) networks. **Micromorpher** is running on the [rinkeby](https://www.rinkeby.io) test Ethereum network, so once you've installed [MetaMask](https://metamask.io/), please set it to use [rinkeby](https://www.rinkeby.io).

To perform currency conversions in **Micromorpher**, you will need some test Ether. To get some, follow the instructions at the [rinkeby faucet](https://www.rinkeby.io/#faucet).

### Running the Demo

Load the live demo of **Micromorpher** by loading the following URL into your browser: (coming sometime in the future)

[URL to go here](http://an.ipfs.address.io)

 If you have not followed the prerequisites above (if you have not installed [MetaMask](https://metamask.io/) and set it to use [rinkeby](https://www.rinkeby.io)), then **Micromorpher** will not load.

### Demo Screenshot

(coming soon)

## Installing **Micromorpher** Locally

The instruction below enable you to run **Micromorpher** on a local, private, Ethereum test network (via [Ganache](https://github.com/trufflesuite/ganache)).

### Getting Started

After cloning this repository, install the prerequisites listed and follow the instructions below to get the project up and running on your local machine (for development and testing purposes).

### Prerequisites

After cloning this repository, download and install the dependencies (if you have not already done so):

- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Ganache](https://github.com/trufflesuite/ganache)
- [Truffle](https://github.com/trufflesuite/truffle)
- [http-server](https://www.npmjs.com/package/http-server)

### Install

Follow the instructions in the [Ganache](https://github.com/trufflesuite/ganache) repository for downloading and installing Ganache; tl;dr - you need to clone the [Ganache](https://github.com/trufflesuite/ganache) repository, then run `npm install && npm start`.

In the **Micromorpher** repository's home directory, type `npm install`. That should install everything listed in [package.json](/package.json), which form the components of the REACT-based web frontend to this application.

Now, publish the contracts to your local blockchain (via [Ganache](https://github.com/trufflesuite/ganache)):

1. Change directory to the [Ganache](https://github.com/trufflesuite/ganache) repository.
2. Start [Ganache](https://github.com/trufflesuite/ganache) by typing `npm start`.
3. Ensure [Ganache](https://github.com/trufflesuite/ganache) is running on [http://localhost:8545](http://localhost:8545) (you may need to change its settings to do so).
4. Change to the **Micromorpher** repository's home directory.
5. Change to the **Micromorpher** directory [/blockchain/contracts](/blockchain/contracts), and type `truffle migrate`.
6. Edit the **Micromorpher** source file [/app/utils/contractHandler.jsx](/app/utils/contractHandler.jsx) so that the contract static variables contain the addresses generated by `truffle migrate`, above.

Now create the web application:

1. Change to the **Micromorpher** repository's home directory.
2. Build the REACT frontend by typing `npm run watch`.
3. Copy some needed resources to the build directory by typing `npm run copy`.
4. Startup an instance of [http-server](https://www.npmjs.com/package/http-server) by typing `npm run start`.

Then fire up a browser and go to the URL [http://localhost:8081](http://localhost:8081)

### Built Using...

- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Ganache](https://github.com/trufflesuite/ganache)
- [Truffle](https://github.com/trufflesuite/truffle)
- [REACT](https://reactjs.org/)

## Contributing

Have a look at [future work](#1), [open issues](https://github.com/glowkeeper/Micromorpher/issues), or visit **Micromorpher's** [Kanban board](https://trello.com/b/Pv0N8POE/micromorpher) for some ideas as to how you may contribute. However, other suggestions are very welcome!
<a name="1">&nbsp;</a>
## Future work

1. Integrate with PayPal
2. Implement anti-money laundering (AML) and know your customer (KYC) regulations (see [bitcoin forum](https://bitcointalk.org/index.php?topic=454795.0) on AML/KYC)
3. Get exchange rates via a public api, such as [coinbase](https://developers.coinbase.com/api/v2)
4. Do exchange
5. Lock certain functionality based on account type - i.e. only show admin menu if the account type is an admin
6. ...see [open issues](https://github.com/glowkeeper/Micromorpher/issues))
7. other ideas welcome ;)

## Credits

Original author: Steve Huckle, s dot huckle at sussex dot ac dot uk.

## Licensing

GNU General Public License v3.0

See [COPYING](/docs/COPYING.txt) to see the full text.
