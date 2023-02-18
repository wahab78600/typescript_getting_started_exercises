var ordinalnumbers = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th"];
for (var _i = 0, ordinalnumbers_1 = ordinalnumbers; _i < ordinalnumbers_1.length; _i++) {
    var n = ordinalnumbers_1[_i];
    console.log(n);
}
var ordinalnumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
console.log("BY LOOP");
for (var _a = 0, ordinalnumber_1 = ordinalnumber; _a < ordinalnumber_1.length; _a++) {
    var k = ordinalnumber_1[_a];
    if (k == "1") {
        console.log(k + "st");
    }
    else if (k == "2") {
        console.log(k + "nd");
    }
    else if (k == "3") {
        console.log(k + "rd");
    }
    else {
        console.log(k + "th");
    }
}
