//https://eth-goerli.g.alchemy.com/v2/Nmhg_phWBZ0Ykx6MmFcnvR3JtzDbsLhn
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Nmhg_phWBZ0Ykx6MmFcnvR3JtzDbsLhn',
      accounts: [''],
    },
  },
};