// add whatever parameters you deem necessary
const makeNumFrequencyMap = (numStr) => {
    let frequencies = new Map();
    
    for (let num of numStr) {
        let numCount = frequencies.get(num) || 0;
        frequencies.set(num, numCount + 1);  
    };
    return frequencies;
};


function sameFrequency(num1, num2) {
    let num1Str = num1.toString();
    let num2Str = num2.toString();

    if(num1Str.length !== num2Str.length) return false;
    //get number frequency of num1 and num2
    let num1Frequencies = makeNumFrequencyMap(num1Str);
    let num2Frequencies = makeNumFrequencyMap(num2Str);
    
    //loop through num1 freqs comparing to num2 freqs
    for(let num of num1Frequencies.keys()) {
        if (num1Frequencies.get(num) !== num2Frequencies.get(num)) return false;
    };
    //return boolean
    return true;
};
