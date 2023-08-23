const hre = require('hardhat');

async function main() {
  // Deploying the CustomToken contract
  // const CustomToken = await hre.ethers.getContractFactory("ERC20Mintable");
  // const customToken = await CustomToken.deploy("MantleTest Token", "MTT");

  // await customToken.deployed();

  // console.log("CustomToken deployed to:", customToken.address);
  // add verification script here
  await hre.run('verify:verify', {
    contract: 'contracts/ProtocolFeesCollector.sol:ProtocolFeesCollector',
    address: '0x9593734278F8dbe1d65e7204539E45Ad54B04098',
    constructorArguments: ['0x1da3eB57394e920f2531359132c3212CDD2aDC22'],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
