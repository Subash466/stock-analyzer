import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./stockInfo.css"

const StockInput = ({ getInput }) => {
  //local state
  const [ userStock,setUserStock ]=useState(0);
  const [ stockQuantity,setStockQuantity ]=useState(0);
  const [ currentPrice,setCurrentPrice ]=useState(0);

  //variable
  const userStockError=document.getElementById("userStockError");
  const quantityError=document.getElementById("quantityError");
  const currentStockError=document.getElementById("currentStockError")
  
  //statement for remove error msg
  if(userStock && !isNaN(userStock)){
    userStockError.textContent=""
  }
  if(stockQuantity && !isNaN(stockQuantity)){
    quantityError.textContent=""
  }
  if(currentPrice && !isNaN(currentPrice)){
    currentStockError.textContent=""
  }
  
  //function to check user input 
 const check=()=>{
    if(userStock<=0 || isNaN(userStock)){
      userStockError.textContent="*enter valid stock value";
      document.getElementById("stockPrise").value="";
      document.getElementById("stockPrise").focus();
  }else if(stockQuantity<=0 || isNaN(stockQuantity)){
      quantityError.textContent="*enter valid stock quantity";
      document.getElementById("quantity").value="";
      document.getElementById("quantity").focus();
  }else{
      currentStockError.textContent="*enter correct stock value";
      document.getElementById("tdyPrice").value="";
      document.getElementById("tdyPrice").focus();
  }
 
  }

  return (
    <div className="input">
      <div className="input-container">
      <form>
      <h3>Enter Details About Your Stock</h3>
       <label htmlFor="stockPrice">
        <p>Enter Your Stock Price :</p>
       <input type="text" name="stockPrise" id="stockPrise" onChange={(e)=>setUserStock(e.target.value)} />
       <div className="error">
        <p id="userStockError"></p>
       </div>
       </label>
       <label htmlFor="quantity">
       <p>Enter Total Count Stock :</p>
       <input type="text" name="quantity" id="quantity" onChange={(e)=>setStockQuantity(e.target.value)} />
       <div className="error">
       <p id="quantityError"></p>
       </div>
       </label>
       <label htmlFor="tdyPrice">
       <p>Enter Current Stock Price :</p>
       <input type="text" name="tdyPrice" id="tdyPrice" onChange={(e)=>setCurrentPrice(e.target.value)} />
       <div className="error">
       <p id="currentStockError"></p>
       </div>
       </label>
       {(userStock > 0) && (stockQuantity > 0) && (currentPrice > 0) ?
      <Link to="/analysis">
          <button onClick={()=>getInput(userStock,stockQuantity,currentPrice)}>Next</button>
      </Link>:
     <Link to="/">
      <button onClick={check}>Next</button>
      </Link>
      }  
     </form>
    </div>
    </div>
  )
}

export default StockInput
