var locations = ["Pakistan", "China", "America", "England", "Australia"];
console.log("original order of array");
for (var _i = 0, locations_1 = locations; _i < locations_1.length; _i++) {
    var n = locations_1[_i];
    console.log(n);
}
var locationscopy = [];
for (var i = 0; i < locations.length; i++) {
    locationscopy[i] = locations[i];
}
console.log("..............................\narray in alphabetical order without modifying the actual list.");
locationscopy.sort();
for (var _a = 0, locationscopy_1 = locationscopy; _a < locationscopy_1.length; _a++) {
    var n = locationscopy_1[_a];
    console.log(n);
}
console.log("....................\noriginalarray.");
for (var _b = 0, locations_2 = locations; _b < locations_2.length; _b++) {
    var n = locations_2[_b];
    console.log(n);
}
console.log("..............................\narray reverse alphabetical order..............");
locationscopy.reverse();
for (var _c = 0, locationscopy_2 = locationscopy; _c < locationscopy_2.length; _c++) {
    var n = locationscopy_2[_c];
    console.log(n);
}
console.log("....................\noriginalarray.");
for (var _d = 0, locations_3 = locations; _d < locations_3.length; _d++) {
    var n = locations_3[_d];
    console.log(n);
}
//original array reverse order
console.log("............................\nreverse order");
locations.reverse();
for (var _e = 0, locations_4 = locations; _e < locations_4.length; _e++) {
    var n = locations_4[_e];
    console.log(n);
}
//again reverse order
console.log("............................\nagain reverse order");
locations.reverse();
for (var _f = 0, locations_5 = locations; _f < locations_5.length; _f++) {
    var n = locations_5[_f];
    console.log(n);
}
//sorting orginal array
console.log(".....................\nalphabetical order original array");
locations.sort();
for (var _g = 0, locations_6 = locations; _g < locations_6.length; _g++) {
    var n = locations_6[_g];
    console.log(n);
}
//again sorting orginal array
console.log(".....................\norder has been changed in original order");
locations.reverse();
for (var _h = 0, locations_7 = locations; _h < locations_7.length; _h++) {
    var n = locations_7[_h];
    console.log(n);
}
