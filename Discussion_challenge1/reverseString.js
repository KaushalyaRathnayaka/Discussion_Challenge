// program to reverse a string

function reverseString(str) {

    /*
    1 - Congratulations 👏👏👏✔, it is working
2 - try to do some input validations, if user add a number instead of a string then how you handle it
3- Try to do it without let empty_str, instead of creating a auxiliary variable you can swap the elements with in the same array
    */
    
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
