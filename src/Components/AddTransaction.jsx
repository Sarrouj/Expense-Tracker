import React from "react";

export const AddTransaction = () => {
  return (
    <h3>
      <form action="">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" placeholder="Enter text ..."/>
        </div>
        <div className="form-control">
            <label htmlFor="amount">Amount <br/>
            (negative - expense, positive - income)
            </label>
            <input type="number" placeholder="Enter amount ..."/>
        </div>
      </form>
    </h3>
  );
};
