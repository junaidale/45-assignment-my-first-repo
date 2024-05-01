/* Changing Guest List: One of your guests can't make it to the dinner,
so you need to send out a new set of invitations with a replacement guest.*/
var guestList = ["Kamran", "Hamza", "Kashif", "Mehtab"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi aa sakta");
guestList.splice(0, 1, "Amir");
guestList.forEach(function (guest) { return console.log("salman ".concat(guest, ", would you like to dinner with me?")); });
