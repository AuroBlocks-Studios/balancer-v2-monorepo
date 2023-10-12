import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-ignore-warnings';
import '@nomicfoundation/hardhat-verify';
import { hardhatBaseConfig } from '@balancer-labs/v2-common';
import { name } from './package.json';

import { task } from 'hardhat/config';
import { TASK_COMPILE } from 'hardhat/builtin-tasks/task-names';
import overrideQueryFunctions from '@balancer-labs/v2-helpers/plugins/overrideQueryFunctions';

task(TASK_COMPILE).setAction(overrideQueryFunctions);

console.log('hardhatBaseConfig', hardhatBaseConfig.compilers[0]);
export default {
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
  },
  solidity: {
    compilers: hardhatBaseConfig.compilers,
    overrides: { ...hardhatBaseConfig.overrides(name) },
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
