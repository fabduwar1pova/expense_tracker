const ExpenseTracker = () => {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <h1 className="title"> Expense Tracker </h1>

          <div className="texts">
            <h3 className="grey">YOUR BALANCE </h3>
            <h1>$0.00</h1>
          </div>
          <div className="balances">
            <div className="income">
              <h3 className="grey">INCOME</h3>
              <h1 className="green"> $0.00 </h1>
            </div>
            <div className="expense">
              <h3 className="grey">EXPENSE</h3>
              <h1 className="red"> $0.00</h1>
            </div>
          </div>

          <h1>History</h1>
          <div className="history">
            <p className="grey"> No transaction </p>
          </div>

          <h1> Add New Transaction </h1>

          <div className="transaction">
            <p className="write" >Text </p>
            <input
              type="text"
              placeholder="Enter text . . . "
              className="input"
            ></input>
            <p className="write"  >Amount (+ income , - expense ) </p>
            <input
              type="text"
              placeholder="Enter amount . . ."
              className="input"
            ></input>
          </div>
          <button className="btn"> Add Transaction </button>
        </div>
      </div>
    </>
  );
};

export default ExpenseTracker;
