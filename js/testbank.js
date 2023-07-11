document.getElementById('deposit-button').addEventListener('click',function(){

    const depositAmount = document.getElementById('deposit-input');
    const depositInput = depositAmount.value;
    const amountValue = parseFloat(depositInput);
    console.log(amountValue);
  //get and update deposite total
  const depositTotal =document.getElementById('deposit-total');
  const depositTotalText=depositTotal.innerText;
   const PreviousDepositeTotal=parseFloat(depositTotalText);
  
  depositTotal.innerText = PreviousDepositeTotal+amountValue; 

    depositAmount.value = '';
//get and updadte balance total
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText =previousBalanceTotal+amountValue;

     
})
document.getElementById('withdraw-button').addEventListener('click',function(){
 const withdrawAmount = document.getElementById('withdraw-input');
 const withdrawInput = withdrawAmount.value;
 const withdrawAmountValue = parseFloat(withdrawInput);
 
   //get and update withdraw total

 const withdrawTotal = document.getElementById('withdraw-total');
 const withdrawTotalText = withdrawTotal.innerText;
 previousWithdraw = parseFloat(withdrawTotalText);
 withdrawTotal.innerText = previousWithdraw+withdrawAmountValue;

 withdrawAmount.value = '';

  //update balance after withdraw
 const withdrawBalanceAmount = document.getElementById('balance-total');
 const withdrawBalanceText = withdrawBalanceAmount.innerText;
 const withdrawPreviousBalance = parseFloat(withdrawBalanceText);
 withdrawBalanceAmount.innerText = withdrawPreviousBalance-withdrawAmountValue;
 

})