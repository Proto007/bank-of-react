// src/components/Credits.js
import AccountBalance from "./AccountBalance";
import Navbar from "./Navbar";

const Credits = (props) => {
  let creditsView = () => {
    const { credits } = props;
    return credits.map((credit) => {
      let date = credit.date.slice(0,10);
      return <li className="items-list" key={credit.id}>{credit.amount} {credit.description} {date}</li>
    }) 
  }
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