var currentDay = new Date;
var dateDisplay = $(`#currentDay`);
var hour = currentDay.getHours();
var timeBlock = $(`.row`);
var 9am = $(`#9am`);
var 10am = $(`#10am`);
var 11am = $(`#11am`);
var 12pm = $(`#12pm`);
var 1pm = $(`#1pm`);
var 2pm = $(`#2pm`);
var 3pm = $(`#3pm`);
var 4pm = $(`#4pm`);
var 5pm = $(`#5pm`);

function time(){
    dateDisplay.text(Date);
}
function currentEvent(){
    if (hour = 9){
        $(`#9am`).addClass(`present`);
    }
}

dateDisplay.ready(function(){
    setInterval(`time()`, 500)});
    
timeBlock.ready(function(){
    }
)