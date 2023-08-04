// Jquery import: Shorthand for $( document ).ready()
$(function () {
  //display current day at the top of the calendar
  var now = dayjs().format("[Today is ]dddd, MMMM DD YYYY");
  $("#currentDay").text(now);

  //show timeblocks from 9am to 6pm
  // Dynamically create time blocks
  // Create a for-loop to iterate through the opening time
  let openTime = 9,
    closeTime = 18;
  // Function to generate the time block HTML
  function createTimeBlock(hour) {
    if (hour < 12) {
      return `<div class="time-block ">
      <div class="hour">${hour}AM</div>
      <textarea id="${hour}" cols="180"></textarea>
      <button class="saveBtn"><i class="fas fa-save"></i></button>
    </div>
    `;
    } else if (hour > 12) {
      return `<div class="time-block ">
    <div class="hour">${hour - 12}PM</div>
    <textarea id="${hour}" cols="180"></textarea>
    <button class="saveBtn"><i class="fas fa-save"></i></button>
  </div>
  `;
    } else {
      //12pm
      return `<div class="time-block ">
      <div class="hour">${hour}PM</div>
      <textarea id="${hour}" cols="180"></textarea>
      <button class="saveBtn"><i class="fas fa-save"></i></button>
    </div>
    `;
    }
  }

  // Function to create time blocks for hours from 9AM to 5PM
  function createAllTimeBlocks() {
    const container = $(".time-block-container");
    for (let i = openTime; i < closeTime; i++) {
      container.append(createTimeBlock(i));
    }
  }

  createAllTimeBlocks();

  //Color-code each timeblock based on past, present, and future when the timeblock is viewed.
  //create a hypothetical time
  let timeOffice = dayjs().set("hour", 14).set("minute", 55).set("second", 15);

  // Use the each() method to iterate through all the textarea elements
  $("textarea").each(function () {
    // get the time element in each textarea
    let textareaTime = $(this).attr("id");

    //the color of the past time blocks are grey  ?????
    if (textareaTime < 14) {
      $(this).attr("class", "past");
    }
    //the color of the current time block is red
    else if (textareaTime == 14) {
      $(this).attr("class", "present");
    }
    //the color of the future time block is green
    else {
      $(this).attr("class", "future");
    }
  });
  
  //Allow a user to enter an event when they click a timeblock

  //Save the event in local storage when the save button is clicked in that timeblock.

  //Persist events between refreshes of a page
});
