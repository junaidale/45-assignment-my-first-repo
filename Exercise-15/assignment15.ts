/* Changing Guest List: One of your guests can't make it to the dinner, 
so you need to send out a new set of invitations with a replacement guest.*/


let guestList = ["Kamran", "Hamza", "Kashif", "Mehtab"];
let dontCome = guestList [0];
console.log(dontCome, "Nahi aa sakta");
guestList.splice (0,1, "Amir");
guestList.forEach(guest => console.log(`salman ${guest}, would you like to dinner with me?`));
