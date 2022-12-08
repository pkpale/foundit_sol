function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    return function () {
                        return a + b + c + d + e;

                    }
                }
            }
        } 
    }
}

console.log(sum(2)(3)(4)(5)(8)());

console.log(sum(3)(1)(23)(13)(23)());