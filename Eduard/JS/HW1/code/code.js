const arr1 = ["a","b","c",];
const arr2 = [1,2,3];
const arr3 = arr1.concat(arr2);
document.write(arr3);

document.write("<hr/>");

arr1.push(1,2,3,);
document.write(arr1)

document.write("<hr/>");

arr1.reverse();
document.write(arr1);

document.write("<hr/>");

const arr4 = [1,2,3];
arr4.push(4,5,6);
document.write(arr4);
document.write("<hr/>");

const arr5 = [1,2,3];
arr5.unshift(4,5,6);
document.write(arr5);

document.write("<hr/>");

const arr6 = ["js","css","jq"];
document.write(arr6[0]);
document.write("<hr/");

const arr10 = [1,2,3,4,5];
let temp = arr10.slice(0, 3);
document.write("<p>" + temp);
document.write("<hr/");

const arr11 = [1,2,3,4,5];
arr11.splice(1, 2);
document.write("<p>" + arr11);
document.write("<hr/");

const arr12 = [1,2,3,4,5];
arr12.splice(2, 1, "10", "3");
document.write("<p>" + arr12);
document.write("<hr/");

const arr13 = [3,4,1,2,7];
arr13.sort();
document.write("<p>" + arr13);
document.write("<hr/");


const arr14 = ["Привіт", "світ", "!"];
document.write("<p>" + arr14[0] + ", " + arr14[1] + arr14[2]);
document.write("<hr/");

arr14[0] = "Поки";
document.write("<p>" + arr14[0] + ", " + arr14[1] + arr14[2]);
document.write("<hr/>");

// 13 завдання
const arr15 = [1,2,3,4,5];
const arr16 = new Array(1,2,3,4,5);
document.write(arr15);
document.write("<hr/>");
document.write(arr16);
document.write("<hr/>");

// 14 завдання
let arr17 = [
    ['блакитний', 'червоний', 'зелений'],
    ['blue', 'red', 'green'],
];
document.write(arr17[0][0] + " " + arr17[1][0]);
document.write("<hr/>")

// 15 завдання
const arr18 = ["a","b","c","d"];
document.write(arr18[0]  + "+" + arr18[1] + ", " + arr18[2] + "+" + arr18[3]);
document.write("<hr/>");

// 16 завдання
// let result = prompt('Скільки створити масивів',);
let resultarr = new Array(prompt('Скільки створити масивів',));
console.log(resultarr);

