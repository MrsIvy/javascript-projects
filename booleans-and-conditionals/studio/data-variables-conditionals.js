// Initialize Variables below
const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
const astronautCount = 7;
const astronautStatus = "ready";
const averageAstronautMassKg = 80.7;
const crewMassKg = 564.9;
const fuelMassKg = 760000;
const shuttleMassKg = 74842.31;
const totalMassKg = 835407.21;
const maximumMassLimit = 850000;
const fuelTempCelsius = -225;
const minimumFuelTemp = -300;
const maximumFuelTemp = -150;
const fuelLevel = "100%";
const weatherStatus = "clear";
const preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    console.log("not ready");
}
else {
    console.log("ready");
}
// add logic below to verify all astronauts are ready
if (astronautStatus === "ready") {
    console.log("Astronauts good")
}
else {
    console.log("Astronauts not good");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit){
    console.log("Mass is good");
}
else {
    console.log("No good");
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius <= -300 && fuelTempCelsiu >= -150){
    console.log("Fuel temp is good");
}
else {
    console.log("Fuel temp is no good");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel === "100%") {
    console.log("Fuel level is good");
}
else {
    console.log("Fuel Level is not good.")
}
// add logic below to verify the weather status is clear
if (weatherStatus === "clear") {
    console.log("Blue skies ahead");
}
else {
    console.log("Stormy weather");
}
// Verify shuttle launch can proceed based on above conditions
console.log(date, 
    time, 
    astronautCount, 
    crewMassKg, 
    fuelMassKg, 
    shuttleMassKg, 
    totalMassKg, 
    fuelTempCelsius, 
    weatherStatus, 
    "Have a safe flight, astronauts!");