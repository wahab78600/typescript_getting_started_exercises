function makeshirt(size, text) {
    if (size === void 0) { size = "large"; }
    if (size == "large" || size == "medium") {
        console.log("I LOve TypeScript");
    }
    if (size == "small") {
        console.log("shirt size is ".concat(size, " and the text printed on it is ").concat(text));
    }
}
makeshirt("large", "I Love");
makeshirt("small", "I make");
