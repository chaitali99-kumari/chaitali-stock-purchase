var intialPrice = document.querySelector("#intial-price");
var quantity = document.querySelector("#quantity");
var currentPrice = document.querySelector("#current-price");
var submit = document.querySelector("#submit");
var outputBox = document.querySelector("#output-box");

function showMessage(message){
   outputBox.innerHTML = message;
 
}

function calculateProfitAndLoss(intial , quantity , current){
  if(intial && quantity && current){
    if(~~intial>~~current){
      var loss = (intial-current)*quantity; 
      var lossPercentage = (loss/intial)*100;
      showMessage(`Hey the loss is ${loss.toFixed(2)} and the percentage is ${lossPercentage.toFixed(2)}%`);
    }
    else if(~~intial < ~~current){
      var profit = (current-intial)*quantity;
       var profitPercentage = (profit/intial)*100;
       showMessage(`Hey the profit is ${profit.toFixed(2)} and the percentage is ${profitPercentage.toFixed(2)}%`);
    }
    else {
      showMessage("no pain no gain and no gain no pain");
    }
  }
  else {
    showMessage("Plz enter all the field");
  }
}
  function submitHandler(){
    var ip = intialPrice.value;
    var qty = quantity.value;
    var curr = currentPrice.value;
    calculateProfitAndLoss(ip,qty,curr);
   
  }
  submit.addEventListener("click", submitHandler);