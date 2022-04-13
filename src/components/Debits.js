// src/components/Debits.js
import AccountBalance from "./AccountBalance";
import Navbar from "./Navbar";

const Debits = (props) => {
  let debitsView = () => {
    const { debits } = props;
    return debits.map((debit) => {
      let date = debit.date.slice(0,10);
      return <li className="items-list" key={debit.id}>{debit.amount} {debit.description} {date}</li>
    }) 
  }
  return (
    <div>
      <Navbar/>
      <AccountBalance accountBalance={props.accountBalance} creditsAmount={props.creditsAmount} debitsAmount={props.debitsAmount}/>
      <h1 className="debit-credit-title">Debits</h1>
      {debitsView()}
      <form className="add-form" onSubmit={props.addDebit}>
        <input type="text" name="description" />
        <input type="number" step={0.01} name="amount" />
        <button type="submit">Add Debit</button>
      </form>
    </div>
  )
}

export default Debits;