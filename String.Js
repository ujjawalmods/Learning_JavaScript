const gameName = "BloodSucker"
console.log(typeof gameName)
console.log(gameName.charAt(4))
console.log(gameName.indexOf("S"))

const gamename = new String("BloodSucker")
console.log(typeof gamename)
console.log(typeof gameName)

console.log(gameName.substring(0, 5));
console.log(gameName.slice(0, 5));
console.log(gameName.slice(-7, -2)); // -7 means start from 7th last character and -2 means end at 2nd last character , from -7 to -2.

const newString = "       ujjawal        "
console.log(newString.trimStart());

// Trim Used to remove the extra spaces from the start and end of the string.

const url = "https://www.youtube.com/watch?v=1234567890"
console.log(url.replace("https", "http"));

// Replace is used to replace a part of the string with another string.

console.log(url.includes("youtube"));
console.log(url.includes("-"));

