    // 'XMO'  Month to Days Converter
    // Made with vanilla javascript, by Liam C, in 2022 :)

    // Prompt User to Choose and enter any Month

    var userInput = prompt("please enter a Month name to see its duration, in Days");

    // Create function to include parameters for entry syntax

    userInput = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();

    // Calculate and display text of number of days for that month with custom calendar background art by Liam C (me)! :D

    if (userInput == "January") {
      document.getElementById("days").innerHTML = `There are 31 days in ${userInput}`;
      document.getElementById("bgImage").src = "image/january.jpg";
    }

    else if (userInput == "February") {
      document.getElementById("days").innerHTML = `There are, technically,  28.25 days in ${userInput}`;
      document.getElementById("bgImage").src = "image/february.jpg";
    }

    else if (userInput == "March") {
      document.getElementById("days").innerHTML = `There are 31 days in ${userInput}`;
      document.getElementById("bgImage").src = "image/march.jpg";
    }

    else if (userInput == "April") {
      document.getElementById("days").innerHTML = `There are 30 days in ${userInput}`;
      document.getElementById("bgImage").src = "image/april.jpg";
    }

    else if (userInput == "May") {
      document.getElementById("days").innerHTML = `There are 31 days in ${userInput}`;
      document.getElementById("bgImage").src = "image/may.jpg";
    }

    else if (userInput == "June") {
      document.getElementById("days").innerHTML = `There are 30 days in ${userInput}`;
      document.getElementById("bgImage").src = "image/june.jpg";
    }

    else if (userInput == "July") {
      document.getElementById("days").innerHTML = `There are 31 days in ${userInput}`;
      document.getElementById("bgImage").src = "image/july.jpg";
    }

    else if (userInput == "August") {
      document.getElementById("days").innerHTML = `There are 31 days in ${userInput}`;
      document.getElementById("bgImage").src = "image/august.jpg";
    }

    else if (userInput == "September") {
      document.getElementById("days").innerHTML = `There are 30 days in ${userInput}`;
      document.getElementById("bgImage").src = "image/september.jpg";
    }

    else if (userInput == "October") {
      document.getElementById("days").innerHTML = `There are 31 days in ${userInput}`;
      document.getElementById("bgImage").src = "image/october.jpg";
    }

    else if (userInput == "November") {
      document.getElementById("days").innerHTML = `There are 30 days in ${userInput}`;
      document.getElementById("bgImage").src = "image/november.jpg";
    }

    else if (userInput == "December") {
      document.getElementById("days").innerHTML = `There are 31 days in ${userInput}`;
      document.getElementById("bgImage").src = "image/december.jpg";
    }

    // Generate case for all other (invalid) entries and syntaxes with custom error background img

    else {
    alert ("Invalid month. Please refresh page and try again with a valid month name.");
    document.getElementById("bgImage").src = "image/invalid.jpg";
    }
