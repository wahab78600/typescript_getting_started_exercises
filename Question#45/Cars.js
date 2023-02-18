function builtcar(builter, model) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var car = { builter: builter, model: model };
    args.forEach(function (arg, index) {
        if (index % 2 == 0) {
            car[args[index]] = args[index + 1];
        }
    });
    return car;
}
var myCar = builtcar('Ford', 'Transit', "Color", 'Black', "silincer", "exhaust");
console.log(myCar);
