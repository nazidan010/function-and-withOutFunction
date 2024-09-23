// const cashOutMoney=document.getElementById('btn-cash-out-money').addEventListener('click', function(event){
//     event.preventDefault();
//     //Cash Out Event
//     const cashOutNumber=document.getElementById('input-cash-out').value;
//     const cashOut=parseFloat(cashOutNumber);
//     // Display
//     const currentBalance=document.getElementById('account-balance').innerText;
//     const subtractionBalance=parseFloat(currentBalance);
//     // Pin Number
//     const cashOutPin=document.getElementById('input-cash-out-pin').value;
//     if(cashOutPin==='1111'){
//         // Multiple
//         const subtraction=subtractionBalance-cashOut;
//         // Display Update
//         const displBalance=document.getElementById('account-balance').innerText=subtraction;
//         console.log(displBalance);
//     }
//     else{
//         alert('Wrong Your Phone Number and password');
//     }
// });