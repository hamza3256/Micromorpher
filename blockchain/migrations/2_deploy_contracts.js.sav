var Deposit = artifacts.require("./DepositDB.sol");
var Forex = artifacts.require("./ForexDB.sol");
var Order = artifacts.require("./OrderDB.sol");
var Exchanger = artifacts.require("./Exchanger.sol");

module.exports = function(deployer) {
  deployer.deploy(Deposit)
    .then(function() {
      return deployer.deploy(Forex)
    })
    .then(function() {
      return deployer.deploy(Order)
    })
    .then(function() {
      return deployer.deploy(Exchanger, Deposit.address, Forex.address, Order.address);
    })
    .catch(function(err){
      console.log(err);
    });
};
