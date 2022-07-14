const hre = require("hardhat");

const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("ReceiverToken");
  const nftContract = await nftContractFactory.deploy("Relayer", "REL", "");

  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
