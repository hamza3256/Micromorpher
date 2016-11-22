# VirtualBox Install

These are the installation instructions for running the _The Answer_ and _Currency Exchange_ applications from within VirtualBox.

These instructions assume you have access to the file `Sussex.ova`. If you do not, please email s.huckle@sussex.ac.uk.

## Dependencies

Download and install [VirtualBox](https://www.virtualbox.org).

## Important Note

If your mouse disappears while you are using VirtualBox, press the defined Host key - on a MAC this will probably be the command key, directly to the left of the spacebar. On Linux, it should be the Alt key, again, to the left of the spacebar.

## 1. Import the VirtualBox Appliance

Select the command **Import Appliance** from the VirtualBox _File_ menu. Select the file `Sussex.ova` from the USB drive supplied.

## 2. Create the Network

Create a `Host-only Network`. On MAC OS X, Go to `VirtualBox VM` on the main menu bar, select `Preferences`, `Network`, `Host-only Networks`.

![vboxnet0](../images/vboxnet0.png)

Edit the default vboxnet0, and make sure the DHCP Server is disabled.

![DHCP Server](../images/dhcpServer.png)

## 2. Installing the Demo's

 For _The Answer_ demonstration, follow the instructions in [VBoxTheAnswerInstall.md](VBoxTheAnswerInstall.md). For the _Currency Exchange_ demo', follow the instructions in [VBoxCurrencyExchangeInstall.md](VBoxCurrencyExchangeInstall.md).
