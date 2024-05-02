//More Guests: You've found a bigger dinner table, so there's room for more guests.
var guestList = ["Kamran", "Hamza", "Kashif", "Mehtab"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi aa sakta");
guestList.splice(0, 1, "Amir");
console.log("Good news! we have found a biggest table for dinner.");
guestList.unshift("Ali");
guestList.push("Zain");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Osman");
console.log("Uploaded list of our Guests");
guestList.forEach(function (oneGuest) { return console.log("Salman ".concat(oneGuest, ", would you like to dinner with me")); });
