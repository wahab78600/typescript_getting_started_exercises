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
