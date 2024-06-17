// Exercise 30
var userName = ["Fahad", "Admin", " Arifa", "Tahir"];
for (var _i = 0, userName_1 = userName; _i < userName_1.length; _i++) {
    var use = userName_1[_i];
    if (use === "Admin") {
        console.log("HELO ".concat(use, " would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(use, " thank you for logging in again."));
    }
}
