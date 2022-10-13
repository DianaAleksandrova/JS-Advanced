function functionalSum(n) {

    let inner = function(a) {
        n += a;
        return inner;
    };
    inner.toString = function() {
        return n;
    }

    return inner;
}

console.log(functionalSum(1)(6)(-3).toString());