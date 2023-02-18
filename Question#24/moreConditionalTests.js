var str1 = "wahab";
var str2 = "masud";
if (str1 == "wahab") {
    console.log(true);
}
else {
    console.log(false);
}
if (str1 == str2) {
    console.log(true);
}
else {
    console.log(false);
}
if (str1 == str1.toLowerCase()) {
    console.log(true);
}
else {
    console.log(false);
}
if (2 == 2) {
    console.log(true);
}
else if (2 != 2) {
    console.log(true);
}
else if (2 > 2) {
    console.log(true);
}
else if (2 < 2) {
    console.log(true);
}
else if (2 >= 2) {
    console.log(true);
}
else if (2 <= 2) {
    console.log(true);
}
if (true || true) {
    console.log(true);
}
if (true || false) {
    console.log(true);
}
if (false || false) {
    console.log(false);
}
if (true && true) {
    console.log(true);
}
if (true && false) {
    console.log(true);
}
if (false && false) {
    console.log(false);
}
var arr1 = ["wahab", "saud", "masud"];
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var n = arr1_1[_i];
    if (n == "wahab") {
        console.log("elemen is in array");
        break;
    }
}
