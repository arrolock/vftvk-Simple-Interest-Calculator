function compute()
{
    var principal = document.getElementById("principal").value;
    if (document.getElementById("principal").validity.rangeUnderflow || document.getElementById("principal")) {
      alert("Enter a positive number.");
      document.getElementById("principal").focus();
    } else {
      var rate = document.getElementById("rate").value;
      var years = document.getElementById("years").value;
      var interest = principal * years * rate/100;
      var year = new Date().getFullYear() + parseInt(years);
      document.getElementById("result").innerHTML = `<br><p>If you deposit <mark>${principal}</mark>
                                                     at an interest rate of <mark>${rate}%</mark>.
                                                     You will receive an amount of <mark>${interest}</mark>
                                                     in the year <mark>${year}</mark></p>`;
    }
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
