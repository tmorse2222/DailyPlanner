var currentDay = new Date;
var dateDisplay = $(`#currentDay`);
var hour = currentDay.getHours();
var timeBlock = $(`.row`);
var nine = $(`#9am`);
var ten = $(`#10am`);
var eleven = $(`#11am`);
var twelve = $(`#12pm`);
var one = $(`#1pm`);
var two = $(`#2pm`);
var three = $(`#3pm`);
var four = $(`#4pm`);
var five = $(`#5pm`);

function time(){
    dateDisplay.text(Date);
}
function currentEvent(){
    if (hour = 9){
        nine.addClass(`present`);
        ten.addClass(`future`);
        eleven.addClass(`future`);
        twelve.addClass(`future`);
        one.addClass(`future`);
        two.addClass(`future`);
        three.addClass(`future`);
        four.addClass(`future`);
        five.addClass(`future`);
    } else if (){
        
    }
}

dateDisplay.ready(function(){
    setInterval(`time()`, 500)});
    
timeBlock.ready(currentEvent(){

}
)