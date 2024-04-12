import { useState } from 'react'
import './App.css'
import Input from './Components/Input'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
function App() {
  let [amount, setAmount]= useState(0)
  let [from, setFrom]= useState("usd")
  let [to, setTo]= useState("inr")
  let [convertedAmount, setConvertedAmount]= useState(0)
  const currencyInfo = useCurrencyInfo(from)
  const options= Object.keys(currencyInfo)
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert= ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-[#c9c5ba] bg-no-repeat">
      <div className="w-full">
        <div className="w-full max-w-lg mx-auto border border-gray-60 rounded-lg px-5 py-5 bg-[#97b1a6]">
          <form onSubmit={(e) => {e.preventDefault(); convert()}}>

            {/* from input box */}
            <div className="w-full mb-1">
              <Input label="From" amount={amount} currencyOptions={options} onCurrencyChange={(currency)=> setAmount(amount)}
              selectCurrency={from} onAmountChange={(amount)=> setAmount(amount)}/>
            </div>

            {/* swap button */}
            <div className="relative w-full h-0.5">
              <button type="button" onClick={swap} className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-[#407076] text-white px-2 py-0.5">
                swap
              </button>
            </div>

            {/* to input box */}
            <div className="w-full mt-1 mb-4">
              <Input label="To" amount={convertedAmount} currencyOptions={options} onCurrencyChange={(currency)=> setTo(currency)}
              selectCurrency={from} amountDisable/>
            </div>

             {/* convert button */}
            <button type="submit" className="w-full bg-[#407076] text-white px-4 py-3 rounded-lg">
              Convert 
            </button>

          </form>
        </div>
      </div>
    </div>
);
}

export default App
