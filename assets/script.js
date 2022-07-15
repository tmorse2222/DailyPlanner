var currentDay = new Date;
var dateDisplay = $(`#currentDay`);
var hour = currentDay.getHours();
var timeBlock = $(`.row`);

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