import React from 'react';
import { Bar } from "react-chartjs-2";
import "./stockAnalysis.css"

const StockAnalysis = ({ stockPrice,quantity,currentPrice }) => {
// variables
  let x=currentPrice-stockPrice;
  let absolute=(currentPrice-stockPrice);
  let result=quantity*(currentPrice-stockPrice)
  let per=(x/stockPrice)*100;
  let percentage=per.toFixed(1);
  let backgroundColor,color;

  //style script to change background depending upon result 
  if(percentage<-50){
      backgroundColor="rgb(145, 7, 7)";
      color="rgb(219, 21, 21)"
  }else{
    if(percentage>0){
      backgroundColor="green"
      color="rgb(21, 219, 21)"
    }else{
      backgroundColor="teal"
      color="teal"
    }
  } 


  return (
    <div className="analysis"  style={{backgroundColor:backgroundColor}}>
       <h1>Your Stock Result</h1>
    <div className="analysis-container">
      <div className="bar">
      <Bar 
       data = {{
        labels : ['User','Current'],
        legend: {
          fontColor: "red"
        },
        datasets:[{
            barThickness: 50,
            label: 'Stock price Rs',
            data: [stockPrice,currentPrice],
            Color:"red",
            backgroundColor: [
                '#1E3163',
                '#FF4C29',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
            
        }]
      }}
        options={{
            indexAxis: 'y',
            responsive:true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                  categoryPercentage: 1.0,
                  barPercentage: 1.0
              }]
          }
        }}
      />
      <div className="stock-details">
      <div className="left">
      <p>Your Stock Price        :<span>  {stockPrice}</span></p>
      <p>Total Count of Stock :<span>  {quantity}</span></p>
      <p>Current Stock Price   :<span>  {currentPrice}</span></p>
      </div>
      <div className="right">
      <p>Absolute Value (per stock) :<span>  {Math.abs(absolute)}</span></p>
      <p>Total Percentage                  :<span>  {percentage}%</span></p>
      <p>Total gain/loss Amount      :<span>  {result}</span></p>
      </div>
      </div>
      <div className="result" style={{color:color}}>
        <p>{(percentage>=-50) &&((percentage<0)?"Your Stock in Lose ⤵️":"Your Stock in Profit/Safe Zone ⤴️ "  )}</p>
        <p>{(percentage<-50) && "Your Stock in  heavy lose 👎"}</p>
      </div>
      </div>
    </div>
    </div>
  )
}

export default StockAnalysis
