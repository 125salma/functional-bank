function getInputValue(inputId) {
  debugger;
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);

  //clear input field
  inputField.value = '';
  return amountValue;

}

function updateTotalField(totalFieldId, amount) {
  //debugger;
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);
  //console.log(totalText);

  totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance(){
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {
  const balanceTotal = document.getElementById('balance-total');
  /* const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText); */
  const previousBalanceTotal =getCurrentBalance();

  if (isAdd == true) {
    balanceTotal.innerText = previousBalanceTotal + amount;
  }
  else {
    balanceTotal.innerText = previousBalanceTotal - amount;
  }

}


document.getElementById('deposit-button').addEventListener('click', function () {
  /* const inputField = document.getElementById('deposit-input');
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText); */

  //get and update deposite total
  /* const depositTotal =document.getElementById('deposit-total');
  const depositTotalText=depositTotal.innerText;
   const PreviousDepositeTotal=parseFloat(depositTotalText);
  console.log(depositTotalText);
  
  depositTotal.innerText = PreviousDepositeTotal+amountValue; */



  //update balance
  /* const balanceTotal =document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  
  balanceTotal.innerText=previousBalanceTotal+depositeAmount;
   */
  const depositeAmount = getInputValue('deposit-input');
  if(depositeAmount>0){
    updateTotalField('deposit-total', depositeAmount);
    updateBalance(depositeAmount, true);
  }
  

})

//handel withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
  //   const withdrawInput = document.getElementById('withdraw-input');
  //   const withdrawAmountText = withdrawInput.value;
  //   const WithdrawAmount = parseFloat(withdrawAmountText);
  
  //get and update withdraw total

  /*const withdrawTotal= document.getElementById('withdraw-total');
  const WithdrawTotalText =  withdrawTotal.innerText;
  const previousWithdrawAmount = parseFloat(WithdrawTotalText);
  withdrawTotal.innerText = previousWithdrawAmount+WithdrawAmount;
  */



  //update balance after withdraw
  /*  const withdrawBalanceTotal = document.getElementById('balance-total');
   const withdrawBalanceAmount = withdrawBalanceTotal.innerText;
   const previousWithdrawBalanceAmountT = parseFloat(withdrawBalanceAmount);
  
    withdrawBalanceTotal.innerText=previousWithdrawBalanceAmountT - withdrawAmount; */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount> 0 && withdrawAmount<currentBalance){
      updateTotalField('withdraw-total', withdrawAmount);
      updateBalance(withdrawAmount, false);
    }
    if(withdrawAmount > currentBalance){
      console.log("You can not withdraw more than what you have in your account");
    }
    
  //clear input field
  //withdrawInput.value ='';

})