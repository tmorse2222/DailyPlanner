var currentDay = new Date;
var dateDisplay = $(`#currentDay`);
var hour = currentDay.getHours();
var timeBlock = $(`.row`);

function time(){
    dateDisplay.text(Date);
}
function currentEvent(){

}

dateDisplay.ready(function(){
    setInterval(`time()`, 500)});
    
timeBlock.ready(function(){
    if (hour = 15){
        $(`#3pm`).addClass(`present`);
    }
})