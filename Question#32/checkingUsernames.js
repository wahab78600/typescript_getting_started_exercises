var currentusers = ["wahab21", "masud12", "haseeb21", "saud302", "sam22"];
var newusers = ["mic21", "sae12", "wahab21", "hs31", "sam22"];
var ll = 0;
for (var _i = 0, newusers_1 = newusers; _i < newusers_1.length; _i++) {
    var n = newusers_1[_i];
    ll = 0;
    for (var _a = 0, currentusers_1 = currentusers; _a < currentusers_1.length; _a++) {
        var k = currentusers_1[_a];
        if (n == k) {
            console.log("the person will need to enter a new username");
            ll = 1;
            break;
        }
    }
    if (ll == 0) {
        console.log("".concat(n, " username is available"));
    }
}
