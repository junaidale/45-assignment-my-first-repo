//No Users: Ensure your user list isn’t empty.
var userNames = ["babar", "zaman", "hanan", "saif"];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames = [];
    console.log("All user Name have been removed. " + userNames.length);
}
