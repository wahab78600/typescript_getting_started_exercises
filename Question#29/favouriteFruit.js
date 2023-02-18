var fruits = ["Pineappl", "Bannana", "Apple", "sugercan"];
console.log(".................FAVOURITE FRUITS....................");
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var n = fruits_1[_i];
    console.log(n);
}
if (fruits.indexOf("Bannana")) {
    console.log("I really like bananas!");
}
else {
    console.log("..");
}
if (fruits.indexOf("Pineappl") == 0) {
    console.log("I really like Pineapple!");
}
if (fruits.indexOf("Apple")) {
    console.log("I really like Apple!");
}
else {
    console.log("..");
}
