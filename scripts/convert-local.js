const fs = require("fs");

async function main() {
  let config = require("../config/config.json");
  if (!config.chains) throw new Error("No config in config folder");
  config.nodeSettings.cloudProvider = {
    type: "local",
  };
  fs.writeFileSync("./config/config.json", JSON.stringify(config, null, 2));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
