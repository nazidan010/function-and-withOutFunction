//home.html....cash.js....button2.js...addMoney2.js....utiliteis.js
//Function use>>>>With function
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    showSectionById('add-money-page');
});
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    showSectionById('cash-out-page');
});
document.getElementById('transaction').addEventListener('click', function(event){
    event.preventDefault();
    showSectionById('history');
});