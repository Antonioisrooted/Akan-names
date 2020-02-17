function getDay(name){
    var year= parseInt(Document.getElementById("year").value);
    var cc= year.slice(0,1);
    var yy= year.slice(2,3);
    var month= parseInt(Document.getElementById("month").value);
    var date= parseInt(Document.getElementById("date").value);


    if(year= "" || month<1 || month>12 || month = "" || date <1 || date >31);
    {
        alert ("Invalid input dear, kindly check the information filled in.")
    }


    var Day=(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
    return getDay(name)
}


function getGender(){
    var radio = document.getElementsByName("gender");
    for (var i = 0; i < radio.length; i++){
        if (radio[i].checked){
            var gender = radio[i].value;
            return gender;
        }
    }
}


function getname(){
    var male=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var female=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    var mydate=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


    if(getgender()===male){
        alert("your Akan name depending on your date of birth is"+male [getDay(name).value]+"since you were Born on"+myDate(getDay(name)));
    }
    else if(getgender()===female){
        alert("your Akan name depending on your date of birth is"+female [getDay(name).value]+"since you were Born on"+myDate(getDay(name)));
    }
    else{alert("check your data");
    }
}