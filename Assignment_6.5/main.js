'use strict'

let data
//First method
fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=Porto&units=metric&APPID=3571ca559cec4476727c53c9331f462a'
)
  .then(response => {
    if (!response.ok) {
      console.log(response)
      throw new Error(
        `There was an error: ${response.status} ${response.statusText}`
      )
    }
    response.json()
  })
  .then(data => console.log(data))
  .catch(err => console.log(err))

// Second method

fetch(
  'https://api.openweathermap.org/data/2.5/weather?q=Porto&units=metric&APPID=3571ca559cec4476727c53c9331f462a'
)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
