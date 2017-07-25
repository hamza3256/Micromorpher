var StorageLib = artifacts.require("./ExternalStorage.sol");
var Deposit = artifacts.require("./DepositDB.sol");
var Forex = artifacts.require("./ForexDB.sol");
var Order = artifacts.require("./OrderDB.sol");
var Exchanger = artifacts.require("./Exchanger.sol");

module.exports = function(deployer) {
  deployer.deploy(StorageLib);
  deployer.link(StorageLib, Deposit);
  deployer.link(StorageLib, Forex);
  deployer.deploy(Deposit);
  deployer.deploy(Forex);
  deployer.deploy(Order);
  deployer.deploy(Exchanger);
};
