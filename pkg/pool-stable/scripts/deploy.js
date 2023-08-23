const hre = require('hardhat');

async function main() {
  // Deploying the CustomToken contract
  // const CustomToken = await hre.ethers.getContractFactory('ComposableStablePoolFactory');
  // const factoryContract = await CustomToken.attach('0xeDaAd5aca403033D3d20A39779aEfB2469ab3eeB');
  // const customToken = await CustomToken.deploy("MantleTest Token", "MTT");

  // await customToken.deployed();

  // console.log("CustomToken deployed to:", customToken.address);
  // add verification script here
  // const args = [
  //   '0x1da3eB57394e920f2531359132c3212CDD2aDC22',
  //   '0x8042bAf687c2342930558806e8E6A2B946B22a22',
  //   '{"name":"ComposableStablePoolFactory","version":4,"deployment":"20230320-composable-stable-pool-v4"}',
  //   '{"name":"ComposableStablePool","version":4,"deployment":"20230320-composable-stable-pool-v4"}',
  //   7776000,
  //   2592000,
  // ];
  const mockPool = {
    name: 'DO NOT USE - Mock Composable Stable Pool',
    symbol: 'TEST',
    tokens: ['0x02bc4e375768f6e4eec3b5E8FF5F015c356c873d', '0x4F6A4C51304758c6258a13e8BD9A600440173D74'],
    amplificationParameter: '100',
    rateProviders: ['0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000'],
    tokenRateCacheDurations: [0, 0],
    exemptFromYieldProtocolFeeFlags: [false, false],
    swapFeePercentage: '1000000000000',
    owner: '0x0000000000000000000000000000000000000000',
    ZERO_BYTES32: '0x0000000000000000000000000000000000000000000000000000000000000000',
  };
  // const createPool = await factoryContract.create(
  //   mockPool.name,
  //   mockPool.symbol,
  //   mockPool.tokens,
  //   mockPool.amplificationParameter,
  //   mockPool.rateProviders,
  //   mockPool.tokenRateCacheDurations,
  //   mockPool.exemptFromYieldProtocolFeeFlags,
  //   mockPool.swapFeePercentage,
  //   mockPool.owner,
  //   mockPool.ZERO_BYTES32
  // );
  // await createPool.wait();
  console.log({
    vault: '0x1da3eB57394e920f2531359132c3212CDD2aDC22',
    protocolFeeProvider: '0x8042bAf687c2342930558806e8E6A2B946B22a22',
    pauseWindowDuration: '7776000',
    bufferPeriodDuration: '2592000',
    version: '{"name":"ComposableStablePool","version":4,"deployment":"20230320-composable-stable-pool-v4"}',
    ...mockPool,
  });
  await hre.run('verify:verify', {
    contract: 'contracts/ComposableStablePool.sol:ComposableStablePool',
    address: '0xAf81Ca8882178e7C139f53810309a2730a3D1C14',
    constructorArguments: [
      {
        vault: '0x1da3eB57394e920f2531359132c3212CDD2aDC22',
        protocolFeeProvider: '0x8042bAf687c2342930558806e8E6A2B946B22a22',
        pauseWindowDuration: '7776000',
        bufferPeriodDuration: '2592000',
        version: '{"name":"ComposableStablePool","version":4,"deployment":"20230320-composable-stable-pool-v4"}',
        ...mockPool,
      },
    ],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
