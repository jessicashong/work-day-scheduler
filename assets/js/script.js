var date = document.getElementById('currentDay');
var textEntry = document.querySelector('.event');
var saveBtn = document.querySelector('.saveBtn');


//date element on jumbotron
var currentDate = moment();
$("#currentDay").text(currentDate.format('dddd, MMMM Do'));

//change color of time block based on time of day
function checkTime(){
    //current time using momentjs
    var currentTime = moment().format('H');
    console.log(moment().format('H'));
    //loop through textarea ids to change color based on time of day
    var timeBlockEl = $('.event');
    for (var i = 0; i < timeBlockEl.length; i++) {
        var timeIndexId = timeBlockEl[i].id;
        var elementId = document.getElementById(timeBlockEl[i].id);
        //styling already listed in stylesheet--just add class
        if (timeIndexId < currentTime){
            $(elementId).addClass('past');
        } else if (timeIndexId > currentTime){
            $(elementId).addClass('future');
        } else {
            $(elementId).addClass('present');
        }
    }}
checkTime();

//store value in local storage when save button is clicked
function storeAgenda(){
    var storedItem = localStorage.getItem('agenda');
    console.log(localStorage);

}


function sumbitAgendaItem(){
    var text = JSON.stringify(textEntry);
    localStorage.setItem('agenda', text);
}
saveBtn.addEventListener('click', sumbitAgendaItem);




// textEntry = $('textarea[name="text"]').val();
// console.log(textEntry);

// localStorage.setItem('agenda', JSON.stringify(storedItem));
