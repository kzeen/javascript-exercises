const palindromes = function (str) {
 const sanitizedStr = str.toLowerCase().replace(/[.,!?;\s]/g, "");
 
 let left = 0;
 let right = sanitizedStr.length - 1;
 
 while (left <= right) {
    if (!(sanitizedStr.charAt(left) === sanitizedStr.charAt(right))) {
        return false;
    }
    left++;
    right--;
 }
 return true;
};

// Do not edit below this line
module.exports = palindromes;
