


class Car extends Vehicle {
    constructor() {
        super()
        this.maximumPassengers = 5
        this.passenger = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 160
        this.fuel = 10
        this.scheduleService = false
    }
    
    loadPassenger(num) {
        if(this.passenger < maximumPassengers)
    
    }
    
    
    start() {
        if (this.fuel > 0) {
            return this.started = true
        } else {
            return this.started = false
        }
    }
    
    scheduleService(mileage) {
        if (this.mileage > 3000) {
            this.scheduleService = true
            return this.scheduleService
    } 
    }

}




// export class Employee {
//     constructor(name, salary) {
//       this.name = name;
//       this.salary = salary;
//     }
  
//     increaseSalary() {
//       this.salary += 100;
//     }
//   }
//   import {Employee} from './another-file.js';
  