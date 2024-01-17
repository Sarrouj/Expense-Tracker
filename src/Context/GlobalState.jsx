import { createContext, useReducer } from "react"

const initialState = {
    transactions : []
}

export const GlobalContext = createContext();

function Reducer(state, action){
    switch(action.type){
        case 'remove' :
            return {
                transactions : state.transactions.filter((transaction) => transaction.id !== action.value)
            };
        case 'addTransaction':
            return {
                transactions : [...state.transactions, action.value]
            };
        default:
            return state;
    }
}

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    function deleteTransaction(id){
        dispatch({type : 'remove', value: id});
    }

    function addTransaction(transaction){
        dispatch({type : 'addTransaction', value: transaction})
    }

    return (
        <GlobalContext.Provider value={{transactions : state.transactions, deleteTransaction, addTransaction}}>
            {children}
        </GlobalContext.Provider>
    )
}