// add whatever parameters you deem necessary
const makeDifferenceMap = (array, num) => {
    let differences = new Map();
    for (let val of array) {
        differences.set(val, num - val);
    };
    return differences;
};


function countPairs(array, num) {
    //create difference map (array[i] : array[i] - num)
    let differenceMap = makeDifferenceMap(array, num);
    let sumPairs = 0;

    //loop check to check if val is another key
    for (let [key, val] of differenceMap.entries()) {
        //no duplicates
        if(key !== val) {
            //check for val, increment sumPairs, and delete the reverse pair
            if(differenceMap.has(val)) {
                sumPairs++;
                differenceMap.delete(val);
            };
        };
    };
    return sumPairs;
};

// 0(n)