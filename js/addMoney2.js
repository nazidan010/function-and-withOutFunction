//home.html....cash.js....button2.js...addMoney2.js....utiliteis.js
//Function use>>>>With function
document.getElementById('btn-confirm').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney=getInputFieldValueById('input-add-money');
    const inputPin=getInputFieldValueById('input-pin');
    //wrong way >>>
    if(inputPin===1111){
        const balance=getTextFieldValueById('account-balance');
        // console.log(balance,addMoney);
        const newBalance=balance+addMoney;
        // console.log(newBalance);
        document.getElementById('account-balance').innerText=newBalance;
        //add to transaction entry>>>>>
        const entry=document.createElement('p');
        entry.innerText=`CashIn: ${addMoney} Tk. Balance: ${newBalance}`;
        // console.log(entry);
        // should be a common function>>>>
        document.getElementById('history').appendChild(entry);
    }
    else{
        alert('Failed to add the money');
    }
});