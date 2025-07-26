import { useEffect, useState } from "react";


function usecurrencyinfo(currency){
    const[data,setdta] = useState({})
    useEffect(() => {
        fetch(`https://api.exchangerate.host/ ${currency}convert?from=USD&to=INR`)
        .then((res) => res.json())
        .then((res) => setdta([currency]))
        console.log(data);
        
    } , [currency])
    console.log(data);
    return data
    
}
export default usecurrencyinfo