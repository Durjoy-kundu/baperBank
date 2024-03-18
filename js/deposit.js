document.getElementById('btn-deposite').addEventListener('click', function(){
    
    //s2: get the deposite amount from the deposit input field
    const depositField = document.getElementById('deposite-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat( newDepositAmountString);
    
    //step-3 get the current deposite total
    // for non input use innertext to get the text 
    const depositTotalElement = document.getElementById('deposite-total');
    const previousDepositTotal = depositTotalElement.innerText;
    const currentDepositTotal = parseFloat(previousDepositTotal) + newDepositAmount;


    depositTotalElement.innerText = currentDepositTotal;

    // step-5: calculate balance
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalace = parseFloat(balanceTotalElement.innerText); 
    const curentTotalBalance = previousBalace + newDepositAmount;

    balanceTotalElement.innerText = curentTotalBalance;
    depositField.value = '';

})
    // step - 6 set withdraw and calculate withdraw and total balance
    document.getElementById('btn-withdraw').addEventListener('click', function(){
        const withdrawField = document.getElementById('withdraw-field');
        const newWithdrawAmountString = withdrawField.value;
        const newWithdrawAmount = parseFloat( newWithdrawAmountString);


        const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotalElement.innerText;
    const currentWithdrawTotal = parseFloat(previousWithdrawTotal) + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal ;


    // calculating Balance after withdrawl
    const BalanceTotalElement = document.getElementById('balance-total');
    const PreviousBalace = parseFloat(BalanceTotalElement.innerText); 
    const updatedBalace = PreviousBalace - newWithdrawAmount;

    BalanceTotalElement.innerText = updatedBalace;
    withdrawField.value = '';




   


    



})