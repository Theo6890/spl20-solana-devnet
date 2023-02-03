import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { Spl20SolanaDevnet } from "../target/types/spl20_solana_devnet";

describe("spl20-solana-devnet", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Spl20SolanaDevnet as Program<Spl20SolanaDevnet>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
