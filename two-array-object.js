// add whatever parameters you deem necessary

function twoArrayObject(arr1, arr2) {
    //declare obk
    let twoArrObj = {};
    //loop arr1 
    for (let i = 0; i < arr1.length; i++) {
        if (i > arr2.length - 1) {
            twoArrObj[arr1[i]] = null;
        } else {
            twoArrObj[arr1[i]] = arr2[i];
        };
    };
    //return obj
    return twoArrObj;
};
