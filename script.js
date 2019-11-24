year = document.getElementById("year")
month = document.getElementById("month")
days = document.getElementById("days")
milli = document.getElementById("milli")
hours = document.getElementById("hours")
minutes = document.getElementById("minutes")
seconds = document.getElementById("seconds")
snapDay = new Date("December 10, 2019 0:0:0")
it = setInterval(function(){
  currentDate = new Date()
  if(currentDate.getMinutes() == snapDay.getMinutes() && currentDate.getDate() == snapDay.getDate() && snapDay.getFullYear() == currentDate.getFullYear() && currentDate.getSeconds() == snapDay.getSeconds() && currentDate.getMilliseconds() == snapDay.getMilliseconds()){
    final.hidden = true
    end.hidden = false
    clearInterval(it)
  }
  theMonth = currentDate.getMonth()
  if(theMonth == 10){
    month.innerHTML = "1"
  }else if(theMonth == 11){
    month.innerHTML = "0"
  }
  year.innerHTML = snapDay.getFullYear() - currentDate.getFullYear()
  days.innerHTML = currentDate.getDate() - snapDay.getDate()
  hours.innerHTML = currentDate.getHours() - snapDay.getHours()
  minutes.innerHTML = currentDate.getMinutes() - snapDay.getMinutes()
  seconds.innerHTML = currentDate.getSeconds() - snapDay.getSeconds()
  milli.innerHTML = currentDate.getMilliseconds() - snapDay.getMilliseconds()
},01)
