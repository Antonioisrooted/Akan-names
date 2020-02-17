function getDay(name){
    var year= parseInt(Document.getElementById("year").value);
    /*var cc= year.slice(0,1);
    var yy= year.slice(2,3);*/
    var month= parseInt(Document.getElementById("month").value);
    var date= parseInt(Document.getElementById("date").value);


    if(year <=1000 || year>=2050 )
    {
        alert ("Invalid input dear, kindly check the information filled in.");
    }
    else if( month<1 || month>12 )
    {
        alert ("Invalid input dear, kindly check the information filled in.");
    }
     else( date <1 || date >31 )
    {
        alert ("Invalid input dear, kindly check the information filled in.");
    }

    var day=(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
    return getDay(name)
}


function getGender(){
    var radio = document.getElementsById("gender");
    for (var i = 0; i < radio.length; i++){
        if (radio[i].checked){
            var gender = radio[i].value;
            return gender;
        }
    }
}


function getname(){
    var boyChild=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var girlChild=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var myDate=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
}

function finalName(){
        if (Math.ceil(day) == 1 && gender === "male"){
        document.getElementById("outcome").innerHTML =
        alert("You were born on a " + myDate[1] + " and your Akan name is " + boy[1]);
        }
        else if (Math.ceil(day) == 2 && gender === "male"){
        document.getElementById("outcome").innerHTML =
        alert("You were born on a " + myDate[2] + " and your Akan name is " + boy[2]);
        }
        else if (Math.ceil(day) == 3 && gender === "male"){
        document.getElementById("outcome").innerHTML =
        alert("You were born on a " + myDate[3] + " and your Akan name is " + boy[3]);
        }
        else if (Math.ceil(day) == 4 && gender === "male"){
        document.getElementById("outcome").innerHTML =
        alert("You were born on a " + myDate[4] + " and your Akan name is " + boy[4]);
        }
        else if (Math.ceil(day) == 5 && gender === "male"){
        document.getElementById("outcome").innerHTML =
        alert("You were born on a " + myDate[5] + " and your Akan name is " + boy[5]);
        }
        else if (Math.ceil(day) == 6 && gender === "male"){
        document.getElementById("outcome").innerHTML =
        alert("You were born on a " + myDate[6] + " and your Akan name is " + boy[6]);
        }
        else if (Math.ceil(day) == 0 && gender === "male"){
          document.getElementById("outcome").innerHTML =
          alert("You were born on a " + myDate[0] + " and your Akan name is " + boy[0]);
          }
        else if (Math.ceil(day) == 1 && gender === "female"){
        document.getElementById("outcome").innerHTML =
        alert("You were born on a " + myDate[1] + " and your Akan name is " + girl[1]);
        }
        else if (Math.ceil(day) == 2 && gender === "female"){
        document.getElementById("outcome").innerHTML =
        alert("You were born on a " + myDate[2] + " and your Akan name is " + girl[2]);
        }
        else if (Math.ceil(day) == 3 && gender === "female"){
        document.getElementById("outcome").innerHTML =
        alert("You were born on a " + myDate[3] + " and your Akan name is " + girl[3]);
        }
        else if (Math.ceil(day) == 4 && gender === "female"){
        document.getElementById("outcome").innerHTML =
        alert("You were born on a " + myDate[4] + " and your Akan name is " + girl[4]);
        }
        else if (Math.ceil(day) == 5 && gender === "female"){
        document.getElementById("outcome").innerHTML =
        alert("You were born on a " + myDate[5] + " and your Akan name is " + girl[5]);
        }
        else if (Math.ceil(day) == 6 && gender === "female"){
        document.getElementById("outcome").innerHTML =
        alert("You were born on a " + myDate[6] + " and your Akan name is " + girl[6]);
        }
        else if (Math.ceil(day) == 0 && gender === "female"){
          document.getElementById("outcome").innerHTML =
          alert("You were born on a " + myDate[0] + " and your Akan name is " + girl[0]);
          }
        else {
          alert("Please input your info!");
        }
}
