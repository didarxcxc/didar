// 1
// let userAge = prompt("Enter your age:");
// let age = parseInt(userAge);
// if (age >= 18) {
//   console.log("You are old enough to drive.");
// } else {
//   let yearsLeft = 18 - age;
//   console.log(`You are left with ${yearsLeft} years to drive.`);
// }
// 2
// let yourAge = prompt("Enter your age:");
// let userAge = parseInt(yourAge);
// let myAge = 25;
// if (userAge > myAge) {
//   let ageDifference = userAge - myAge;
//   console.log(`You are ${ageDifference} years older than me.`);
// } else if (userAge < myAge) {
//   let ageDifference = myAge - userAge;
//   console.log(`I am ${ageDifference} years older than you.`);
// } else {
//   console.log("We are the same age!");
// }
// 3
// let a = 4;
// let b = 3;
// if (a > b) {
//   console.log('a is greater than b');
// } else {
//   console.log('a is less than b');
// }
// let a = 6;
// let b = 88;
// let result = (a > b) ? 'a is greater than b' : 'a is less than b';
// console.log(result);
// 4
// let number = prompt("Enter a number:");
// number = parseInt(number);
// if (number % 2 === 0) {
//   console.log(`${number} is an even number.`);
// } else {
//   console.log(`${number} is an odd number.`);
// }
// 5
// let score = prompt("Enter the student's score:");
// score = parseInt(score);
// if (score >= 80 && score <= 100) {
//   console.log('Grade: A');
// } else if (score >= 70 && score < 80) {
//   console.log('Grade: B');
// } else if (score >= 60 && score < 70) {
//   console.log('Grade: C');
// } else if (score >= 50 && score < 60) {
//   console.log('Grade: D');
// } else if (score >= 0 && score < 50) {
//   console.log('Grade: F');
// } else {
//   console.log('Invalid score. Please enter a score between 0 and 100.');
// }
// 6
// let month = prompt("Enter the month:");
// month = month.toLowerCase();
// if (month === 'september' || month === 'october' || month === 'november') {
//   console.log('The season is Autumn.');
// } else if (month === 'december' || month === 'january' || month === 'february') {
//   console.log('The season is Winter.');
// } else if (month === 'march' || month === 'april' || month === 'may') {
//   console.log('The season is Spring.');
// } else if (month === 'june' || month === 'july' || month === 'august') {
//   console.log('The season is Summer.');
// } else {
//   console.log('Invalid input. Please enter a valid month.');
// }
// 7
// let day = prompt("What is the day today?");
// day = day.toLowerCase();
// if (day === 'saturday' || day === 'sunday') {
//   console.log(`${day} is a weekend.`);
// } else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
//   console.log(`${day} is a working day.`);
// } else {
//   console.log('Invalid input. Please enter a valid day.');
// }
// 8
// let month = prompt("Enter a month:");
// month = month.toLowerCase();
// let daysInMonth;

// switch (month) {
//   case 'january':
//   case 'march':
//   case 'may':
//   case 'july':
//   case 'august':
//   case 'october':
//   case 'december':
//     daysInMonth = 31;
//     break;

//   case 'april':
//   case 'june':
//   case 'september':
//   case 'november':
//     daysInMonth = 30;
//     break;

//   case 'february':
//     daysInMonth = 28;
//     break;

//   default:
//     console.log('Invalid input. Please enter a valid month.');
//     break;
// }

// if (daysInMonth !== undefined) {
//   console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has ${daysInMonth} days.`);
// }
// 9
// let month = prompt("Enter a month:");
// let year = prompt("Enter the year:");
// month = month.toLowerCase();
// year = parseInt(year);
// let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// let daysInMonth;
// switch (month) {
//   case 'january':
//   case 'march':
//   case 'may':
//   case 'july':
//   case 'august':
//   case 'october':
//   case 'december':
//     daysInMonth = 31;
//     break;
//   case 'april':
//   case 'june':
//   case 'september':
//   case 'november':
//     daysInMonth = 30;
//     break;

//   case 'february':
//     daysInMonth = isLeapYear ? 29 : 28;
//     break;

//   default:
//     console.log('Invalid input. Please enter a valid month.');
//     break;
// }

// if (daysInMonth !== undefined) {
//   console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} in ${year} has ${daysInMonth} days.`);
// }
