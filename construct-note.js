// add whatever parameters you deem necessary...

//will the message only be string?
//should the comparison be strict typed?
//will there be empty spaces?

const makeFrequencyMap = (array) => {
    let frequencies = new Map();
    for (let val of array) {
        let valCount = frequencies.get(val) || 0;
        frequencies.set(val, valCount + 1);  
    };
    return frequencies;
};

const constructNote = (msg, str) => {
    //if the msg greater than the str return false;
    if (str.length < msg.length) return false;

    //get a character frequency count of the message -> use createFrequencyMap()
    let msgCharFreq = makeFrequencyMap(msg);
    //get a character frequency of the str -> use createFrequencyMap()
    let strCharFreq = makeFrequencyMap(str);

    //loop through msg char frequency and check available characters in str
    for(let char of msgCharFreq.keys()) {
        if (strCharFreq.get(char) < msgCharFreq.get(char)) return false;
    };
    // return boolean
    return true;
};
