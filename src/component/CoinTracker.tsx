import { useCallback, useEffect, useMemo, useState } from "react";

interface USDObject {
    ath_date:string;
    price:number;
}

interface quotesObject {
    USD: USDObject;
}

interface coinObject {    
    beta_value?: number;
    first_data_at?: string;
    id?: string;
    last_updated?: string;
    max_supply?: number;
    name?: string;
    quotes: quotesObject;
    rank?: number;
    symbol?: string;
    total_supply?: number;
}

const CoinTracker = () => {
  const [loaded, setLoaded] = useState(false);
  const [coinList, setCoinList] = useState<coinObject[]>([]);

  const fetchCoinData = useCallback(() => {
    if (!loaded) {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((res) => res.json())
        .then(json => {
            setLoaded(true);
            setCoinList(json);
        });
    }
  }, [loaded]);

  useEffect(() => {
    fetchCoinData();
  }, []);

  useEffect(()=>{
    console.log(coinList);
  }, [coinList]);

  return (
    <div>
        <h1>Coins!</h1>
        {loaded ? <ul>
            {coinList.slice(0, 20).map((item, index) => <li key={index}>{item.name}({item.symbol}): {item.quotes.USD.price}</li>)}
            </ul>
            : 
         <strong>Loading...</strong>}
    </div>
  )
}

export default CoinTracker