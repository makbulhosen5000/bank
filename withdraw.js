    //step 1
document.getElementById('withdraw-btn').addEventListener('click',function(){
    //step 2
    const withdraw =  document.getElementById('withdraw-field').value;
    const withdrawField = parseFloat(withdraw);
    //step 3
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawTotalAmount = withdrawAmount.innerText;
    const withdrawAmountString = parseFloat(withdrawTotalAmount);
    //step 4
    const withdrawSumAmount = withdrawAmountString + withdrawField;
    //set the value in withdraw field
    withdrawAmount.innerText = withdrawSumAmount;
    //step 5
    const totalAmount = document.getElementById('total-amount');
    const totalWithdrawAmount = totalAmount.innerText;
    const totalAmountWithdrawString = parseFloat(totalWithdrawAmount);
    const totalWithdraw = totalAmountWithdrawString - withdrawField;
    // set the value in Total Balance
    totalAmount.innerText = totalWithdraw;


})