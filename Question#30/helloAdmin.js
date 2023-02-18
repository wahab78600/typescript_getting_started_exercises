var username = ["Wahab", "masud", "saud", "admin", "hassan", "jawad"];
for (var _i = 0, username_1 = username; _i < username_1.length; _i++) {
    var n = username_1[_i];
    if (n == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(n, " thank you for logging in again."));
    }
}
