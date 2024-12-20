import React, { useState } from "react";
import { Principal } from '@dfinity/principal'; 
import { token_backend } from "../../../declarations/token_backend"

function Balance() {

  const [inputValue, setInputValue] = useState("");
  const [balance, setBalance] = useState('');
  const [cryptoSymbol, setCryptoSymbol] = useState('');
  
  async function handleClick() {
    console.log("Balance Button Clicked", inputValue);
    // convert principle import from Motoko 
    const principal = Principal.fromText(inputValue);
    const balance = await token_backend.balanceOf(principal);
    const symbol = await token_backend.getSymbol();
    setBalance(balance.toLocaleString());
    setCryptoSymbol(symbol)
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
     { cryptoSymbol &&  <p>This account has a balance of {balance} {cryptoSymbol}.</p>}
    </div>
  );
}

export default Balance;
