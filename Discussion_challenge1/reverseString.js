// program to reverse a string

function reverseString(str) {

    // empty string
    let empty_str = "";
    for (let i = str.length - 1; i >= 0; i--) {
        empty_str += str[i];
    }
    return empty_str;
}

// take input from the user
const string = window.prompt('Enter a string: ');

const result = reverseString(string);
console.log(result);