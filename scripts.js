// 'XMO'  Month to Days Converter
// Made with vanilla jacascript, by Liam C, in 2022 :)

// Prompt User to Choose and enter any Month
var monthEntry = prompt("Hello, Please enter any Month:");


const monthDays = [ '31', '30', '28, and every four years, 29'];

// Default Value
check = false
while (check==false) {

    /* Check if user input is in fridge - Repeat prompt until user guesses valid fruit - could use an array here for listing correct guesses */

    var check = (monthEntry == "January") || (monthEntry == "February") || (monthEntry == "March") || (monthEntry == "April") || (monthEntry == "May") || (monthEntry == "June") || (monthEntry == "July") || (monthEntry == "August") || (monthEntry == "September") || (monthEntry == "October") || (monthEntry == "November") || (monthEntry == "December") || (monthEntry == "january") || (monthEntry == "february") || (monthEntry == "march") || (monthEntry == "april") || (monthEntry == "may") || (monthEntry == "june") || (monthEntry == "july") || (monthEntry == "august") || (monthEntry == "september") || (monthEntry == "october") || (monthEntry == "november") || (monthEntry == "december");

    if (monthEntry == "January") {
      var monthDayApply = "31"

      // To style background image accordingly - should I use document.body?

      document.getElementById("divId").style.backgroundImage = "url('image/january.jpg')";
    }

    // If Month Entry is Accepted from above list
    if (check) {

      // change the body background color to purple as a check
      document.getElementById("all").style.backgroundColor = "purple";

      console.log(`${monthEntry} is a month which has monthDayApply days.`);

      prompt(`${monthEntry} is a month which has monthDayApply days.
        Please Enter date (DD/MM/YYYY) to calculate day-of-week:`);


      check = true;

      }

    // Month Entry is not Accepted
    else {
      console.log(`${monthEntry} is NOT an accepted syntax for month.`);
      monthEntry = prompt("Month not accepted with this format. Please try again");
    }
}
