// Global Variables
// Variables for time

var currentDay = new Date;
var dateDisplay = $(`#currentDay`);
var hour = currentDay.getHours();

// Variables for time blocks

var nine = $(`#9am`);
var ten = $(`#10am`);
var eleven = $(`#11am`);
var twelve = $(`#12pm`);
var one = $(`#1pm`);
var two = $(`#2pm`);
var three = $(`#3pm`);
var four = $(`#4pm`);
var five = $(`#5pm`);

// Variables for buttons

var editBtn = $(`.editBtn`);

// Function to display time

function time(){
    dateDisplay.text(Date);
}

// Function to show time of day in relation to events

function currentEvent(){
    if (hour < 9){
        nine.addClass(`future`);
        ten.addClass(`future`);
        eleven.addClass(`future`);
        twelve.addClass(`future`);
        one.addClass(`future`);
        two.addClass(`future`);
        three.addClass(`future`);
        four.addClass(`future`);
        five.addClass(`future`);
    }else if (hour == 9){
        nine.addClass(`present`);
        ten.addClass(`future`);
        eleven.addClass(`future`);
        twelve.addClass(`future`);
        one.addClass(`future`);
        two.addClass(`future`);
        three.addClass(`future`);
        four.addClass(`future`);
        five.addClass(`future`);
    } else if (hour == 10){
        nine.addClass(`past`);
        ten.addClass(`present`);
        eleven.addClass(`future`);
        twelve.addClass(`future`);
        one.addClass(`future`);
        two.addClass(`future`);
        three.addClass(`future`);
        four.addClass(`future`);
        five.addClass(`future`);
    } else if (hour == 11){
        nine.addClass(`past`);
        ten.addClass(`past`);
        eleven.addClass(`present`);
        twelve.addClass(`future`);
        one.addClass(`future`);
        two.addClass(`future`);
        three.addClass(`future`);
        four.addClass(`future`);
        five.addClass(`future`);
    } else if (hour == 12){
        nine.addClass(`past`);
        ten.addClass(`past`);
        eleven.addClass(`past`);
        twelve.addClass(`present`);
        one.addClass(`future`);
        two.addClass(`future`);
        three.addClass(`future`);
        four.addClass(`future`);
        five.addClass(`future`);
    } else if (hour == 13){
        nine.addClass(`past`);
        ten.addClass(`past`);
        eleven.addClass(`past`);
        twelve.addClass(`past`);
        one.addClass(`present`);
        two.addClass(`future`);
        three.addClass(`future`);
        four.addClass(`future`);
        five.addClass(`future`);
    } else if (hour == 14){
        nine.addClass(`past`);
        ten.addClass(`past`);
        eleven.addClass(`past`);
        twelve.addClass(`past`);
        one.addClass(`past`);
        two.addClass(`present`);
        three.addClass(`future`);
        four.addClass(`future`);
        five.addClass(`future`);
    } else if (hour == 15){
        nine.addClass(`past`);
        ten.addClass(`past`);
        eleven.addClass(`past`);
        twelve.addClass(`past`);
        one.addClass(`past`);
        two.addClass(`past`);
        three.addClass(`present`);
        four.addClass(`future`);
        five.addClass(`future`);
    } else if (hour == 16){
        nine.addClass(`past`);
        ten.addClass(`past`);
        eleven.addClass(`past`);
        twelve.addClass(`past`);
        one.addClass(`past`);
        two.addClass(`past`);
        three.addClass(`past`);
        four.addClass(`present`);
        five.addClass(`future`);
    } else if (hour == 17){
        nine.addClass(`past`);
        ten.addClass(`past`);
        eleven.addClass(`past`);
        twelve.addClass(`past`);
        one.addClass(`past`);
        two.addClass(`past`);
        three.addClass(`past`);
        four.addClass(`past`);
        five.addClass(`present`);
    } else {
            nine.addClass(`past`);
            ten.addClass(`past`);
            eleven.addClass(`past`);
            twelve.addClass(`past`);
            one.addClass(`past`);
            two.addClass(`past`);
            three.addClass(`past`);
            four.addClass(`past`);
            five.addClass(`past`);
    }
};

// Called Functions
// Functions for time

dateDisplay.ready(time());
setInterval(`time()`, 500);
    
// Functions for time of day

nine.ready(currentEvent());
setInterval(`currentEvent()`, 120000);

// Function for inputs and buttons

editBtn.click(function (){
    var name = $(this).parent().attr(`id`);
    $(this).parent().children(`p`).html(`<form><label>Name: </label><input type="text" id="eventName${name}" value=""><br><label>Details: </label><input type="text" id="eventInfo${name}" value="">`);
    $(this).parent().children(`.saveBtn`).css(`display`, `unset`);
    $(this).css(`display`, `none`);
});

// Functions to save input and buttons

$(`.saveBtn`).click(function(){
    var saveName = $(this).parent().attr(`id`);
    var eventName = document.getElementById(`eventName${saveName}`).value;
    var eventInfo = document.getElementById(`eventInfo${saveName}`).value;
    var saveInfo = `${eventName}<br>${eventInfo}`;
    localStorage.setItem(`${saveName}`, saveInfo);
    var storedValue = localStorage.getItem(`${saveName}`);
    $(this).parent().children(`p`).html(storedValue);
    $(this).parent().children(`.editBtn`).css(`display`, `unset`);
    $(this).css(`display`, `none`);
})

// Function to pull any saved data from local storage and display it in proper timeblock

$(`.row`).each(function(){
    var eventName = $(this).attr(`id`);
    var eventInfo = localStorage.getItem(`${eventName}`);
    $(this).children(`p`).html(eventInfo);
});