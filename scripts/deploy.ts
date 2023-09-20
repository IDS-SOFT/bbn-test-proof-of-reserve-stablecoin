import { ethers } from "hardhat";

const _name = "My_Stablecoin";
const _symbol = "mSTB";
const _decimals = 8;
const _initialSupply = 1000;
const _reserveToken = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199";
const _initialReserveRatio = "10"; //Percentage

async function main() {

  const stablecoin = await ethers.deployContract("Stablecoin", [_name, _symbol, _decimals, _initialSupply, _reserveToken, _initialReserveRatio]);

  await stablecoin.waitForDeployment();

  console.log("Stablecoin deployed to : ",await stablecoin.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
