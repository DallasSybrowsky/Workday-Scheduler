// Date block code (done)
const currentDate = moment().format("dddd, MMMM Do, YYYY");
const timeInstant = moment();
$("#currentDay").text(currentDate);
scheduleUpdate();

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
function createTask(taskItem, timeDiv) {
  let taskDiv = timeDiv.find(".task");
  let taskP = $("<p>").addClass("toDo").text(taskItem);
  taskDiv.html(taskP);
}

// Save tasks to local storage (done)
function setTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
$(".saveBtn").on("click", function () {
  const text = $(this).siblings(".task-data").val();
  const time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
  //save text area data into local storage
  // remove text area
  // load local storage data into div
});

// Display tasks in their appropriate place
$(".task").on("click", function(event) {
    console.log(event.target);
    var textArea = document.createElement('textarea');
    textArea.classList.add("event-details");
    console.log("textarea: " + textArea);
    event.target.append(textArea);

})

// Set hour blocks to appropriate color (done)
function scheduleUpdate() {
//   let currentHour = moment().hour();
let currentHour = 11
  console.log("ScheduleUpdate", currentHour);
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
    scheduleUpdate()
}, 60000);

// Clear Schedule button (done)
var clearCalendar = document.querySelector(".reset-btn");
clearCalendar.addEventListener("click", function () {
  localStorage.clear();
});
