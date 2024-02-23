import hre from 'hardhat';

async function main() {
  // Deploying the CustomToken contract
  console.log('deploying conytract');
  const AuthorizerFactory = await hre.ethers.getContractFactory('Authorizer');
  const authorizerFactory = await AuthorizerFactory.deploy('0xD19f62b5A721747A04b969C90062CBb85D4aAaA8');
  console.log('authorizerFactory', authorizerFactory.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
