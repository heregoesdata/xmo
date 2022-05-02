  // 'XMO'  Month to Days Converter
  // Made with vanilla jacascript, by Liam C, in 2022 :)

  // Prompt User to Choose and enter any Month

  // Create function to include parameters for entry syntax

    var userInput = prompt("please enter a month");

    userInput = userInput[0].toUpperCase() + userInput.slice(1).toLowerCase();


    if (userInput == "January") {
      document.getElementById("days").innerHTML = `There are 31 days in ${userInput}`;
      document.getElementById("bgImage").src = "image/january.jpg";
      document.getElementByClassName("dTitle").innerHTML = "JANUARY";
    }

    else if (userInput == "February") {
      document.getElementById("days").innerHTML = `There are 28 days in ${userInput}`;
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

    else {
    document.getElementById("bgImage").src = "image/invalid.jpg";
    alert ("Invalid month. Please try again.");
    }
