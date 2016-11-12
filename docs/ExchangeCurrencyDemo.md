# Currency Exchange Demonstration

Below are the instructions for running this demonstration:

1. Select the command **Import Appliance** from the VirtualBox _File_ menu. Select the file _AmEXTutorial.ova_ from the USB drive supplied. **Start** the Guest OS.
2. Once the Guest OS has booted, open a browser, and load the following URIs:

  - The Currency Exchange Administrator
    - http://192.168.56.100:8080
  - The Currency Exchanger
    - http://192.168.56.100:8081

## Using the Currency Exchange Administrator

1. Fund the contract from the Administrator account. Why didn't the funding happen instantly?
2. Note the Administrator's amount of Ether on the _account_ page. Set some Exchange Rates. Go back to the _account_ page. What's changed? Why?

## Using the Currency Exchanger

1. Choose an Exchange Rate for a currency we set above and exchange some of that currency. Note what happens to the account's Ether funds. Can you explain why that account has more Ether than you may have expected?
2. If you successfully exchanged the currency, go back to the Currency Exchange Administrator and withdraw some of the currency just deposited.

## Limitations and Bugs

Below are some of the limitations/bugs of the application. There will be others too!

- You can (try) and give more Ether to the contract than the Administrator owns. What happens if you do that?
- The Administrator's Events page only shows events for the current session. It _could_ show **all** events.
- Should the Administrator set the exchange rates?
- Could this application exchange _real_ currency?
- What does the deposit do? How could it behave?
- You can (try) and exchange for more Ether than the contract contains. What happens if you do that?
