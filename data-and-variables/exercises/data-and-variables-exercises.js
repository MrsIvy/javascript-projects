// Declare and assign the variables below
let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;

let milesToMars = 13972500

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);

// Calculate a space mission below
let hoursToMars = milesToMars / shuttleSpeedMph;
console.log(milesToMars / shuttleSpeedMph);
let daysToMars = hoursToMars / 24;
console.log(shuttleName + " will take" + "days to reach Mars.");
// Print the results of the space mission calculations below

// Calculate a trip to the moon below
let milesToMoon = 23846.4;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;
console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon.");
// Print the results of the trip to the moon below