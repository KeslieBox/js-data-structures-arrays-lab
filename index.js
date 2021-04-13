// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver (driver) {
 console.log(drivers.push(driver));
}

function destructivelyPrependDriver (driver) {
    console.log(drivers.unshift(driver));
}

function destructivelyRemoveLastDriver (driver) {
console.log(drivers.pop());
}

function destructivelyRemoveFirstDriver (driver) {
    console.log(drivers.shift());
}

function appendDriver (driver) {
    return [...drivers, driver];
}

function prependDriver (driver) {
    return [driver, ...drivers];
}

function removeLastDriver () {
    return drivers.slice(0, drivers.length - 1);
}

function removeFirstDriver () {
    return drivers.slice(1);
}