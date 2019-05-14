function Vehicle(type) {
    Vehicle.VehicleCount++;
    this.type = type;
}

Vehicle.VehicleCount = 0;

Vehicle.prototype.drive = function () {
    console.log('Vehicle is driving');
};

var vehicle = new Vehicle('Toyota');

function Car(type) {
    Vehicle.call(this, type);
}

Car.prototype = Object.create(Vehicle.prototype);

Car.prototype.constructor = Car;

Car.prototype.balanceWheels = function () {
    console.log('Wheels are balanced');
};

var car = new Car('Nissan');
car.drive();

car.balanceWheels();
console.log(car.type, Vehicle.VehicleCount);
