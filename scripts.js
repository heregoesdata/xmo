// While If Month to Days Converter

// Prompt User to Choose and enter any Month
var monthEntry = prompt("Hello, Please enter any Month:");

// Default Value
check = false
while (check==false) {

    /* Check if user input is in fridge - Repeat prompt until user guesses valid fruit - could use an array here for listing correct guesses */

    var check = (monthEntry == "January") || (monthEntry == "February") || (monthEntry == "March") || (monthEntry == "April") || (monthEntry == "May") || (monthEntry == "June") || (monthEntry == "July") || (monthEntry == "August") || (monthEntry == "September") || (monthEntry == "October") || (monthEntry == "November") || (monthEntry == "December") || (monthEntry == "january") || (monthEntry == "february") || (monthEntry == "march") || (monthEntry == "april") || (monthEntry == "may") || (monthEntry == "june") || (monthEntry == "july") || (monthEntry == "august") || (monthEntry == "september") || (monthEntry == "october") || (monthEntry == "november") || (monthEntry == "december");

    // If Month Entry is Accepted from above list
    if (check) {
      console.log(`${monthEntry} is a month!`);
      /* document.getElementById("test2").className = "test"; */
      document.getElementById("test").style.backgroundColor = "purple";
      check = true;
    }

    // Month Entry is not Accepted
    else {
      console.log(`${monthEntry} is NOT an accepted syntax for month.`);
      monthEntry = prompt("Month not accepted in this format. Please try again");
    }
}
