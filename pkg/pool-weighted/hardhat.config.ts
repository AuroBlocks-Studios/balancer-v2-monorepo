import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-ignore-warnings';
import '@nomiclabs/hardhat-waffle';
import '@nomicfoundation/hardhat-verify';
import { hardhatBaseConfig } from '@balancer-labs/v2-common';
import { name } from './package.json';

import { task } from 'hardhat/config';
import { TASK_COMPILE } from 'hardhat/builtin-tasks/task-names';
import overrideQueryFunctions from '@balancer-labs/v2-helpers/plugins/overrideQueryFunctions';

task(TASK_COMPILE).setAction(overrideQueryFunctions);

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    mantle: {
      url: 'https://rpc.testnet.mantle.xyz',
      accounts: ['0xda40f1017c83bd10a2defe5672e8278378af4145c09bd7cc996094f6611281f8'],
      // gasPrice: 170000000000, // 170 gwei
    },
  },
  solidity: {
    compilers: hardhatBaseConfig.compilers,
    overrides: { ...hardhatBaseConfig.overrides(name) },
  },
  warnings: hardhatBaseConfig.warnings,
  etherscan: {
    apiKey: {
      mantle: '9de66cbc-188a-471f-9237-da29bd0936ff',
    },
    customChains: [
      {
        network: 'mantle',
        chainId: 5001,
        urls: {
          apiURL: 'https://explorer.testnet.mantle.xyz/api',
          browserURL: 'https://explorer.testnet.mantle.xyz',
        },
      },
    ],
  },
};
