let firstSubjectWeight = prompt("Enter first test weight in kilograms: ");
let firstSubjectHeight = prompt("Enter first test Height in metres: ");
let secondSubjectWeight = prompt("Enter second test Weight in kilograms: ");
let secondSubjectHeight = prompt("Enter second test Height in metres: ");
let firstSubjectBMI = firstSubjectWeight / firstSubjectHeight ** 2;
let secondSubjectBMI = secondSubjectWeight / secondSubjectHeight ** 2;

if (firstSubjectHeight <= 1.42 && firstSubjectBMI > 22) {
    alert("The first subject is overweight!");
} else if (firstSubjectBMI < 19) {
    alert("The first subject is underweight!");
} else if (firstSubjectBMI < 29) {
    alert("The first subject is overweight!");
} else if (firstSubjectBMI < 39) {
    alert("first subject is Obese!");
} else if (firstSubjectBMI > 39) {
    alert("first subject is Extremely Obese!");
} else {
    alert("The first subject is healthy!");
}

if (secondSubjectHeight <= 1.42 && secondSubjectBMI > 22) {
    alert("The second subject is overweight!");
} else if (secondSubjectBMI < 19) {
    alert("The second subject is underweight!");
} else if (secondSubjectBMI < 29) {
    alert("The second subject is overweight!");
} else if (secondSubjectBMI < 39) {
    alert("second subject is Obese!");
} else if (secondSubjectBMI > 39) {
    alert("second subject is Extremely Obese!");
} else {
    alert("The second subject is healthy!");
}

document.getElementById("result1").innerHTML = `The first subject has a BMI of ${firstSubjectBMI}, this rounded is ${Math.round(firstSubjectBMI)}.`;
document.getElementById("result2").innerHTML = `The second subject has a BMI of ${secondSubjectBMI}, this rounded is ${Math.round(secondSubjectBMI)}.`;

console.log(firstSubjectBMI > secondSubjectBMI);