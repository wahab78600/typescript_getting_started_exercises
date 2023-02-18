var magiciansnames = ["masud", "haseeb", "saud"];
function showmagicians(magiciansnames) {
    for (var _i = 0, magiciansnames_1 = magiciansnames; _i < magiciansnames_1.length; _i++) {
        var n = magiciansnames_1[_i];
        console.log(n);
    }
}
showmagicians(magiciansnames);
function makegreat(phrase) {
    var arr = [];
    for (var i = 0; i < phrase.length; i++) {
        arr[i] = "Great" + phrase[i];
    }
    return arr;
}
var arr2 = makegreat(magiciansnames);
showmagicians(arr2);
