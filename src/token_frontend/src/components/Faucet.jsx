import React, { useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import { canisterId, createActor } from "../../../declarations/token_backend";

function Faucet({userPrincipal}) {

  const [isDisabled, setIsDisabled] = useState(false); 
  const [btnText, setbtnText] = useState("Gimme gimme"); 

  async function handleClick(event) {
    setIsDisabled(true);

    const authClient = await AuthClient.create();
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions:{
        identity,
      },
    });
 
    const result = await authenticatedCanister.payOut();
    setbtnText(result);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 DANG tokens to {userPrincipal}.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
         {btnText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
