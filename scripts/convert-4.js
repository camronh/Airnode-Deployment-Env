const fs = require("fs");

async function main() {
  let config = require("../config/config.json");
  if (!config.chains) throw new Error("No config in config folder");
  
  for (let endpoint of config.triggers.rrp) delete endpoint.testable;

  for (let endpoint of config.ois[0].endpoints) delete endpoint.testable;

  for (let chain of config.chains) chain.maxConcurrency = 5;
  config.nodeSettings.skipValidation = true;

  config.triggers.http = config.triggers.rrp;
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
