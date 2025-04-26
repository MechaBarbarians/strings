function testFunction(){
console.log("This button is working");
   let header= document.getElementById("heading");
   header.innerHTML = "JavaScript is awesome!";
}

function playCraps()
{
    let results = document. getElementById("crapsResults")
    let die1 = Math.floor(Math.random() * 6) + 1;

    let die2 = Math.floor(Math.random() * 6) + 1;

    console.log("Die 1: " + die1);

    console.log("Die 2: " + die2);

    let sum = die1 + die2

    if (sum == 7 || sum == 11)
    {
         console.log("CRAPS - YOU LOSE... ): ");
         results.innerHTML = "CRAPS - YOU LOSE... ): ";
    }
    else if (die1 == die2 && die1 % 2 == 0)
        {
             console.log("YOU WON!!")
             results.innerHTML = "YOU WON!!"
        }
        else
        {
            console.log("You Pushed.")
            results.innerHTML = "You Pushed."
        }
}

function playDoubles()
{

    let results = document. getElementById("crapsResults")
    let die3 = Math.floor(Math.random() * 6) + 1;

    let die4 = Math.floor(Math.random() * 6) + 1;

    if (die3 == die4)
        {
             console.log("WINNER!! DOUBLES!! ");
             results.innerHTML = "WINNER!! DOUBLES!! ";
}
 else 
    {
         console.log("Better luck next time")
         results.innerHTML = "Better luck next time"
    }
}

function checkForPalindrome() 
{

     console.log("Palindrome Checker!")
  
     let inputField = document.getElementById("palindromeField");

     let results = document.getElementById("palindromeResults");

     console.log(inputField);
     let inputValue = inputField.value;
     let stringLength = inputValue.length;

     if (stringLength > 0)
     {
          console.log("Entered conditions")
          let iterationCount = Math.floor(stringLength/2);
          console.log(iterationCount)
          let lastCharacterIndex = inputValue.length - 1;

          let palindromeCheckResult = true;


          for(let i = 0; i < iterationCount; i++)
          {

               if (inputValue[i] !== inputValue[lastCharacterIndex - i])
               {
                    console.log("not a palindrome.");
                    
                    palindromeCheckResult = false;
                    results.innerHTML = "Not a Palindrome.";
                    break;
               }
          }
          if (palindromeCheckResult)
          {
               console.log("This is a Palindrome.");
               results.innerHTML = "This is a Palindrome.";
          }

     }
    }

    function userInfoValidation()
    {

     console.log("checking user info");


     let firstNameField = document.getElementById("firstNameField");

     let lastNameField = document.getElementById("lastNameField");

     let zipField = document.getElementById("zipField");

     let results = document.getElementById("userInfoResults");

     results.innerHTML = "";
    
     let firstNameValue = firstNameField.value;

     let lastNameValue = lastNameField.value;

     let firstLastName = firstNameValue + " " + lastNameValue;

     let zipValue = zipField.value;

     console.log(firstLastName);


     if(firstLastName.length > 20)
     {
          results.innerHTML = "Thats alot of characters, keep it under 20 please.";

          return; 
     }
     
     let zipRegex = /^\d{5}$/

     if (!zipRegex.test(zipValue))
     {

          results.innerHTML = "The zip code needs to be 5 digits exactly.";

          return;
    }
  

    results.innerHTML = "Thats a great zip code!";
    console.log("input validated!");

}