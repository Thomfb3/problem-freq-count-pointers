// // add whatever parameters you deem necessary

function pivotIndex(nums) {
    // Set the right sum as the total of all nums in the array
    let rightSum = nums.reduce((a, b) => a + b, 0);
    // Set leftSum to 0
    let leftSum = 0;
    // Set pivot index to default -1
    let pivotIdx = -1;

    //loop through array 
    for (let i = 0; i < nums.length; i++) {
        //add nums[i] to leftSum
        leftSum += nums[i];
        //if left and right sum are equal set pivot to index and break
        if (leftSum === rightSum) {
            pivotIdx = i;
            break;
        };
        //or subtract nums[i] from right sum
        rightSum -= nums[i];
    };
    // return pivot
    return pivotIdx;
};

//[1,2,1,6,3,1];

//0+1           14-1
//   1         13
//     3    10
//      4 4
//break