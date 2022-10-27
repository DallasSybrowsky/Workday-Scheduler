// Date block code (done)
const currentDate = moment().format("dddd, MMMM Do, YYYY");
$("#currentDay").text(currentDate);

// Object to contain arrays for tasks (done)
var tasks = {
  9: [],
  10: [],
  11: [],
  12: [],
  13: [],
  14: [],
  15: [],
  16: [],
  17: [],
};

// Create blocks for inputting tasks 
let createTask = function (taskItem, timeDiv) {
  let taskDiv = timeDiv.find(".task");
  let taskP = $("<p>").addClass("toDo").text(taskItem);
  taskDiv.html(taskP);
};

// Save tasks to local storage (done)
// Start of code block
var setTasks = function () {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
$(".saveBtn").on("click", function () {
  const text = $(this).siblings(".task-data").val();
  const time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});
// End of code block

// Display tasks in their appropriate place

// Set hour blocks to appropriate color (done)
let currentHour = moment().hour();
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

// Clear Schedule button (done)
var clearCalendar = document.querySelector(".reset-btn");
clearCalendar.addEventListener("click", function () {
  localStorage.clear();
});