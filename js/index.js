
var century, year, month, dayOfMonth, dayOfWeek, day;
//To get input
function getInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("monthday").value);
  if(century == ""){
    alert("Input the correct gender");
    return false;
  }else if (year == ""){
    alert("Input the correct year");
    return false;
  }else if (month == ""){
    alert("Input the correct month");
    return false;
  }else if(dayOfMonth == ""){
    alert("input the correct date");
    return false;
  }
}

function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7);
    console.log(dayOfWeek); 
    return (Math.floor(dayOfWeek));
    if (dayOfWeek < 0) {
      dayOfWeek = dayOfWeek * -1;
    }
    else if (dayOfWeek > 0) {
      return dayOfWeek;
    }
}
 function checkDayOfWeek(){
     day = calculateDay();
      checkGender();
      console.log("The function runs");
}
let daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
function checkGender(){
  var gen = document.getElementsByName("rads");
  if(gen[0].checked == true && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
      var gender = "male";
  }else if(gen[1].checked == true && year > 0 && month > 0 && month < 13 && day > 0 && day < 32){
      var gender = "female";
  }else if (gen[0].checked == false || year < 0 || month < 0 && month > 13 || day < 0 && day > 32){
    alert ("incorrect input");
  }
    switch(gender){
        case gender = "male":
              switch(day){
                case (0 || -0):
                  alert ("You were born on a sunday." + "  " + "Your akan name is " + maleNames[0]);
                break;
                case (1 || -1):
                  alert ("You were born on a monday." + " " + "Your akan name is " + maleNames[1]);
                break;
                case (2 || -2):
                    alert ("You were born on a tuesday." + " " + "Your akan name is " + maleNames[2]);
                break;
                case (3 || -3):
                  alert ("You were born on a wednesday." + " " + "Your akan name is "+ maleNames[3]);
                break;
                case (4 || -4):
                  alert ("You were born on a thursday." + " " + "Your akan name is " + maleNames[4]);
                break;
                case (5 || -5):
                  alert ("You were born on a friday." + " " + "Your akan name is " + maleNames[5]);
                break;
                case (6 || -6):
                  alert ("You were born on a saturday." + " " + "Your akan name is " + maleNames[6]);
              }
        break;
        case gender = "female":
                switch(day){
                  case 0 || -0:
                    alert ("The day is on a sunday." + "  " + "Your akan name is  akosua");
                  break;
                  case 1 || -1:
                    alert ("The day is on a monday." + " " + "Your akan name is adwoa ");
                  break;
                  case 2 || -2:
                    alert ("The day is on a tuesday." + " " + "Your akan name is abenaa");
                  break;
                  case 3 || -3:
                    alert ("The day is on a wednesday." + " " + "Your akan name is akua");
                  break;
                  case 4 || -4:
                    alert ("The day is on a thursday." + " " + "Your akan name is yaa");
                  break;
                  case 5 || -5:
                    alert ("The day is on a friday." + " " + "Your akan name is afua");
                  break;
                  case 6 || -6:
                    alert ("The day is on a saturday." + " " + "Your akan name is ama");
                  break;
              }
    }
}
  