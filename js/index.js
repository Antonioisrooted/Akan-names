/*function myFunction(){
    var year = document.getElementById("year").value;
    var yy = parseInt(year);
    var month = document.getElementById("month").value;
    var mm = parseInt(month);
    var day = document.getElementById("day").value;
    var dd = parseInt(day);
    var cc = (yy-1)/100+1;
    var cent = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
    var dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var boyChild = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var girlChild = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    if (document.getElementById("gender").checked){
    var gender = "male";
    }
    else {
    var gender = "female";
    }
    if (dd < 1 || dd >31){
    alert("Day does not exist");
    }
    else if (mm < 1 || mm >12 || mm == 2 && dd > 29){
    alert("Month does not exist");
    }
    else if (Math.ceil(cent) == 1 && gender === "male"){
    document.getElementById("outcome").innerHTML =
    alert("You were born on a " + dayOfWeek[1] + " and your Akan name is " + boyChild[1]);
    }
    else if (Math.ceil(cent) == 2 && gender === "male"){
    document.getElementById("outcome").innerHTML =
    alert("You were born on a " + dayOfWeek[2] + " and your Akan name is " + boyChild[2]);
    }
    else if (Math.ceil(cent) == 3 && gender === "male"){
    document.getElementById("outcome").innerHTML =
    alert("You were born on a " + dayOfWeek[3] + " and your Akan name is " + boyChild[3]);
    }
    else if (Math.ceil(cent) == 4 && gender === "male"){
    document.getElementById("outcome").innerHTML =
    alert("You were born on a " + dayOfWeek[4] + " and your Akan name is " + boyChild[4]);
    }
    else if (Math.ceil(cent) == 5 && gender === "male"){
    document.getElementById("outcome").innerHTML =
    alert("You were born on a " + dayOfWeek[5] + " and your Akan name is " + boyChild[5]);
    }
    else if (Math.ceil(cent) == 6 && gender === "male"){
    document.getElementById("outcome").innerHTML =
    alert("You were born on a " + dayOfWeek[6] + " and your Akan name is " + boyChild[6]);
    }
    else if (Math.ceil(cent) == 0 && gender === "male"){
      document.getElementById("outcome").innerHTML =
      alert("You were born on a " + dayOfWeek[0] + " and your Akan name is " + boyChild[0]);
      }
    else if (Math.ceil(cent) == 1 && gender === "female"){
    document.getElementById("outcome").innerHTML =
    alert("You were born on a " + dayOfWeek[1] + " and your Akan name is " + girlChild[1]);
    }
    else if (Math.ceil(cent) == 2 && gender === "female"){
    document.getElementById("outcome").innerHTML =
    alert("You were born on a " + dayOfWeek[2] + " and your Akan name is " + girlChild[2]);
    }
    else if (Math.ceil(cent) == 3 && gender === "female"){
    document.getElementById("outcome").innerHTML =
    alert("You were born on a " + dayOfWeek[3] + " and your Akan name is " + girlChild[3]);
    }
    else if (Math.ceil(cent) == 4 && gender === "female"){
    document.getElementById("outcome").innerHTML =
    alert("You were born on a " + dayOfWeek[4] + " and your Akan name is " + girlChild[4]);
    }
    else if (Math.ceil(cent) == 5 && gender === "female"){
    document.getElementById("outcome").innerHTML =
    alert("You were born on a " + dayOfWeek[5] + " and your Akan name is " + girlChild[5]);
    }
    else if (Math.ceil(cent) == 6 && gender === "female"){
    document.getElementById("outcome").innerHTML =
    alert("You were born on a " + dayOfWeek[6] + " and your Akan name is " + girlChild[6]);
    }
    else if (Math.ceil(cent) == 0 && gender === "female"){
      document.getElementById("outcome").innerHTML =
      alert("You were born on a " + dayOfWeek[0] + " and your Akan name is " + girlChild[0]);
      }
    else {
      alert("Please input your info!");
    }
  }*/
  var century, year, month, dayOfMonth, dayOfWeek, day;
//Get input
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
//Calculate func
function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    console.log(dayOfWeek); //Test the calculateDay function
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
                  alert ("The day is on a sunday." + "  " + "Your akan name is " + maleNames[0]);
                break;
                case (1 || -1):
                  alert ("The day is on a monday." + " " + "Your akan name is " + maleNames[1]);
                break;
                case (2 || -2):
                    alert ("The day is on a tuesday." + " " + "Your akan name is " + maleNames[2]);
                break;
                case (3 || -3):
                  alert ("The day is on a wednesday." + " " + "Your akan name is "+ maleNames[3]);
                break;
                case (4 || -4):
                  alert ("The day is on a thursday." + " " + "Your akan name is " + maleNames[4]);
                break;
                case (5 || -5):
                  alert ("The day is on a friday." + " " + "Your akan name is " + maleNames[5]);
                break;
                case (6 || -6):
                  alert ("The day is on a saturday." + " " + "Your akan name is " + maleNames[6]);
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
  