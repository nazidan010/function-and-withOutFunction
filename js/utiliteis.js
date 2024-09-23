//home.html....cash.js....button2.js...addMoney2.js....utiliteis.js
//Function use>>>>With function

// Input Field
function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
    const inputPin=document.getElementById(id).value;
    const inputPinNumber=parseFloat(inputPin); 

    return inputNumber,inputPinNumber;
}
// Text Field
function getTextFieldValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);
    return textNumber;
}
// Transaction
// Add Money
function showSectionById(id){
    document.getElementById('add-money-page').classList.add('hidden');
    document.getElementById('cash-out-page').classList.add('hidden');
    document.getElementById('history').classList.add('hidden');
    //all button as hidden
    document.getElementById(id).classList.remove('hidden');

}
