module.exports = class DepthCalculator {
    calculateDepth(arr, depth = 1/* arr */) {
        let newDepth = depth;
        for (let i = 0; i < arr.length; i += 1) {
            if (Array.isArray(arr[i])) {
                newDepth += 1;
                return this.calculateDepth(arr.flat(), newDepth);
            }
        }
        return newDepth;
    }
};