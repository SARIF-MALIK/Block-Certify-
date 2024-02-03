const Migrations = artifacts.require("Aadhaar");

module.exports = function (deployer) {
    deployer.deploy(Migrations);
};
