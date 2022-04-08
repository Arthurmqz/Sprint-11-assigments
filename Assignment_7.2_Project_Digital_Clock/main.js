'use strict'

setInterval(currentTime, 1000)

function currentTime() {
  let time = new Date()

  // Object of Date class

  let dayDisplay = time.getDay()
  let hours = time.getHours()
  let min = time.getMinutes()
  let secs = time.getSeconds()
  let month = time.getMonth()
  let year = time.getFullYear()
  let date = time.getDate()

  //Creating a 12-hours format
  let am_pm = 'AM'
  if (hours == 12) am_pm = 'PM'

  if (hours > 12) {
    hours -= 12
    am_pm = 'PM'
  }
  if (hours == 0) {
    hours = 12
    am_pm = 'AM'
  }

  hours = hours < 10 ? '0' + hours : hours
  min = min < 10 ? '0' + min : min
  secs = secs < 10 ? '0' + secs : secs

  //Current time definition
  let currentTime = hours + ':' + min + ':' + secs + ' ' + am_pm

  //Definition of year, months and days
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const week = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  //Current day definition
  let currentDay =
    week[dayDisplay] + ', ' + months[month] + ' ' + date + ', ' + year

  //Setting the currentTime and currentDay
  const clock = document.getElementById('time')
  const dayIntro = document.getElementById('dayDisplay')

  clock.innerHTML = currentTime
  dayIntro.innerHTML = currentDay
}

//Calling the currentTime() function to start the process
currentTime()
