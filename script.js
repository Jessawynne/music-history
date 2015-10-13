//var colors = ["red", "blue", "yellow", "purple"];
//var luckyNumbers = [4, 8, 15, 16, 23, 42];
//var boolValues = [true];

/*
var myColor = colors[0];
var yourColor = colors[1];

colors[4] = "orange";

colors.push("teal");
colors.push("indigo");
colors.push("green");

console.log("Colors", colors);*/

/*colors.shift("orange"); //Add item to beginning
colors.unshift(); //Remove from beginning, opposite of pop()

var lastItem = colors.pop();
console.log("lastItem", lastItem);
console.log("Colors", colors);*/

/*
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);

//Loop over colors
for (var index = 0; index < colors.length; index++) {
	console.log("current color is ", colors[index]);
}
//Simple loop that increments a value and 
for (var i = 10; i <= 100; i += 5) {
	console.log(i);
}
//Loop over every other number*/

/*for (var index = 0; index < luckyNumbers.length; index = index + 2) {
	console.log(luckyNumbers[index]);
}*/

/*
//Increment by 10
for (var i = 10; i <= 200; i += 10) {
	console.log("plus 10", i);
};

//Divide by 2
for (var i = 1024; i >= 2; i = i / 2) {
	console.log("divided by 2", i);
};

//Add items to an array
var itemArray = [];
for (var i = 2; i <= 512; i = i * i) {
	console.log("itemArray", itemArray);
}
*/

/*
//Add items to end of the array if even
var wow = []; // [] makes it an array

for (var x = 100; x > 0; x-=1) {

	console.log("x", x);

	if (x % 2 === 0) {
		wow.unshift(x);
	} else {
		wow.push(x);
	}
}

console.log("wow", wow);*/

/*
var firstName = "Jessa";
var lastName = "Parker";
var fullName = firstName + lastName;
//console.log("fullName", fullName.length);
//console.log("fullName", fullName.indexOf("J"));
//console.log("fullName", fullName.charAt(3));

var phrase = "The lazy dog";
var newPhrase = phrase.replace("lazy", "bounding");
alert(newPhrase);

var number = "1000";
var integer = parseInt(number);
*/
/*
// div id="container" in index.html
var el = document.getElementById("container");
console.log("el", el)

//Reseting html content in div id="container"
el.innerHTML = "I love NSS";
var containerText = el.innerHTML;
console.log("containerText", containerText)*/

//Sonnet.html content
var sonnetElement = document.getElementById("sonnet");
var sonnetText = sonnetElement.innerHTML;
console.log("sonnetText", sonnetText); 

var indexOfOrphans = sonnetText.indexOf("orphans");
console.log("indexOfOrphans", indexOfOrphans);
console.log("length of sonnet", sonnetText.length);

//To replace in actual DOM
sonnetText = sonnetText.replace("winter", "yuletide");
sonnetElement.innerHTML = sonnetText;
	//or
sonnetElement.innerHTML = sonnetText.replace("winter", "yuletide");

//To global replace 
sonnetElement.innerHTML = sonnetText.replace(/the/g, "a large");





























