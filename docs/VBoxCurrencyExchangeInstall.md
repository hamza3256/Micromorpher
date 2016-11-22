# VirtualBox Currency Exchange Install

Below are the instructions for running the Currency Exchange demonstration from within VirtualBox.

It is assumed you have already followed the instructions in [VBoxInstall.md](VBoxInstall.md).

## 1. Start the Guest OS

If it is not already running, **Start** the Guest OS `Sussex`.

![Start](../images/vboxStart.png)

## 2. Login

Once the Guest OS has booted, you will see a login prompt. Login to the account `sussex`:

![Login](../images/login.png)

- Password: h3ll0w0rld

## 3. Deploy the Contract

Load a terminal window by launching `LXTerminal`  from the `Application Launch Bar`:

![LXTerminal](../images/LXTerminal.png)

Change directory to `/home/sussex/gitrepos/ExchangeCurrency/src/ExchangeRates` (`cd /home/sussex/gitrepos/ExchangeCurrency/src/ExchangeRates`). The smart contracts for this application have been written for you (they are much too complex to write in a single tutorial session); you just need to deploy them to the blockchain with the command `embark run`. That loads a console window telling you the status of the deployment. While deploying, the contract will show `pending`. The console will display contract addresses once they have been successfully deployed (it may take up to 5 minutes or more). In a moment we will need the address of the `Exchanger` contract for our application's front end.

## 4. Load Atom (Text Editor)

Launch `atom` from the `Application Launch Bar`:

![Atom](../images/atom.png)

Open the folder `/home/sussex/gitrepos/ExchangeCurrency`:

![ExchangeCurrency Directory](../images/exchangeDirectory.png)

## 5. Install the Front End Currency Exchange Administrator

Change to the Currency Exchange Administrator home directory `src/react-exchange-rates`.

The [React](https://facebook.github.io/react/) based front end has been written for you.

However, you still need to ensure the front end has the correct value for its contract address. Open the file `src/react-exchange-rates/app/index.jsx` in `atom`; the constructor function variable `contractAddress` is where the code stores the address. To get the necessary value, open the file `/home/sussex/gitrepos/ExchangeCurrency/src/ExchangeRates/chains.json` (from within the `LXTerminal` window, run `cat /home/sussex/gitrepos/ExchangeCurrency/src/ExchangeRates/chains.json`). The `contractAddress` variable requires the value of the `address` json key for the contraxct `Exchanger`- it will look something similar to:`0x11bcf0e4dfeacd5d68a05180ceee4d50cc7cf720`. Copy that value to the `contractAddress` variable and save the file. There is a daemon running on the VirtualBox Guest OS that will notice the change you just made. It will build the front end application for you.

## 6. Install the Front End Currency Exchange Application

Change to the Currency Exchange Application home directory `src/react-do-exchange`.

As above, you still need to ensure the front end has the correct value for its contract address. Open the file `src/react-do-exchange/app/index.jsx` and make sure the `contractAddress` variable has the same value for its address as above. Save the file. There is a daemon running on the VirtualBox Guest OS that will notice the change you just made. It will build the front end application for you.

## 6. Load the URIs

Load a web browser by launching `Web Browser` from the `Application Launch Bar`:

![Web Browser](../images/webBrowser.png)

Load the following URIs:

  - The Currency Exchange Administrator
    - http://blockchain.sussex.ac.uk:8081
  - The Currency Exchanger
    - http://blockchain.sussex.ac.uk:8080

## 3. Run the Demo's

Follow the instructions in [CurrencyExchangeDemo.md](CurrencyExchangeDemo.md).
