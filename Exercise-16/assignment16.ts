//More Guests: You've found a bigger dinner table, so there's room for more guests.


let guestList = ["Kamran", "Hamza", "Kashif", "Mehtab"];
let dontCome = guestList [0];
console.log(dontCome, "Nahi aa sakta");
guestList.splice(0,1, "Amir");
console.log("Good news! we have found a biggest table for dinner.");
guestList.unshift("Ali");
guestList.push("Zain");
let middleIndex:number = Math.floor(guestList.length/2);
guestList.splice(middleIndex, 0, "Osman");
console.log("Uploaded list of our Guests");
guestList.forEach(oneGuest => console.log(`Salman ${oneGuest}, would you like to dinner with me`));
