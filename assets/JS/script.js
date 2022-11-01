// Date block code
const currentDate = moment().format("dddd, MMMM Do, YYYY");
const timeInstant = moment();
$("#currentDay").text(currentDate);
scheduleUpdate();

// Save button click handler
$(".saveBtn").on("click", function () {
  const text = $(this).siblings(".task").val();
  const time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

// Set hour blocks to appropriate color
function scheduleUpdate() {
  let currentHour = moment().hour();
  // console.log("ScheduleUpdate", currentHour); // used for debugging purposes
  $(".task-data").each(function () {
    var taskHour = parseInt($(this).attr("id"));
    if (taskHour < currentHour) {
      $(this).removeClass(["present", "future"]).addClass("past");
    } else if (taskHour == currentHour) {
      $(this).removeClass(["past", "future"]).addClass("present");
    } else {
      $(this).removeClass(["past", "present"]).addClass("future");
    }
  });
}

// Update hour blocks based on current time
var timeUpdate = setInterval(function () {
  scheduleUpdate();
}, 60000);

// Clear Schedule button
var clearCalendar = document.querySelector(".reset-btn");
clearCalendar.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});

// Populating schedule with saved data
function renderData() {
  $(".9-").val(localStorage.getItem("9"));
  $(".10-").val(localStorage.getItem("10"));
  $(".11-").val(localStorage.getItem("11"));
  $(".12-").val(localStorage.getItem("12"));
  $(".13-").val(localStorage.getItem("13"));
  $(".14-").val(localStorage.getItem("14"));
  $(".15-").val(localStorage.getItem("15"));
  $(".16-").val(localStorage.getItem("16"));
  $(".17-").val(localStorage.getItem("17"));
}

// Initial loading function
$(document).ready(function () {
  renderData();
});
