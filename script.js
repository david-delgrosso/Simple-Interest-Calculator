function compute()
{
    // save principal object and value
    var principal = document.getElementById("principal").value;
    var principal_obj = document.getElementById("principal");

    // check for empty or non-positive values of principal
    if ( ( principal === "") || ( principal <= 0 ) ) {
        alert("Enter a positive number")
        principal_obj.focus();
        return false;
    }

    // save rate and years values and calculate interest and year
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);

    // generate output statement
    var statement = "If you deposit <mark>" + principal + "</mark>,\<br\>";
    statement += "at an interest rate of <mark>" + rate + "%</mark>,\<br\>";
    statement += "You will receive an amount of <mark>" + interest + "</mark>,\<br\>";
    statement += "in the year <mark>" + year + "</mark>\<br\>";
    document.getElementById("result").innerHTML=statement;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    rateval_txt = rateval + "%";
    document.getElementById("rate_val").innerText=rateval_txt;
}