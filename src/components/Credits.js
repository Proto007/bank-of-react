// src/components/Credits.js
// Credits component takes props and renders credits data appropriately 
import AccountBalance from "./AccountBalance";
import Navbar from "./Navbar";

// Array of credits is taken as a prop
const Credits = (props) => {
  // Function credits goes through prop array and returns each item as html <li> 
  let creditsView = () => {
    const { credits } = props;
    //Each of the items in prop array credits is read and displayed in <li>
    return credits.map((credit) => {
      let date = credit.date.slice(0,10); //Get the first 10 characters of date array
      return <li className="items-list" key={credit.id}>{credit.amount} {credit.description} {date}</li>
    }) 
  }
  
  // Render items in the Credits component
  return (
    <div>
      <Navbar/>   
      <AccountBalance accountBalance={props.accountBalance} creditsAmount={props.creditsAmount} debitsAmount={props.debitsAmount}/>
      <h1 className="debit-credit-title">Credits</h1>
      {creditsView()}
      <form className="add-form" onSubmit={props.addCredit}>
        <input type="text" name="description" />
        <input type="number" step={0.01} name="amount" />
        <button type="submit">Add Credit</button>
      </form>
    </div>
  )
}

export default Credits;