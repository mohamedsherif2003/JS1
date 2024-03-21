// 1-question
var num = +prompt("enter your num")
if (num > 0) {
    console.log("positive")
}
else {
    console.log("negative")
}
// // 2-question
var num_1 = +prompt("enter your num_1");
var num_2 = +prompt("enter your num_2");
if (num_1 % num_2 == 0) {
    console.log("even");
}
else {
    console.log("odd");
}

// // 3-question
var num_1 = +prompt("enter your num_1");
var num_2 = +prompt("enter your num_2");
if (num_1 > num_2) {
    console.log(num_1);
}
else {
    console.log(num_2);
}

// // 4-question
var n_grade = +prompt("enter your n_grade");

if (n_grade >= 95) {
    console.log("A+");
}
else if (n_grade < 95 && n_grade >= 90) {
    console.log("A");
}
else if (n_grade < 90 && n_grade >= 85) {
    console.log("B+");
}
else if (n_grade < 85 && n_grade >= 75) {
    console.log("B");
}
else if (n_grade < 75 && n_grade >= 70) {
    console.log("C+");
}
else if (n_grade < 70 && n_grade >= 65) {
    console.log("C");
}
else if (n_grade < 65 && n_grade >= 60) {
    console.log("D+");
}
else if (n_grade < 60 && n_grade >= 50) {
    console.log("D");
}
else {
    console.log("F");
}
// 5-question
var age = +prompt("enter your age");
if (age < 12) {
    console.log("price is 5")
}
else if (age < 18 && age > 12) {
    console.log("price is 10")
}
else if (age < 60 && age > 18) {
    console.log("price is 10")
}
else if (age > 60) {
    console.log("price is 15")
}