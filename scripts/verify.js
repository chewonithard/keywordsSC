const main = async () => {
  await hre.run("verify:verify", {
    // address: "0x8304b1cE2bF7fB0958f641aDA015A16Bfe92e485",
    // constructorArguments: ["Relayer", "REL", ""],
    address: "0xfba3D37e82d19a583125aa15e251a2eb1d7B84d5",
  });
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
