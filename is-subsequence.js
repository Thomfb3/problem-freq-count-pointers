// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    //loop over string two with two pointer
    let pointer1 = 0;
    for (let pointer2 = 0; pointer2 < str2.length; pointer2++) {
        //compare pointer 1 on string 2 to pointer 2 of string 1
        // increment pointer 2 only when there's a match
        if(str2[pointer2] === str1[pointer1]) { pointer1++ };

        //if pointer 2 makes it to str1 length return true
        if(pointer1 >= str1.length) return true;
    };
    //else return false
    return false;
};
