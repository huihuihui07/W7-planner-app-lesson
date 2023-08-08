// // Jquery import: Shorthand for $( document ).ready()
// $(function () {
//   //display current day at the top of the calendar
var now = dayjs().format("[Today is ]dddd, MMMM DD YYYY");
$("#currentDay").text(now);

$(".saveBtn").on("click", function () {
  const key = $(this).parent().attr("id");
  const value = $(this).siblings("textarea").val();
  localStorage.setItem(key, value);
});

for (let i = 9; i <= 23; i++) {
  $("#" + i + " textarea").val(localStorage.getItem(i));
}

const currentHour = dayjs().hour(); //get the current hour of the day using day.js
console.log(currentHour);
$(".time-block").each(function () {
  const blockHour = $(this).attr("id");
  if (blockHour < currentHour) {
    // add the class of past to THIS element
    $(this).addClass("past");
  } else if (blockHour == currentHour) {
    // add a class of present to THIS element

    $(this).addClass("present");
  } else {
    // add a class of future to THIS element
    $(this).addClass("future");
  }
});

//   //show timeblocks from 9am to 6pm
//   // Dynamically create time blocks
//   // Create a for-loop to iterate through the opening time
//   let openTime = 9,
//     closeTime = 18;
//   // Function to generate the time block HTML
//   function createTimeBlock(hour) {
//     if (hour < 12) {
//       return `<div class="time-block ">
//       <div class="hour">${hour}AM</div>
//       <textarea id="${hour}" cols="180"></textarea>
//       <button class="saveBtn"><i class="fas fa-save"></i></button>
//     </div>
//     `;
//     } else if (hour > 12) {
//       return `<div class="time-block ">
//     <div class="hour">${hour - 12}PM</div>
//     <textarea id="${hour}" cols="180"></textarea>
//     <button class="saveBtn"><i class="fas fa-save"></i></button>
//   </div>
//   `;
//     } else {
//       //12pm
//       return `<div class="time-block ">
//       <div class="hour">${hour}PM</div>
//       <textarea id="hour${hour}" class="hour12" cols="180"></textarea>
//       <button class="saveBtn btn${hour}"><i class="fas fa-save"></i></button>
//     </div>
//     `;
//     }
//   }

//   // Function to create time blocks for hours from 9AM to 5PM
//   function createAllTimeBlocks() {
//     const container = $(".time-block-container");
//     for (let i = openTime; i < closeTime; i++) {
//       container.append(createTimeBlock(i));
//     }
//   }

//   createAllTimeBlocks();

//   //Color-code each timeblock based on past, present, and future when the timeblock is viewed.
//   //create a hypothetical time
//   let timeOffice = dayjs().set("hour", 14).set("minute", 55).set("second", 15);

//   // Use the each() method to iterate through all the textarea elements
//   $("textarea").each(function () {
//     // get the time element in each textarea
//     let textareaTime = $(this).attr("id");

//     //the color of the past time blocks are grey  ?????
//     if (textareaTime < 14) {
//       $(this).attr("class", "past");
//     }
//     //the color of the current time block is red
//     else if (textareaTime == 14) {
//       $(this).attr("class", "present");
//     }
//     //the color of the future time block is green
//     else {
//       $(this).attr("class", "future");
//     }
//   });

//   //Allow a user to enter an event when they click a timeblock

//   //Save the event in local storage when the save button is clicked in that timeblock.
//   //create element to select "time-block-container"

//   const btn12 = document.querySelector(".btn12");
//   const textareaContent = document.querySelector(".hour12"); //?????
//   //function
//   function saveTask() {
//     const value = textareaContent.value;
//     localStorage.setItem("myTextareaValue", value); //????
//   }

//   //Attach an event listener to the textarea for input changes
//   btn12.addEventListener("click", saveTask);

//   window.addEventListener("load", function () {
//     const savedValue = localStorage.getItem("myTextareaValue");
//     if (savedValue !== null) {
//       textareaContent.value = savedValue;
//     }
//   });
//   //set the target to a specific textarea
//   //save to local storage

//   //Persist events between refreshes of a page
// });
