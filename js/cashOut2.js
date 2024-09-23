//home.html....cash.js....button2.js...addMoney2.js....utiliteis.js
//Function use>>>>With function
document.getElementById('btn-cash-out-money').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutNumber=getInputFieldValueById('input-cash-out');
    const pinNumber=getInputFieldValueById('input-cash-out-pin');
    //Not a number>>>
    if(isNaN(cashOutNumber)){
        alert('Failed to Cash Out');
        return;
    }
    if(pinNumber===1111){
        const currentBalance=getTextFieldValueById('account-balance');
        // Un able Balance
            if(currentBalance > cashOutNumber){
                alert('You do not have enough money,try again')
                return;
            } 
        const newBalance=currentBalance-cashOutNumber;
        document.getElementById('account-balance').innerText=newBalance;
        // History start
        const outEntry=document.createElement('p');
        outEntry.innerText=`
        CashOut: ${cashOutNumber} Tk. Balance ${newBalance}
        `;
        // Show display
        document.getElementById('history').appendChild(outEntry);
        // History End
    }
    else{
        alert('Wrong your information')
    }
})
