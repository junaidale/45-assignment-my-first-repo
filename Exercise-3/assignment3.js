/*Name Cases: Store a person’s name in a variable,
 and then print that person’s name in lowercase, uppercase, and titlecase.*/
var myName = "Junaid Ahmed";
//UpperCase
console.log(myName.toUpperCase());
//LowerCase
console.log(myName.toLowerCase());
//TitleCase
console.log(myName.charAt(0).toUpperCase() +
    myName.slice(1).toLowerCase());
