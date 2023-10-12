import hre from 'hardhat';
import { MONTH } from '@balancer-labs/v2-helpers/src/time';

const BASE_PAUSE_WINDOW_DURATION = MONTH * 3;
const BASE_BUFFER_PERIOD_DURATION = MONTH;

const BaseVersion = { version: 3, deployment: '20230206-composable-stable-pool-v3' };
const factoryVersion = JSON.stringify({ name: 'ComposableStablePoolFactory', ...BaseVersion });
const poolVersion = JSON.stringify({ name: 'ComposableStablePool', ...BaseVersion });
async function main() {
  // Deploying the CustomToken contract
  const ComposableStablePoolFactory = await hre.ethers.getContractFactory('ComposableStablePoolFactory');
  const composableStablePoolFactory = await ComposableStablePoolFactory.deploy(
    '0x62C9149473fdeE1306847A21c3a9Dfe53726cC1C',
    '0xa3ABD069778112f3BCF91D591aeE982EAef895bC',
    factoryVersion,
    poolVersion,
    BASE_PAUSE_WINDOW_DURATION,
    BASE_BUFFER_PERIOD_DURATION
  );

  await composableStablePoolFactory.deployed();
  const composableStablePoolFactoryAddress = composableStablePoolFactory.address;
  // const tokenAddress = "0x4F6A4C51304758c6258a13e8BD9A600440173D74";
  console.log('ComposableStablePoolFactory deployed to:', composableStablePoolFactoryAddress);
  // add verification script here
  // const contractAddress = "0xe2D523Bffd6A81BbbBDD370f8308DE4e8D1671b4"; // Replace with the address of your deployed contract
  //   const newWeightedPoolParams = {
  //     name: "DO NOT USE - Mock Weighted Pool",
  //     symbol: "TEST",
  //     tokens: [0x6e1723460d190b4a092a2c13ba42bcc57d71870b, 0xb625463c9114edb77065e87e067910987e06955e],
  //     normalizedWeights: [800000000000000000, 200000000000000000],
  //     rateProviders: [
  //       0x0000000000000000000000000000000000000000,
  //       0x0000000000000000000000000000000000000000,
  //     ],
  //     assetManagers: [
  //       0x0000000000000000000000000000000000000000,
  //       0x0000000000000000000000000000000000000000,
  //     ],
  //     swapFeePercentage: 1000000000000,
  //   };

  //   const args = [
  //     newWeightedPoolParams,
  //     "0x1da3eB57394e920f2531359132c3212CDD2aDC22",
  //     "0x8042bAf687c2342930558806e8E6A2B946B22a22",
  //     7776000,
  //     2592000,
  //     "0x0000000000000000000000000000000000000000",
  //   ];
  await hre.run('verify:verify', {
    contract: 'contracts/ComposableStablePoolFactory.sol:ComposableStablePoolFactory',
    address: composableStablePoolFactoryAddress,
    constructorArguments: [
      '0x62C9149473fdeE1306847A21c3a9Dfe53726cC1C',
      '0xa3ABD069778112f3BCF91D591aeE982EAef895bC',
      factoryVersion,
      poolVersion,
      BASE_PAUSE_WINDOW_DURATION,
      BASE_BUFFER_PERIOD_DURATION,
    ],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
