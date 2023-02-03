const { createMint } = require("@solana/spl-token");
const {
  clusterApiUrl,
  Connection,
  Keypair,
  LAMPORTS_PER_SOL,
} = require("@solana/web3.js");
const dotenv = require("dotenv");
dotenv.config();

let secretKey = Uint8Array.from([
  141, 106, 180, 110, 233, 213, 252, 137, 243, 97, 1, 244, 12, 66, 254, 29, 26,
  61, 57, 87, 48, 86, 18, 187, 98, 248, 179, 251, 111, 246, 78, 149, 57, 18,
  166, 76, 126, 188, 72, 112, 243, 78, 153, 189, 101, 191, 207, 175, 219, 202,
  254, 28, 76, 74, 3, 169, 40, 96, 102, 250, 30, 67, 13, 226,
]);

const payer = Keypair.fromSecretKey(secretKey);
const mintAuthority = Keypair.fromSecretKey(secretKey);
const freezeAuthority = Keypair.fromSecretKey(secretKey);

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

async function main() {
  const mint = await createMint(
    connection,
    payer,
    mintAuthority.publicKey,
    freezeAuthority.publicKey,
    9 // We are using 9 to match the CLI decimal default exactly
  );

  console.log(mint.toBase58());
}

main();
