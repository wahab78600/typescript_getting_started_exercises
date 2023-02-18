function sandwitchitem(items) {
    for (var i = 0; i < items.length; i++) {
        console.log("The SandWitch Contains %s. ", items[i]);
    }
    console.log("\n");
}
var arr1 = ["Chicken", "Mayo", "Vagetables", "Ketchup"];
var arr2 = ["Olives", "Mayo", "Vagetables", "Ketchup", "Salad"];
var arr3 = ["Mushrooms", "Olives", "Vagetables", "Ketchup"];
console.log(".............. First .............\n");
sandwitchitem(arr1);
console.log(".............. Second .............\n");
sandwitchitem(arr2);
console.log(".............. Third  .............\n");
sandwitchitem(arr3);
