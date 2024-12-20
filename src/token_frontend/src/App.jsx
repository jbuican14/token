import { useState } from 'react';
import { token_backend } from 'declarations/token_backend';
import Header from "./components/Header";
import Faucet from "./components/Faucet";
import Balance from "./components/Balance";
import Transfer from "./components/Transfer";
function App() {

  
    return (
      <div id="screen">
        <Header />
        <Faucet />
        <Balance />
        <Transfer />
      </div>
    );

}

export default App;
