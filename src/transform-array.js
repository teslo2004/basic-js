module.exports = function transform(arr) {
    var result = [];

    if (!Array.isArray(arr)) throw new Error();

    for (var i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "--discard-prev":
                result.pop();
            break;
            case "--discard-next":
                i++;
            break;
            case "--double-next":
                if (i + 1 !== arr.length)
                    result.push(arr[i + 1]);
                break;
            case "--double-prev":
                if (i - 1 >= 0)
                    result.push(arr[i - 1]);
                break;
            default:
                result.push(arr[i]);
        }
    }
    return result;
};

