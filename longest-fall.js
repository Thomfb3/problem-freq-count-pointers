// add whatever parameters you deem necessary
function longestFall(array) {
    if(array.length === 0) return 0;

    let longestArr = [];
    let longest = 1;
    
    for(let num of array) {
        if(num < longestArr[longestArr.length - 1]) {
            longestArr.push(num);
            longest = longestArr.length > longest ? longest + 1 : longest;
        } else {
            longestArr = [num];
        };
    };

    return longest;
};

