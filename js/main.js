// Task1
function halloween(dt) {
  return dt.getDate() == "31" && dt.getMonth() == "9"
    ? "Bonfire toffee"
    : "toffee";
}

// Task2
function centuryFromYear(year) {
  return Math.ceil(year / 100);
}


// Task3
function monthName(num) {
  let arr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return arr[num - 1];
}



// Task4
function afterNMonths(year, months) {
  return months == undefined
    ? "month missing"
    : year == undefined
    ? "year missing"
    : year + Math.floor(months / 12);
}


// Task5
function isLeap(year) {
  return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);
}


// Task6
function formatDate(date) {
  return date.split("/").reverse().join("");
}


// Task7
function timeForMilkAndCookies(date) {
  return date.getDate().toString() + date.getMonth() == 2411;
}


// Task8
function longestTime(h, m, s) {
  let max = m;
  if (h * 60 * 60 > max && h * 60 > s / 60) max = h;
  else if (s / 60 > max && h * 60 < s / 60) max = s;

  return max;
}


// Task9
function getDay(day) {
  let arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const birthday = new Date(day);
  return arr[birthday.getDay()];
}


// Task10
function Magic(str) {
  let arr = str.split(" ");
  return arr[arr.length - 1].endsWith(arr[0] * arr[1]);
}


// Task11
function birthdayCakeCandles(candles) {
  return candles.filter((a) => a == Math.max(...candles)).length;
}


// Task12
function sumMinimums(arr) {
  return arr.reduce((a, b) => a + Math.min(...b), 0);
}


// Task13
function cleanUpArray(arr) {
  arr = arr.map((a) => +a);
  let arr2 = [arr.filter((a) => a % 2 == 0), arr.filter((a) => a % 2 != 0)];
  return arr2;
}


// Task14
function findFactors(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) arr.push(i);
  }
  return arr;
}


// Task15
function ageDifference(ages) {
  ages.sort((a, b) => b - a);
  let b = ages[0] - ages[1];
  return b < 1
    ? "No age difference between spouses."
    : b > 2
    ? `${b} years`
    : `${b} year`;
}


// Task16
function sortDescending(num) {
  return Number(
    num
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}


// Task17
function leftDigit(num) {
  return +num.match(/[0-9]/i);
}


// Task18
function highLow(str) {
  let arr = str.split(" ");
  return Math.max(...arr)
    .toString()
    .concat(" ", Math.min(...arr));
}


// Task19
function compact(arr) {
  return arr.filter((a) => a);
}


// Task20
function sortIt(arr) {
  return arr.sort((a, b) => a - b);
}
