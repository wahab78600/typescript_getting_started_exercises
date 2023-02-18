var names = ["wahab", "masud", "saud"];
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var n = names_1[_i];
    console.log("i would like to invite ".concat(n));
}
console.log("".concat(names[1], " donot come to the party"));
names[1] = "haseeb";
console.log("new list is");
for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
    var invitedpeople = names_2[_a];
    console.log("i would like to invite ".concat(invitedpeople));
}
console.log("found a bigger dinner table ......");
//adding last person
names.push("Junaid");
// adding first person
names.unshift("ali");
//adding in middle
names.splice(2, 0, "taha");
for (var _b = 0, names_3 = names; _b < names_3.length; _b++) {
    var n = names_3[_b];
    console.log("I would like to invite : ".concat(n));
}
console.log("We can invite only two people for dinner");
for (var i = 0; i <= names.length; i++) {
    console.log("Sorry ".concat(names.pop(), " you are not invited in the party"));
}
console.log("..............................");
for (var _c = 0, names_4 = names; _c < names_4.length; _c++) {
    var n = names_4[_c];
    console.log("You are still invited : ".concat(n));
}
for (var _d = 0, names_5 = names; _d < names_5.length; _d++) {
    var n = names_5[_d];
    names.pop();
}
names.pop();
for (var _e = 0, names_6 = names; _e < names_6.length; _e++) {
    var n = names_6[_e];
    console.log(n);
}
