'use strict'

//Interval function every 2 seconds

const HydrateFn = setInterval(() => {
  document.write('Hello')
}, 2000)

//Timeout function to cancel interval after 60 seconds

setTimeout(StopFn, 60000)

//Clean the interval

function StopFn() {
  clearInterval(HydrateFn)
}
