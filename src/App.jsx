import './App.css';
import { AddTransaction } from './Components/AddTransaction';
import Balance from './Components/Balance';
import { Header } from './Components/Header';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';

function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
  )
}

export default App;
