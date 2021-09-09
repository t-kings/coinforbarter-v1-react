import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useCoinForBarter, CoinForBarterButton } from "coinforbarter-v1-react";

function App() {
  const config = {
    publicKey: "xxxxxxxxxxxx",
    txRef: "xxxxxxxxxxx",
    amount: 10000,
    currency: "NGN",
    customer: "example@example.com",
    customerFullName: "John Doe",
    callback: (data: any) => {
      console.log(data);
    },
    currencies: ["BTC", "DOGE"],
  };

  const pay = useCoinForBarter(config);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <CoinForBarterButton
          text="CoinForBarter Component Button"
          config={config}
        />

        <button
          onClick={(e) => {
            e.preventDefault();
            pay();
          }}
        >
          Custom Pay
        </button>
      </header>
    </div>
  );
}

export default App;
