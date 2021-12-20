function compute()
{
    var principal = document.getElementById("principal").value;
    if (document.getElementById("principal").validity.rangeUnderflow) {
      document.getElementById("principal_msg").innerHTML = "Value is too small";
    } else {
      var rate = document.getElementById("rate").value;
      var years = document.getElementById("years").value;
      var interest = principal * years * rate/100;
      var year = new Date().getFullYear() + parseInt(years);
      document.getElementById("result").innerHTML = `<br><p>If you deposit ${principal}
                                                     at an interest rate of ${rate},
                                                     you will receive an amount of ${interest}
                                                     in the year ${year}</p>`;
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
