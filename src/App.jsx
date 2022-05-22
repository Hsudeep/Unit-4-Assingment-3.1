import Paymentcard from './components/Paymentcard.jsx';
import './App.css';
import cardDetails from "./data/cardDetails.json"
function App() {
  return (
    <Paymentcard cardDetails={cardDetails}></Paymentcard>
  );
}

export default App;
