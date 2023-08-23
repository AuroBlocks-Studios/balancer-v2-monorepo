const hre = require('hardhat');

async function main() {
  // Deploying the CustomToken contract
  // const CustomToken = await hre.ethers.getContractFactory("ERC20Mintable");
  // const customToken = await CustomToken.deploy("DAI", "DAI");

  // await customToken.deployed();

  // console.log("CustomToken deployed to:", customToken.address);
  // add verification script here
  const contractAddress = '0x2c3cf7e4ca18322871f405ece30cf80a9a34eed3'; // Replace with the address of your deployed contract
    const newWeightedPoolParams = {
      name: 'DAI-MTT Pool',
      symbol: 'DAI-MTT',
      tokens: ['0x65e9e95abb4af635da007d508708fa85c208fb9b', '0xb625463c9114edb77065e87e067910987e06955e'],
      normalizedWeights: ['800000000000000000', '200000000000000000'],
      rateProviders: ['0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000'],
      assetManagers: ['0x0000000000000000000000000000000000000000', '0x0000000000000000000000000000000000000000'],
      swapFeePercentage: '1000000000000',
    };

    const args = [
      newWeightedPoolParams,
      "0x1da3eB57394e920f2531359132c3212CDD2aDC22",
      "0x8042bAf687c2342930558806e8E6A2B946B22a22",
      "7776000",
      "2592000",
      "0x0000000000000000000000000000000000000000",
    ];
  // const args = [
  //   '0x1da3eB57394e920f2531359132c3212CDD2aDC22',
  //   '0x8042bAf687c2342930558806e8E6A2B946B22a22',
  //   7776000,
  //   2592000,
  // ];
  await hre.run('verify:verify', {
    contract: 'contracts/WeightedPool.sol:WeightedPool',
    address: contractAddress,
    constructorArguments: args,
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
