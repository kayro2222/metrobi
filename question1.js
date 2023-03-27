var findDuplicates = function (array) {
    var duplicateValues = [];
    var uniqueValues = new Set();
    for (var i = 0; i < array.length; i++) {
        var currentValue = array[i];
        if (uniqueValues.has(currentValue)) {
            duplicateValues.push(currentValue);
        }
        else {
            uniqueValues.add(currentValue);
        }
    }
    return duplicateValues;
};

console.log(findDuplicates([1,1,2,2,3,3,4,5,6]))