module.exports = function repeater(str, options/* str, options */) {
    let newStr = str + '';
    if (options) {
        const {repeatTimes, addition, additionRepeatTimes} = options;
        let {separator, additionSeparator} = options;
        if (separator === undefined) {
            separator = '+';
        }
        if (!additionSeparator === undefined) {
            additionSeparator = '|';
        }
        function repeat(str, rep, sep) {
            let newStr =  str;
            for (let i = 0; i < (rep ? rep - 1 : 0); i += 1 ) {
                newStr += sep + str;
            }
            return newStr;
        }

        if (addition !== undefined) {
            newStr += repeat(addition, additionRepeatTimes, additionSeparator);
        }

        return repeat(newStr, repeatTimes, separator);
    }
    return newStr;
};
  