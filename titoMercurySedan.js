const VehicleModule = require('./vehicle.js').Vehicle

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage)
        this.maximumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }
    
loadPassenger(num) {
    if(this.passenger < this.maximumPassengers) {
        if ((num + this.passenger) <= this.maximumPassengers) {
            this.passenger = num;
            return this.passenger;               
        } else {
            console.log(this.model + " " + this.make + " no space");

        }
    } else {
        console.log(this.model + " " + this.make + "full");
    }
}
start() {
    if (this.fuel > 0) {
        return this.started = true;
    } else {
        return this.started = false;
    }
}

Service() {
    if (this.mileage > 3000) {
        this.scheduleService = true
        return this.scheduleService;      
}     else {
    this.scheduleService = false
    return this.scheduleService;
}
}    

}

let myCar = new Car ('Mercury', 'Sedan', '1999', 'Blue', '15000')

myCar.loadPassenger(5)
myCar.start()
myCar.Service()

console.log(myCar)


