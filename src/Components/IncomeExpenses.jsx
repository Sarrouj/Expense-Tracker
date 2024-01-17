import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const amount = transactions.map((transaction) => transaction.amount);
    const income = amount.filter((transaction) => { return transaction > 0}).reduce((acc, cuurentValue) => { return acc + cuurentValue}, 0);
    const expense = amount.filter((transaction) =>  { return transaction < 0}).reduce((acc, cuurentValue) => { return acc + cuurentValue}, 0);
    console.log(expense);
    console.log(income);
  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${income.toFixed(2)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${Math.abs(expense.toFixed(2))}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses
