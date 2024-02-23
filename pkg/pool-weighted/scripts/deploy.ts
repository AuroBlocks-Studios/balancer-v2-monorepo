import hre from 'hardhat';
import { MONTH } from '@balancer-labs/v2-helpers/src/time';

const BASE_PAUSE_WINDOW_DURATION = MONTH * 3;
const BASE_BUFFER_PERIOD_DURATION = MONTH;
async function main() {
  // Deploying the CustomToken contract
  const vault = '0x9140084f70C3DF3ed0Cf7a13c7617CC7a45C3E25';
  const protocolFeePercentagesProvider = '0xd69300d71133cedba6b317D16A67aa794D57e5C9';
  const WeightedPoolFactory = await hre.ethers.getContractFactory('WeightedPoolFactory');
  const weightedPoolFactory = await WeightedPoolFactory.deploy(
    vault,
    protocolFeePercentagesProvider,
    BASE_PAUSE_WINDOW_DURATION,
    BASE_BUFFER_PERIOD_DURATION
  );

  await weightedPoolFactory.deployed();
  const weightedPoolFactoryAddress = weightedPoolFactory.address;
  // const tokenAddress = "0x4F6A4C51304758c6258a13e8BD9A600440173D74";
  console.log('CustomToken deployed to:', weightedPoolFactoryAddress);
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
  //   contract: 'contracts/WeightedPoolFactory.sol:WeightedPoolFactory',
  //   address: weightedPoolFactoryAddress,
  //   constructorArguments: [
  //     '0x286381aEdd20e51f642fE4A200B5CB2Fe3729695',
  //     '0xd69300d71133cedba6b317D16A67aa794D57e5C9',
  //     BASE_PAUSE_WINDOW_DURATION,
  //     BASE_BUFFER_PERIOD_DURATION,
  //   ],
  // });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
