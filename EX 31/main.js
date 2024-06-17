// Exercise 31
var userName = ["Fahad", "Admin", " Arifa", "Tahir"];
if (userName.length === 0) {
    console.log("You Arry is empty we need to find some users");
}
else {
    userName.forEach(function (user) {
        if (user === "Admin") {
            console.log("HELO ".concat(user, " would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(user, " thank you for logging in again."));
        }
    });
    // step2
}
userName = [];
if (userName.length == 0) {
    console.log("You Arry is empty we need to find some users");
}
