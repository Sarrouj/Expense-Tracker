import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";


// eslint-disable-next-line react/prop-types
const Transaction = ({transaction}) => {
    let { transactions , deleteTransaction } = useContext(GlobalContext);
    
  return (
    <>
         <li className={transaction.amount >= 0 ? "plus" : "minus"}>
              {transaction.text}<span>{transaction.amount > 0 ? '+' : '-'}${Math.abs(transaction.amount)}</span>
              <button className="delete-btn" onClick={()=> deleteTransaction(transaction.id)}>x</button>
        </li> 
    </>
  )
}

export default Transaction;
