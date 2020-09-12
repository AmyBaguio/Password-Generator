// Add event listener to the generate button
document.getElementById("generate").addEventListener("click", function () {

  // ARRAY OF //
  var lowercaseAlphabetChar = ["abcdefghijklmnopqrstuvwxyz"];
  var uppercaseAlphabetChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  var numericChar = ["0123456789"];
  var specialChar = ["!@#$%^&*?~/|:'><"];
  var password = "";
  var pSelection = "";

  // User Prompts
  var length = prompt("Password must be 8 to 128 Characters. How long is your password?");

  // Making sure User Chooses between 8 and 128 Characters
  if (length < 8 || length > 128) {
    alert("Length has to be Between 8 and 128. Please Try Again")
    return
  }
  var wantsLower = confirm("Do you want Lowercase Characters?")
  var wantsUpper = confirm("Do you want Uppercase Characters?")
  var wantsNumbers = confirm("Do you want Numerical Characters?")
  var wantsSpecial = confirm("Do you want Special Characters?")

  // This functtion gets a RANDOM ITEM from an array//

  // Function for LowerCase
  function random_item(lowercaseAlphabetChar) {
    return items[Math.floor(Math.random() * items.length)];
  }
  var items = ["abcdefghijklmnopqrstuvwxyz"];
  console.log(random_item(lowercaseAlphabetChar));


  // Function for UpperCase
  function random_item(uppercaseAlphabetChar) {
    return items[Math.floor(Math.random() * items.length)];
  }
  var items = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  console.log(random_item(uppercaseAlphabetChar));

  //Function for Number
  function random_item(numericChar) {
    return items[Math.floor(Math.random() * items.length)];
  }
  var items = ["0123456789"];
  console.log(random_item(numericChar));

  // Function for Special Character
  function random_item(specialChar) {
    return items[Math.floor(Math.random() * items.length)];
  }
  var items = ["!@#$%^&*?~/|:'><"];
  console.log(random_item(specialChar));

  // Build String in an Array //
  var randomLowerCase = random_item(lowercaseAlphabetChar)
  var randomUpperCase = random_item(uppercaseAlphabetChar)
  var randomNumber = random_item(numericChar)
  var randomSpecialChar = random_item(specialChar)
  console.log(`${randomLowerCase} ${randomUpperCase} ${randomNumber} ${randomSpecialChar}.`)

  //Verification Points System -One point is allocated when an option is confirmed. If no points are allocated, user has not selected anything.
  var verify = 0;

  if (wantsLower == true || wantsUpper == true || wantsNumbers == true || wantsSpecial == true) {
    verify += 1;
  }
  if (verify == 0) {
    alert("You have not selected a character Type, Please Try again.")
    return
  }

// Script will exit if not verified, if verified we Proceed to Grouping Password to User input.
  function generatePWD() {
    for (var i = 0; i <= length; i++) {
      console.log(pSelection);
      password = password + pSelection.charAt(Math.floor(Math.random() * Math.floor(pSelection.length - 1)));
    }
  }

  // IF STATEMENTS if User Prefers LowerCase
  if (wantsLower && !wantsUpper && !wantsNumbers && !wantsSpecial) {
    pSelection = lowercaseAlphabetChar + "";
    generatePWD();
  }
  // LowerCase and UpperCase
  else if (wantsLower && wantsUpper && !wantsNumbers && !wantsSpecial) {
    pSelection = lowercaseAlphabetChar + uppercaseAlphabetChar;
    console.log(pSelection);
    generatePWD();
  }

  //LowerCase and UpperCase and Numbers
  else if (wantsLower && wantsUpper && wantsNumbers && !wantsSpecial) {
    pSelection = lowercaseAlphabetChar + uppercaseAlphabetChar + numericChar;
    console.log(pSelection);
    generatePWD();
  }
  // Everything
  else if (wantsLower && wantsUpper && wantsNumbers && wantsSpecial) {
    pSelection = lowercaseAlphabetChar + uppercaseAlphabetChar + numericChar + specialChar;
    console.log(pSelection);
    generatePWD();
  }
  //Lowercase and Numbers
  else if (wantsLower && !wantsUpper && wantsNumbers && !wantsSpecial) {
    pSelection = lowercaseAlphabetChar + numericChar; // ["abc...."]+["123....."] = "abc123"
    console.log(pSelection);
    generatePWD();
  }
  //Lowercase and Numbers and Special
  else if (wantsLower && !wantsUpper && wantsNumbers && wantsSpecial) {
    pSelection = lowercaseAlphabetChar + numericChar + specialChar;
    console.log(pSelection);
    generatePWD();
  }
  // Lowercase and Special
  else if (wantsLower && !wantsUpper && !wantsNumbers && wantsSpecial) {
    pSelection = lowercaseAlphabetChar + specialChar;
    console.log(pSelection);
    generatePWD();
  }
  // Uppercase
  else if (!wantsLower && wantsUpper && !wantsNumbers && !wantsSpecial) {
    pSelection = uppercaseAlphabetChar + "";
    console.log(pSelection);
    generatePWD();
  }
  // UpperCase and Numbers
  else if (!wantsLower && wantsUpper && wantsNumbers && !wantsSpecial) {
    pSelection = uppercaseAlphabetChar + numericChar;
    console.log(pSelection);
    generatePWD();
  }

  // Uppercase and Numbers and Special
  else if (!wantsLower && wantsUpper && wantsNumbers && wantsSpecial) {
    pSelection = uppercaseAlphabetChar + numericChar + specialChar;
    console.log(pSelection);
    generatePWD();
  }
  // Uppercase and Special
  else if (!wantsLower && wantsUpper && !wantsNumbers && wantsSpecial) {
    pSelection = uppercaseAlphabetChar + specialChar;
    console.log(pSelection);
    generatePWD();
  }
  // Numbers
  else if (!wantsLower && !wantsUpper && wantsNumbers && !wantsSpecial) {
    pSelection = numericChar+ "" ;
    console.log(pSelection);
    generatePWD();
  }
  // Numbers and Special
  else if (!wantsLower && !wantsUpper && wantsNumbers && wantsSpecial) {
    pSelection = numericChar + specialChar;
    console.log(pSelection);
    generatePWD();
  }
  // Special
  else if (!wantsLower && !wantsUpper && !wantsNumbers && wantsSpecial) {
    pSelection = specialChar+ "" ;
    console.log(pSelection);
    generatePWD();
  }

  document.getElementById("password").innerHTML = password;
  console.log(password);

});

