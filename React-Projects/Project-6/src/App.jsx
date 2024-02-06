import { useState } from "react";
import { InputBox } from "./components";
import useInfoCurrency from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converted, setConverted] = useState(0);
  const currencyInfo = useInfoCurrency(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    // const temp = from;
    setFrom(to);
    setTo(from);
    // const temp2 = converted;
    setConverted(amount);
    setAmount(converted);
  };

  const convert = () => {
    setConverted(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/futuristic-digital-rupee-money-concept-background_1017-41184.jpg?w=740&t=st=1706950834~exp=1706951434~hmac=6c2a932abd2b5a324413388e71a5f53b403bc9fb8f8a55ece698c7027857e620")`,
      }}
    >
      <div className="flex-grow">
        <h1 className="text-5xl font-bold text-white text-center">
          CURRENCY CONVERTER
        </h1>
      </div>

      <div className="w-full max-w-md mx-40 border border-gray-60 rounded-lg backdrop-blur-sm bg-white/30 flex-shrink-0 p-16">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="w-full mb-1">
            <InputBox
              label="From"
              amount={amount}
              onAmountChange={(amount) => setAmount(amount)}
              onCurrencyChange={(currency) => setFrom(currency)}
              selectCurrency={from}
              currencyOption={options}
            />
          </div>
          <div className="relative w-full h-0.5">
            <button
              type="button"
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
          </div>
          <div className="w-full mt-1 mb-4">
            <InputBox
              label="To"
              amount={converted}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              currencyOption={options}
              amountDisabled={true}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
