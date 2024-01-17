import { useContext, useState} from "react"
import { GlobalContext } from "../Context/GlobalState"


const AddTransaction = () => {
    const {transactions, deleteTransactions, addTransaction} = useContext(GlobalContext);
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    function onSubmit(e){
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random()*10000),
            text : text,
            amount : Number(amount)
        };
        addTransaction(newTransaction);
    }
    
  return (
    <>
        <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=> setText(e.target.value)} id="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br /> (negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" placeholder="Enter amount..." />
        </div>
        <button className="btn" >Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction
