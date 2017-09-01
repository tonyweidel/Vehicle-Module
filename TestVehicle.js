const Vehicle = require('./Vehicle.js');

function main(){
    //make two vehicles and take them for a spin.
let mitchmobile = new Vehicle(6,13,13,23,120000);

console.log(mitchmobile.totalMiles());
mitchmobile.drive(3);
console.log(mitchmobile.totalMiles());
console.log(mitchmobile.fuelLeft());

let tonstertruck = new Vehicle(6,25,25,15,20000);

console.log(tonstertruck.totalMiles());
tonstertruck.drive(3);
console.log(tonstertruck.totalMiles());
console.log(tonstertruck.fuelLeft());

}
//run the main method
main();
