// src/components/Debits.js
// Debits component takes props and renders credits data appropriately 
import AccountBalance from "./AccountBalance";
import Navbar from "./Navbar";

// Array of debits is taken as a prop
const Debits = (props) => {
  // Function debitsView goes through prop array and returns each item as html <li>
  let debitsView = () => {
    const { debits } = props;
    //Each of the items in prop array debits is read and displayed in <li>
    return debits.map((debit) => {
      let date = debit.date.slice(0,10); //Get the first 10 characters of date array
      return <li className="items-list" key={debit.id}>{debit.amount} {debit.description} {date}</li>
    }) 
  }

    // Render items in the Debits component
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