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
      <h1 className="page-title">Credits</h1>
      <AccountBalance accountBalance={props.accountBalance}/>
      {creditsView()}
      <form onSubmit={props.addCredit}>
        <input type="text" name="description" />
        <input type="number" name="amount" />
        <button type="submit">Add Debit</button>
      </form>
    </div>
  )
}

export default Credits;