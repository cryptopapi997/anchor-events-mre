import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorNew } from "../target/types/anchor_new";

describe("anchor_new", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorNew as Program<AnchorNew>;

  it("Is initialized!", async () => {
    const listenerId = program.addEventListener("myEvent", (event) => {
      console.log("Event is ", event);
    });
    const tx = await program.methods.initialize().rpc();
    console.log("tx", tx);
    await program.removeEventListener(listenerId);
  });
});
