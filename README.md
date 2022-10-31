# 05 Third-Party APIs: Work Day Scheduler

## Background

The assignment was to create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. The app runs in the browser and features dynamically updated HTML and CSS powered by jQuery.

The [Moment.js](https://momentjs.com/) library is utilized in order to work with date and time. 

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar (done)
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours (done)
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist 
```

## Method

The HTML and CSS code was provided, but the time blocks were added by me. Additionally, the JavaScript was written by me using the moment.js library, as well as jQuery. The schedule dynamically changes the color of the hour blocks throughout the day. 

I structured the script to be as legible as possible, as well as concise as possible while maintaining the desired functionality. 

Instructions:

  Click on the desired hour block and you can type into the area. When you click on the save button on the right, the data is saved into local memory and will persist if the page is refreshed. If you desire to clear the schedule, simply click the clear schedule button at the top, and the local memory will be cleared, allowing you to re-enter more data for other days.

  Should you desire to modify the schedule without clearing all the data, simply click on the time block you wish to modify and you can amend the entry and save the changes.

Screenshots:

<img width="500" src="/Images/blankPlanner.png" alt="Planner screenshot">

## Support

If you need support or have questions about the page, please contact me at dallas.sybrowsky@gmail.com.