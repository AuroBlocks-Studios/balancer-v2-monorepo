import hre from 'hardhat';
const SECOND = 1;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = DAY * 30;
async function main() {
  // Deploying the CustomToken contract
  console.log('deploying conytract');
  const authorizer = '0x8f60119E7b6D0691097232e8F25E19961623ad27';
  const weth = '0xA4F6268f8f6CA4D9160C584338587B515AfF7B88';
  const pauseWindowDuration = 3 * MONTH;
  const bufferPeriodDuration = MONTH;
  const VaultContract = await hre.ethers.getContractFactory('Vault');
  // const vaultContract = await VaultContract.deploy(authorizer, weth, pauseWindowDuration, bufferPeriodDuration);
  // console.log('vault', await vaultContract.getAddress());
  const vaultAddress = '0x9140084f70C3DF3ed0Cf7a13c7617CC7a45C3E25';
  const contract = VaultContract.attach(
    vaultAddress // The deployed contract address
  );
  console.log('contract', contract);
  const feeCollector = await contract.getProtocolFeesCollector();
  console.log('contract', feeCollector);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
