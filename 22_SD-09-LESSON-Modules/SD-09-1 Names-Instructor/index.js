const day = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  
  const ordinal = [
    null,
    'st',
    'nd',
    'rd',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'st',
    'nd',
    'rd',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'th',
    'st'
  ]
  
  const month = [
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
  
  let year = new Date().getFullYear()
  
  let day = new Date().getDay()
  
  let date = new Date().getDate()
  
  let month = new Date().getMonth()
  
  function date() {
    return day[day] + " " + date + ordinal[date] + " " + month[month] + " " + year
  }
  
  function printDate() {
    console.log("Today is " + date())
  }