import React, {useEffect, useState} from "react";
import InvestmentItem from "./InvestmentItem";
import './styles.css';

function Investments(){
    const [figures, setFigures] = useState([]);
    useEffect(() => {
        const fetchFigures = async () => {
          try {
            const response = await fetch(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
            );
            const data = await response.json();
              setFigures(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFigures();
}, []);

return(
  <div>
    {figures.map((item)=>(
        <InvestmentItem
        name = {item.name}
        id={item.id}
        date={item.ath_date}
        photo={item.image}
        supply={item.total_supply}
        price={item.current_price}/> 
    ))}
  </div>
)

}export default Investments;