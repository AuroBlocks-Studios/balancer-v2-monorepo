import hre from 'hardhat';
import { MONTH } from '@balancer-labs/v2-helpers/src/time';

const BASE_PAUSE_WINDOW_DURATION = MONTH * 3;
const BASE_BUFFER_PERIOD_DURATION = MONTH;

const BaseVersion = { version: 4, deployment: '20230320-composable-stable-pool-v4' };
const factoryVersion = JSON.stringify({ name: 'ComposableStablePoolFactory', ...BaseVersion });
const poolVersion = JSON.stringify({ name: 'ComposableStablePool', ...BaseVersion });
async function main() {
  // Deploying the CustomToken contract
  // const ComposableStablePoolFactory = await hre.ethers.getContractFactory('ComposableStablePoolFactory');
  // const composableStablePoolFactory = await ComposableStablePoolFactory.deploy(
  //   '0x286381aEdd20e51f642fE4A200B5CB2Fe3729695',
  //   '0xd69300d71133cedba6b317D16A67aa794D57e5C9',
  //   factoryVersion,
  //   poolVersion,
  //   BASE_PAUSE_WINDOW_DURATION,
  //   BASE_BUFFER_PERIOD_DURATION
  // );

  // await composableStablePoolFactory.deployed();
  // const composableStablePoolFactoryAddress = composableStablePoolFactory.address;
  // const tokenAddress = "0x4F6A4C51304758c6258a13e8BD9A600440173D74";
  // console.log('ComposableStablePoolFactory deployed to:', composableStablePoolFactoryAddress);
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
  // await hre.run('verify:verify', {
  //   contract: 'contracts/ComposableStablePoolFactory.sol:ComposableStablePoolFactory',
  //   address: composableStablePoolFactoryAddress,
  //   constructorArguments: [
  //     '0x286381aEdd20e51f642fE4A200B5CB2Fe3729695',
  //     '0xd69300d71133cedba6b317D16A67aa794D57e5C9',
  //     factoryVersion,
  //     poolVersion,
  //     BASE_PAUSE_WINDOW_DURATION,
  //     BASE_BUFFER_PERIOD_DURATION,
  //   ],
  // });
  const newWeightedPoolParams = {
    name: 'Chimp USDC-DAI-USDT Stable Pool',
    symbol: 'USDC-DAI-USDT',
    tokens: [
      '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
      '0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5',
      '0xA219439258ca9da29E9Cc4cE5596924745e12B93',
    ],
    amplificationParameter: '2000',
    rateProviders: [
      '0x0000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000',
      '0x0000000000000000000000000000000000000000',
    ],
    tokenRateCacheDurations: ['21600', '21600', '21600'],
    exemptFromYieldProtocolFeeFlags: [false, false, false],
    swapFeePercentage: '500000000000000',
    owner: '0xBA1BA1ba1BA1bA1bA1Ba1BA1ba1BA1bA1ba1ba1B',
    salt: '0x0000000000000000000000000000000000000000000000000000000000000000',
  };

  const args = [
    {
      vault: '0x286381aEdd20e51f642fE4A200B5CB2Fe3729695',
      protocolFeeProvider: '0xd69300d71133cedba6b317D16A67aa794D57e5C9',
      name: 'Chimp USDC-DAI-USDT Stable Pool',
      symbol: 'USDC-DAI-USDT',
      tokens: [
        '0x176211869cA2b568f2A7D4EE941E073a821EE1ff',
        '0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5',
        '0xA219439258ca9da29E9Cc4cE5596924745e12B93',
      ],
      rateProviders: [
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
        '0x0000000000000000000000000000000000000000',
      ],
      tokenRateCacheDurations: ['21600', '21600', '21600'],
      exemptFromYieldProtocolFeeFlags: [false, false, false],
      amplificationParameter: '2000',
      swapFeePercentage: '500000000000000',
      pauseWindowDuration: BASE_PAUSE_WINDOW_DURATION,
      bufferPeriodDuration: BASE_BUFFER_PERIOD_DURATION,
      owner: '0xBA1BA1ba1BA1bA1bA1Ba1BA1ba1BA1bA1ba1ba1B',
      version: poolVersion,
      // ...newWeightedPoolParams,
    },
  ];
  await hre.run('verify:verify', {
    contract: 'contracts/ComposableStablePool.sol:ComposableStablePool',
    address: '0x90d8053f7e29faaf5189bdce796a516e29f1f5d3',
    constructorArguments: args,
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
