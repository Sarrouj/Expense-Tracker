import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map((transaction) => transaction.amount);
    const balance = amount.reduce((acc, currentValue) => {return acc += currentValue}, 0);
   
  return (
    <>
        <h4>Your Balance</h4>
        <h1 id="balance">{balance >= 0 ? '+' : '-'}${Math.abs(balance).toFixed(2)}</h1>
    </>
  )
}

export default Balance;
