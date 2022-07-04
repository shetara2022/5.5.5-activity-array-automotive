//this includes the vehicle class as a module
const { Vehicle } = require("./vehicle");
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage)
    super(make, model, year, color, mileage)
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
    this.mileage = 0
}

// increaseVolume() {
//     if (this.volume < this.max) {
//       this.volume += 1;
//     } else {
//       console.log("volume is set to max");
//     }
//   }

loadPassenger(num){
    if(this.passenger < this.maximumPassengers) {
      console.log("Available Room");
    }
    else {
        console.log("No room available");
    }
    }

    start(){
        if (this.fuel > 0) {
            console.log("Engine has started");
        }
        else {
            console.log("Car is out of fuel");
        }
    }

    scheduleService(mileage) {
        if (this.mileage > 30000) {
            console.log("Time for Service")
            this.scheduleService == true;
            return this.scheduleService;
        }
    }
