var date = document.getElementById('currentDay');
var timeSlots = document.querySelector('.container');


var currentDate = moment();
$("#currentDay").text(currentDate.format('dddd, MMMM Do'));

