var vehicleName = 'Toyota';

function printVehicleNameOuter() {
    console.log(this.vehicleName);
}

console.log(this);
printVehicleNameOuter();

var vehicle = {
    vehicleName: 'Nissan',
    printVehicleNameInner: function () {
        return function () {
            console.log(this.vehicleName);
        }
    }
};

var execute = vehicle.printVehicleNameInner();
execute.call(vehicle);