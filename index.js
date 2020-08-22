

/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)




let votingAge = 18;
// all of my work was done on repl.it because I couldnt figure out how to do it in VSC.
if (votingAge >= 18) {
    console.log(true);
}
else {
    console.log(false);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let num1 = 4;
let num2 = 3;

if (num1 > num2){
  num1 = num1 + num2;
  console.log(num1);
}
else {
  num2 = num2 - num1;
  console.log(num2)
}




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let yearChange = "1999";
Number(yearChange);
console.log(yearChange);



//Task d: Write a function to multiply a*b 

function myFunc(a,b){
  return a * b;
}
console.log(myFunc(2,3));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 



function whatAge(myAge){
  return myAge * 7;
}

console.log(whatAge(29));



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight





// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function foodWeight (age, weight){
//this is for 1+ years old until next comment
  if (age >= 1){
      if (weight < 6){
        return (weight * .05);
      }
      else if (weight >= 6 && weight < 11) {
        return (weight * .04);
      }
      else if (weight >= 11 && weight <= 15) {
        return (weight * .03);
      }
      else{
        return (weight * .05);
      }
    }
  else{
      if (age < (4/12)) {     
        return (weight * .1);
      }
      else if (age < (7/12)){
        return (weight * .05);
      }
      else{
        return (weight * .04);
      }
    }
  }

console.log(foodWeight(1, 15));







/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  
//Rules - Computers "choice"
//.00 - .33 : Rock (4)
//.33 - .66 : Paper(5)
//.66 - .99 : Scissors(6) 


function rps(myHand){
  let compChoice = 0;
  compChoice = Math.random();
  let myChoice = myHand.length;
  if (myChoice ===6){
    if (compChoice >= 0 && compChoice < .33){
      return "Scissors does not beat Rock! You lose!"
      }
    else {
      return "You win1!"
      }
    }
  else if (myChoice ===4){
    if (compChoice >= .33 && compChoice < .66){
      return "Rock does not beat Paper! You lose!" 
      }
    else {
      return "You win2!"
      }
    }
 else{
    if (compChoice >= .66 && compChoice < 1){
      console.log(" Paper does not beat Scissors! You lose!")
      }
      else {
      console.log ("You win3!")
    }
  }
}
console.log(rps("Rock"));



  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
function mericanize (kM){
 return ( kM * 0.621371 );
}
console.log(mericanize(300));
//186.4113 is correct for 300


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function fancyTea (feet){
  return ( feet * 30.48 );
 }
 console.log(fancyTea(300));
 //9144 is correct for 300



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

function annoyingSong(startBottle){ 
  let nextBottle = startBottle - 1;
  console.log(startBottle, " bottles of soda on the wall.")
  console.log(startBottle, " bottles of soda on the wall.")
  console.log("Take one down pass it around " , nextBottle , " bottles of soda on the wall.")
}
annoyingSong(21);


/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes `a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
