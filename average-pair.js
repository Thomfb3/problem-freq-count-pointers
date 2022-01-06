// add whatever parameters you deem necessary
// the array is sorted from low to high?
// only contains numbers ?

function averagePair(nums, targetAvg) {
    //create pointers at the start and end of the array
    let left = 0;
    let right = nums.length - 1;
    //loop 
    while (left < right) {
        // get average of right and left
        let avg = (nums[left] + nums[right]) / 2;
        // compare average to targetAvg, if a match return true
        if(avg === targetAvg) return true;
        // if it's larger move right down
        // if it's less mover left up
        if(avg > targetAvg) {
            right--;
        } else {
            left++;
        };
    };
    //return boolean
    return false;
};
