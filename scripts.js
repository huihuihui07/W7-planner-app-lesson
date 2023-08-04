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
    return `<div class="time-block ">
      <div class="hour">${hour}</div>
      <textarea id="${hour}" cols="180"></textarea>
      <button class="saveBtn"><i class="fas fa-save"></i></button>
    </div>
    `;
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

  //Allow a user to enter an event when they click a timeblock

  //Save the event in local storage when the save button is clicked in that timeblock.

  //Persist events between refreshes of a page
});
