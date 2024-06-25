// Assalamualaikum @everyone 👋
// 🚀 Day 38 Challenge: Start Coding! 🚀
// Question 112: Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
const countries = new Map();
countries.set("Pakistan", "Islamabaad");
countries.set("Japan", "Tokyo");
countries.set("Afghanistan", "Kabul");
console.log(countries);
console.log(`\n`);
// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
function checkTheCanadaInMap(countries) {
    if (countries.has("Canada")) {
        console.log(`The capital of Canada is ${countries.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the map");
    }
}
checkTheCanadaInMap(countries);
console.log(`\n`);
// Question 114: Iterate over a Map of student IDs and names, and log each pair to the console.
const students = new Map();
students.set(1, "Ali");
students.set(2, "Zain");
students.set(3, "Faiz");
students.forEach((name, id) => {
    console.log(`Student ID : ${id}, Name: ${name}`);
});
export {};
