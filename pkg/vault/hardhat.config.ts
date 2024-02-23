import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-ignore-warnings';
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
  warnings: hardhatBaseConfig.warnings,
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
    },
    obscuro: {
      url: 'https://testnet.ten.xyz/v1/',
      accounts: ['0x7bc017153d44911bbb2e295d32b6ce0426fa50be6530d0e8a7cde322390882df'],
    },
  },
};
