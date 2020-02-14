function getDay(name){
    var year= parseInt(Document.getElementById("year").value);
    var cc= year.slice(0,1);
    var yy= year.slice(2,3);
    var month= parseInt(Document.getElementById("month").value);
    var date= parseInt(Document.getElementById("date").value);


    if(year= "" || month<1 || month>12 || month= "" || date <1 || date >31 ){
        alert ("Invalid input dear, kindly check the information filled in.")
    }


    var Day=(( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);
    return getDay()
}