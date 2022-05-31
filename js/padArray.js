// REMEMBER TO PSEUDOCODE
exports.pad = function(array, minSize, value=null) {
    
    let padCount = 0;
    let fillLen = minSize - array.length;
    let answer = '';
    if (fillLen < 1) {
        answer = array;
    } else {
        while (padCount < fillLen) {
            array.push(value);
            padCount++;
        };
        answer = array;
    };
    return answer;
}



// not sure why .padEnd will not work, tried on several sites

/*

if (array.length < minSize) {
      let padStr = array.join("").toString();
      padStr.padEnd(minSize, value);
      return padStr;
    } else {
    return array;
    }

*/