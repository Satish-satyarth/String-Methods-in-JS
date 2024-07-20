const name = "satish_satyarth";
console.log(name);

console.log(name.length);

console.log(name.char.At(5));

console.log(name.toUppercase());

//The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.
console.log(name.charCodeAt('s'));

console.log(name.toLowercase());

// Trim -> The trim() method removes whitespace from both sides of a string.

let userName = "   Satishsatyarth2002@gmail.com   ";
console.log(userName.trim());

// The substring() method extracts characters from start to end (exclusive).
console.log(userName.substring(0,10));


// The slice() method extracts a part of a string.
console.log(userName.slice(-5,10));

//  Replace -> replace(pattern, replacement)
// ReplaceAll -> 
console.log(userName.replace('2002', 'yadav'));

/*
The includes() method returns true if a string contains a specified string.

Otherwise it returns false.

The includes() method is case sensitive.
*/
console.log(userName.includes("satyarth"));


let Myadd = "vill Barajor post barajor ps jhajha";
console.log(Myadd.split(" "));
