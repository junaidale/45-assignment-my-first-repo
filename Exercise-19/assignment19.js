/*Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message
indicating the number of people you are inviting to dinner.*/
// Guest list from exercise 14
var guestList = ["Summaiya", "Hania", "Hoorain", "Shahzain"];
//guestList.forEach(oneGuest => console.log(`Assalam-o-Alaikum ${oneGuest}, would you like to dinner with me?`));
var lengthGuests = guestList.length;
// Print the message for dinner invitation
console.log("We are Inviting total ".concat(lengthGuests, " guests."));
