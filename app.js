// FUNCTIONS Chap#35-39:


// function add() {
//     var a = 20;
//     var b = 50;
//     console.log( a + b );
// }

// add();


// function add(a,b) {       // parameter
//     console.log( a + b );   
// }

// add(10,40);            // argument



// function bioData( name , age , city ) {
//     console.log(`My name is ${name}. I am ${age} years old & I lived in ${city}.`);
// }

// bioData(prompt("Enter your name...") , prompt("Enter your age...") , prompt("Enter your city...") );



// Multiplication Table:

// function multiplicationTable(table) {
//     for ( i = 1 ; i <= 10 ; i++ ) {
//         document.write(`${table} x ${i} = ${table*i} <br>`);
//     }
// }

// multiplicationTable(+prompt("Enter any number..."));



// Palindrome:

// function palindrome(word) {
//     var reverseWord = "";

//     for ( var i = word.length - 1 ; i >= 0 ; i-- ) {
//         reverseWord += word[i];
//     }

//     if ( word === reverseWord ) {
//         console.log("Word is palindrome...")
//     }
//     else {
//         console.log("Word is not palindrome...")
//     }
// }

// palindrome(prompt("Enter a word...."));




// function palindrome(word) {
//     var reverseWord = "";

//     for ( var i = word.length - 1 ; i >= 0 ; i-- ) {
//         reverseWord += word[i];
//     }

//     if ( word === reverseWord ) {
//         console.log("Word is palindrome...");
//     }
//     else {
//         console.log("Word is not palindrome...");
//     }

//     return word;
// }

// var kuchBhi = palindrome(prompt("Enter a word...."));




// Calculator Program:


// function calculator(firstVal,secondVal,operator) {

//     if ( operator === "+" ) {
//         return firstVal + secondVal;
//     }
//     else if ( operator === "-" ) {
//         return firstVal - secondVal;
//     }
//     else if ( operator === "*" ) {
//         return firstVal * secondVal;
//     }
//     else if ( operator === "/" ) {
//         return firstVal / secondVal;
//     }
//     else if ( operator === "%" ) {
//         return firstVal % secondVal;
//     }
//     else {
//         return "Invalid Operator";
//     }

// }

// console.log(calculator(
//     +prompt("Enter 1st value"),
//     +prompt("Enter 2nd value"),
//     prompt("Enter operator")
// ));

// var input = calculator(
//     +prompt("Enter 1st value"),
//     +prompt("Enter 2nd value"),
//     prompt("Enter operator")
// );

// console.log(input);



// if (dayOfWk ==="Sat" || dayOfWk === "Sun") {
//      alert("Whoopee!");
//      }
//      else if (dayOfWk === "Fri") {
//      alert("TGIF!");
//      }
//      else {
//      alert("Shoot me now!");
//      }



// var userInput = prompt("Enter day of week");

// var userInput = userInput.slice(0,6).toLowerCase();

// switch ( userInput ) {

//     case "monday":
//         alert("Today is working day...");
//         break;

//     case "tuesday":
//         alert("Today is working day...");
//         break; 

//     case "wednesday":
//         alert("Today is working day...");
//         break;

//     case "thursday":
//         alert("Today is working day...");
//         break;

//     case "friday":
//         alert("Today is working day...");
//         break;

//     case "saturday":
//         alert("Today is rest day...");
//         break;

//     case "sunday":
//         alert("Today is family day...");
//         break;

//     default:
//         alert("Invalid day");
// };