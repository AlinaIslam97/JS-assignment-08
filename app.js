// Question 01

function displayDateTime() {
  var today = new Date();
  document.write(today);
}
displayDateTime();

document.write("<br>" + "<br>");

// Question 02

function greetUser() {
  var firstName = "Rubab";
  var lastName = "Arain";
  var fullName = firstName + " " + lastName;
  var greetingMessage = "Hello " + fullName + "!";
  document.write(greetingMessage);
}
greetUser();

// Question 03

document.write("<br>" + "<br>");

function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

function displaySum() {
  var num1 = parseFloat(prompt("Enter number 1"));
  var num2 = parseFloat(prompt("Enter number 2"));
  var sum = addTwoNumbers(num1, num2);
  document.write("The sum is " + sum);
}
displaySum();

// Question 04

function calculater() {
  var numb1 = +prompt("Enter the num 1");
  var operator = prompt("Enetr the operator i.e +, -, *, /");
  var numb2 = +prompt("Enter the num 2");

  if (operator === "+") {
    return numb1 + numb2
  } else if (operator === "-") {
    return numb1 - numb2
  } else if (operator === "*") {
    return numb1 * numb2
  } else if (operator === "/") {
    if (numb2 === 0) {
      return "Error: Division by Zero "
    } else {
      return numb1 / numb2
    }
  } else {
    return "Inavlid operator"
  }
}

alert(calculater());

// Question 05

document.write("<br>" + "<br>");

function square(num) {
  return num * num;
}

function displaySquare() {
  var num = parseFloat(prompt("Enetr Square Number:"));
  var result = square(num);
  document.write("The Square of " + num + " is: " + result);
}

displaySquare();

// Question 06

function factorial() {
  var num = +prompt("Enter a factorial number:")

  if (num < 0) {
    alert("Error: Factorial is not defined for negative numbers")
  } else {
    var result = 1;
    for (var i = 1; i <= num; i++) {
      result *= i;
    }
    alert("The factorial of " + num + " is " + result);
  }
}

factorial();

// Question 07

document.write("<br>" + "<br>");

function displayCounting() {
  var start = parseInt(prompt("Enter start number"));
  var end = parseInt(prompt("Enter end number"));
  var result = "";

  if (isNaN(start) || isNaN(end)) {
    result = "Please enter valid number";
  } else if (start > end) {
    result = "Start number should be less than or equal to end number.";
  } else {
    for (var i = start; i <= end; i++) {
      result += i + " ";
    }
  }
  document.write(result)
}

displayCounting();

// Question 08

function calculateHypotenuse() {
  function calculateSquare(x) {
    return x * x
  }

  var base = +prompt("Enter the base of a right angle triangle:")
  var perpendicular = +prompt("Enter the perpendicular of a right angle triangle:")

  var hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular))

  alert("The hypoteneus of right angle triangle with base " + base + " and perpendicular " + perpendicular + " is " + hypotenuse)
}

calculateHypotenuse();

// Question 09

document.write("<br>" + "<br>");

function calculateArea(width, height) {
  return width * height;
}

function CalculateAreaAsValue() {
  var width = parseFloat(prompt("Enter Width value:"));
  var height = parseFloat(prompt("Enter height value:"));

  if (isNaN(width) || isNaN(height)) {
    return "please enter valid numbers"
  }

  var area = calculateArea(width, height);
  document.write("Area (using values): " + area);
}

CalculateAreaAsValue();

document.write("<br>" + "<br>");

function calculateAreaAsVariables() {
  var width = parseFloat(prompt("Enter Width value:"));
  var height = parseFloat(prompt("Enter height value:"));

  if (isNaN(width) || isNaN(height)) {
    return "please enter valid numbers"
  }

  var area = calculateArea(width, height);

  document.write("Area (using variables): " + area);
}

calculateAreaAsVariables();

// Question 10

function checkPalindrome() {
  var inputString = prompt("Enter the palindrome String")

  var cleanedString = inputString.replace(/[^A-Za-z0-9]/g, " ").toLowerCase();

  var revesrsedString = cleanedString.split("").reverse().join("");

  if (cleanedString === revesrsedString) {
    alert(inputString + " is a palindorme");
  } else {
    alert(inputString + " is not a palindorme");
  }
}

checkPalindrome();

// Question 11

document.write("<br>" + "<br>");

function capitalizeWords() {
  var userString = prompt("write an any sentence");
  var words = userString.split(" ");

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  var capitalizedStrings = words.join(" ");
  document.write(capitalizedStrings);
}

capitalizeWords();

// Question 12

document.write("<br>" + "<br>");

function logestWords() {
  var stringUser = prompt("write an any longest words sentence");
  var word = stringUser.split(' ');
  var longestWord = "";

  for (var i = 0; i < word.length; i++) {
    if (word[i].length > longestWord.length) {
      longestWord = word[i];
    }
  }

  document.write("Longest word: " + longestWord);
}

logestWords();

// Question 13

document.write("<br>" + "<br>");

function countLetter() {
  var usersString = prompt("write any line sentence:");
  var inputLetter = prompt("Enter letter that you want too count in your Sentence");
  var countnum = 0;

  for (var i = 0; i < usersString.length; i++) {
    if (usersString[i] === inputLetter) {
      countnum++;
    }
  }

  document.write('Number of occurrences of "' + inputLetter + '": ' + countnum);
}

countLetter();

// Question 14

