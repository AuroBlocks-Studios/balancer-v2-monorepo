import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-ignore-warnings';
import '@nomicfoundation/hardhat-verify';
import 'ten-hardhat-plugin';

import { hardhatBaseConfig } from '@balancer-labs/v2-common';
import { name } from './package.json';

import { task } from 'hardhat/config';
import { TASK_COMPILE } from 'hardhat/builtin-tasks/task-names';
import overrideQueryFunctions from '@balancer-labs/v2-helpers/plugins/overrideQueryFunctions';

task(TASK_COMPILE).setAction(overrideQueryFunctions);

export default {
  solidity: {
    compilers: hardhatBaseConfig.compilers,
    overrides: { ...hardhatBaseConfig.overrides(name) },
  },
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: `https://rpc.goerli.linea.build`,
      },
      allowUnlimitedContractSize: true,
    },
    linea_testnet: {
      url: `https://rpc.goerli.linea.build/`,
    },
    obscuro: {
      url: 'https://testnet.ten.xyz/v1/',
      accounts: ['0x7bc017153d44911bbb2e295d32b6ce0426fa50be6530d0e8a7cde322390882df'],
    },
  },
  warnings: hardhatBaseConfig.warnings,
  etherscan: {
    apiKey: {
      linea_testnet: '1Z71UV31BRUVD9ZXPI66CEIWTR64G7GUCH',
    },
    customChains: [
      {
        network: 'linea_testnet',
        chainId: 59140,
        urls: {
          apiURL: 'https://api-testnet.lineascan.build/api',
          browserURL: 'https://goerli.lineascan.build',
        },
      },
    ],
  },
};
