var currentDay = new Date;
var dateDisplay = $(`#currentDay`);
var hour = currentDay.getHours();
var timeBlock = $(`.row`);

function time(){
    dateDisplay.text(currentDay);
}
function currentEvent(){

}

dateDisplay.ready(function(){
    setInterval(`time()`, 500)});
    
timeBlock.ready(function(){

})    