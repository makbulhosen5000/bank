    //step 1
document.getElementById('deposit-btn').addEventListener('click',function(){
    //step 2
    const depositField = document.getElementById('deposit-field').value ;
    const depositFieldValue = parseFloat(depositField);
    //step 3
    const deposit = document.getElementById('deposit-total');
    const depositAmount = deposit.innerText;
    const depositTotalString = parseFloat(depositAmount);
    //step 4
    const depositAmountTotal = depositFieldValue + depositTotalString;
    deposit.innerText = depositAmountTotal;

    //step 5
    const amountDeposit = document.getElementById('total-amount');
    const totalAmountDeposit = amountDeposit.innerText;
    const totalAmountDepositString = parseFloat(totalAmountDeposit);
    const depositSum = totalAmountDepositString + depositFieldValue;
     // set the value in Total Balance
    amountDeposit.innerText = depositSum;




})