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
      url: 'https://testnet.ten.xyz/v1/query/?token=afc3f08ccdeadbb08f44d6ac25c2d18aef755402&a=0xD19f62b5A721747A04b969C90062CBb85D4aAaA8',
      accounts: [],
    },
  },
};
