/*Greetings: Use the array from Exercise 11. Instead of just printing each person’s name,
print a message to them. The message should be the same for each person, but personalized with their name.*/
var friendsName = ["Hamza", "Umar", "Amir"];
friendsName.forEach(function (friendName) { return console.log("Hello ".concat(friendName, ", How are you")); });
