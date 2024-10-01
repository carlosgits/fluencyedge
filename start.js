

//check if palindrome

function isPalindrome(str) {
    const cleanedStr = cleanString(str);
    const len = cleanedStr.length;
    for (let i = 0; i < len / 2; i++) {
        if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function cleanString(str) {
    let result = '';
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            result += char.toLowerCase();
        }
    }
    return result;
}

}