import { useState } from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import './App.css';
import Header from "./components/Header/Header";
import StockAnalysis from "./components/StockAnalysis/StockAnalysis";
import StockInput from './components/StockInfo/StockInput';

function App() {
 //state to send as props
  const [ stockPrice,setStockPrice ]=useState(0);
  const [ quantity,setQuantity ]=useState(1)
  const [ currentPrice,setCurrentPrice ]=useState(0)

  //function to change state
  const getInput=(x,y,z)=>{
    setStockPrice(x);
    setQuantity(y)
    setCurrentPrice(z)
  }
  
  return (
    <div className="App">
     <Header />
     <BrowserRouter>
     <Switch>
     <Route path="/"  exact component={()=><StockInput 
     getInput={getInput}
     />} />
      <Route path="/analysis" component={()=><StockAnalysis 
    stockPrice={stockPrice}
    quantity={quantity}
    currentPrice={currentPrice}
     />}/>
     </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
