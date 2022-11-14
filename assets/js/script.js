var date = document.getElementById('currentDay');

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
var textEntry = $('.event');
function sumbitAgendaItem(){
    for (var i = 0; i < textEntry.length; i++){
        var timeSlot = textEntry[i].id;
        localStorage.setItem(timeSlot, textEntry[i].value);
        console.log(textEntry[i].value);
        
    }
    textEntry.value = localStorage.getItem(timeSlot);
    
}
$('.saveBtn').on('click', sumbitAgendaItem);



// function getAgendaItem(){
//     var storedItem = localStorage.getItem(timeSlot);
//     if (storedItem !== null){
//         textEntry[i].value = storedItem;
//     } else{
//         textEntry[i].value = ''
//     };
// }