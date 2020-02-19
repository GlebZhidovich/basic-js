module.exports = function transform(arr/* arr */) {
    if (Array.isArray(arr)) {
        let newArr = [...arr];
        let result = [];

        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] === '--discard-next') {
                i++;
                continue;
            }
            if (newArr[i] === '--discard-prev'){
                result.pop();
                continue;
            }
            if (newArr[i] === '--double-next'){
                newArr[i + 1] !== undefined ? result.push(newArr[i + 1]) : null;
                continue;
            }
            if (newArr[i] === '--double-prev'){
                newArr[i - 1] !== undefined ? result.push(newArr[i - 1]) : null;
                continue;
            }
            result.push(newArr[i]);
        }

        return result;
    }
    throw new Error();
};
