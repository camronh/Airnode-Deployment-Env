const fs = require("fs");
const {
  deriveSponsorWalletAddress,
  deriveAirnodeXpub,
} = require("@api3/airnode-admin");

const { ethers } = require("ethers");
// Read Secrets.env file

function getMnemonic(secretsStr) {
  let mnemonicLine;
  for (let line of secrets.split("\n")) {
    if (line.toLowerCase().includes("mnemonic")) mnemonicLine = line;
  }
  if (!mnemonicLine) throw new Error("No mnemonic found in secrets.env");
  let mnemonicWithQuotes = mnemonicLine.split("=")[1].trim();
  return mnemonicWithQuotes.replace(/"/g, "");
}

async function getAirnodeData(mnemonic) {
  const airnodeXpub = await deriveAirnodeXpub(mnemonic);
  const airnodeWallet = new ethers.Wallet.fromMnemonic(mnemonic);
  const sponsorWalletAddress = await deriveSponsorWalletAddress(
    airnodeXpub,
    airnodeWallet.address,
    airnodeWallet.address
  );

  const airnodeData = {
    sponsorWalletAddress,
    airnodeXpub,
    airnodeWallet: airnodeWallet.address,
  };

  console.log({ airnodeData });
  return airnodeData;
}

const secrets = fs.readFileSync("./config/secrets.env", "utf8");
const mnemonic = getMnemonic(secrets);
getAirnodeData(mnemonic);
