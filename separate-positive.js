// add whatever parameters you deem necessary
function separatePositive(array) {
    let left = 0;
    let right = array.length - 1;

    //loop over array
    while (left < right) {
        //Compare left to zero
        if(array[left] < 0) {
            //swap left and right
            if(array[right] >= 0) {
                let temp = array[right];
                array[right] = array[left];
                array[left] = temp;
                left++;
                right--;
            } else {
                right--;
            };
        } else {
            //keep moving left up
            left++;
        };
    };
    return array;
};
