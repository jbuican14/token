import React, { useState } from "react";
import { token_backend } from "../../../declarations/token_backend";

function Faucet() {

  const [isDisabled, setIsDisabled] = useState(false); 
  const [btnText, setbtnText] = useState("Gimme gimme"); 

  async function handleClick(event) {
    setIsDisabled(true);
    const result = await token_backend.payOut();
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
      <label>Get your free DAngela tokens here! Claim 10,000 DANG tokens to your account.</label>
      <p className="trade-buttons">
        <button id="btn-payout" onClick={handleClick} disabled={isDisabled}>
         {btnText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
