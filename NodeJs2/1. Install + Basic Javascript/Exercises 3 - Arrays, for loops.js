//--------------------------------------
// Exercises 3 - Arrays, for loops
//--------------------------------------
//Exercise 1 - Array Positioning

var letters = ["a","b","c"];
// show b in the console 

//console.log(letters[1]);

//--------------------------------------
//Exercise 2 - Array Positioning

var friends = [];

// What a lonely array. Add at least 3 friend objects to it.  

friends.push("1");
friends.push("2");
friends.push("3");

//console.log(friends);

//--------------------------------------
//Exercise 3 - Get the index of first occurance of that value. 

var significantMathNumbers = [0, 2.718, 3.14159, 1729]

// You want to programmatically find where the number 1729 is in the array.
// programmatically means that no finger counting allowed. There is a method for this (finding index based of value). 

var findNumber = significantMathNumbers.indexOf(1729);

//console.log(findNumber);

//--------------------------------------
//Exercise 4 - Inserting elements

var diet = ["tomato", "cucumber", "rocolla", "kale"]

// You are a programmer. In one line (one statement) insert hamburger, soda and pizza between the elements rocolla and kale

diet.splice(3, 0, "hamburger", "soda", "pizza");

//console.log(diet);

//--------------------------------------
//Exercise 5 - Remove element

// You don't like kale at all. Remove the LAST element of the array.
// Don't remove by index. You know in advance that it's the last in the array because you are too full already. 

diet.pop();

//console.log(diet);

//--------------------------------------

//--------------------------------------
//Exercise 6 - Copy array

// You really like your daily diet from last exercise. Copy it to a new array called dinnerTray so you can give it to a friend.  

var clone = diet.slice(0);

console.log(clone);

//--------------------------------------

 //array.slice(start, end)  // start and end are optional

//--------------------------------------
// Exercise 7 - For loop

var letters = ["a","b","c", "d", "e", "f", "g", "h"];

// log every second char in the array starting from b

for (var i = 1; i < letters.length; i+=2) {
    console.log(letters[i]);
}

//--------------------------------------
//Exercise 8 - For loop and if statement

var numbers  = [5, 3, 2, 7, 11, 12, 0, -20, 6];

var discardedNumbers = [];

// log the element if the number is above 6 or below 0
// else push them to the array discardedNumbers

for(var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 6 || numbers[i] < 0) {
        console.log(numbers[i]);
    } else {
        discardedNumbers.push(numbers[i]);
    }
}
console.log(discardedNumbers);

//--------------------------------------