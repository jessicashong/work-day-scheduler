var date = document.getElementById('currentDay');
var timeSlots = document.querySelector('.container');
var textEntry = document.querySelector('.event');
var saveBtn = document.querySelector('.saveBtn');

var currentDate = moment();
$("#currentDay").text(currentDate.format('dddd, MMMM Do'));

textEntry.value = localStorage.getItem('agenda');

function sumbitAgenda(event){
    event.preventDefault();
    textEntry = $('textarea[name="text"]').val();
    console.log(textEntry);

    localStorage.setItem('agenda', textEntry);

}
saveBtn.addEventListener('click', sumbitAgenda);


