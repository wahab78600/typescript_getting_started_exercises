var username = ["Wahab", "masud", "saud", "admin", "hassan", "jawad"];
var end = username.length;
for (var i = 0; i < end; i++) {
    username.pop();
}
if (username.length == 0) {
    console.log("We need to find some users!");
}
