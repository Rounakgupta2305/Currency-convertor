import { data } from "autoprefixer"
import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    let [data, setData] = useState({})
    useEffect(()=>{
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.4.12/v1/currencies/${currency}.json`)
      .then((response)=> response.json())
      .then((response)=> setData(response[currency]))
    }, [currency])
    return data;
}

export default useCurrencyInfo;