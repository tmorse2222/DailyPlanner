var currentDay = Date;
var dateDisplay = $(`#currentDay`);

function time(){
    dateDisplay.text(currentDay);
}

dateDisplay.ready(function(){
    setInterval(`time()`, 500)});