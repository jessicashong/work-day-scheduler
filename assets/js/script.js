var date = document.getElementById('currentDay');
var timeSlots = document.querySelector('.container');


var currentDate = moment();
console.log(moment().format('MMMM Do YYYY'))
$("#currentDay").text(currentDate.format('MMMM Do YYYY'));

