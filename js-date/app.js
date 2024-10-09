const mydate = new Date();

// console.log(date);

// 1. 04/20/2024 13:45:30
// 2. Thu 20/4/2024 13.45
// 3. 2024-04-20 3:45 Thursday
// 4. April 20th, 2024 01.45.30 PM
// 5. 20 April 2024 at 01:45 PM

// Date 1

let date = new Date();

// Get day, month, year, hour, minute, second with leading zeros
let day = String(date.getDate()).padStart(2, '0');
let month = String(date.getMonth() + 1).padStart(2, '0'); // Add 1 since months are 0-indexed
let year = date.getFullYear();
let hours = String(date.getHours()).padStart(2, '0');
let minutes = String(date.getMinutes()).padStart(2, '0');
let seconds = String(date.getSeconds()).padStart(2, '0');

console.log(`Date:1  ${month}/${day}/${year} ${hours}:${minutes}:${seconds}`);

// Date 2

let date2 = new Date();

let day2 = date.getDate();
let month2 = date.getMonth() + 1;
let year2 = date.getFullYear();
let hour2 = date.getHours();
let minute2 = date.getMinutes();
let dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });

let formattedDate = `${dayOfWeek} ${day2}/${month2}/${year2} ${hour2}:${minute2.toString().padStart(2, '0')}`;

console.log("Date:2 " , formattedDate);

// Date 3

let date3 = new Date(); // April 20, 2024, 13:45:30

let day3 = String(date3.getDate()).padStart(2, '0');
let month3 = String(date3.getMonth() + 1).padStart(2, '0');
let year3 = date3.getFullYear();
let hours3 = String(date3.getHours()).padStart(2, '0');
let minutes3 = String(date3.getMinutes()).padStart(2, '0');
let seconds3 = String(date3.getSeconds()).padStart(2, '0');
let dayOfWeek3 = date3.toLocaleString('en-US', { weekday: 'long' });

console.log(`Date:3  ${month}-${day}-${year} ${hours}:${minutes} ${dayOfWeek3}`);

// Date 4

let date4 = new Date();

let formatted_Date = date4.toLocaleDateString('en-US', {
  month: 'long',
  day: '2-digit',
  year: 'numeric'
}) + ', ' + date4.toLocaleTimeString('en-US', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
});

console.log("Date:4 " , formatted_Date);

// Date 5
let date5 = new Date();

let day5 = date5.getDate();
let month5 = date5.toLocaleString('en-US', { month: 'long' });
let year5 = date5.getFullYear();
let hour = date5.getHours();
let minute = date5.getMinutes();

// Convert hour to 12-hour format and determine AM/PM
let ampm = hour >= 12 ? 'PM' : 'AM';
hour = hour % 12 || 12;

// Pad minute with leading zero if necessary
minute = minute < 10 ? '0' + minute : minute;

// Format the date
let formattedDate5 = `${day5} ${month5} ${year5} at ${hour}:${minute} ${ampm}`;

console.log("Date:5 ", formattedDate5);

