//home.html....cash.js....button2.js...addMoney2.js....utiliteis.js
//Function use>>>>With function
document.getElementById('btn-cash-out-money').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutNumber=getInputFieldValueById('input-cash-out');
    const pinNumber=getInputFieldValueById('input-cash-out-pin');
    if(pinNumber===1111){
        const currentBalance=getTextFieldValueById('account-balance');
        const newBalance=currentBalance-cashOutNumber;
        document.getElementById('account-balance').innerText=newBalance;
    }
    else{
        alert('Wrong your information')
    }
})
