var vehicleName = 'Toyota';

function printVehicleNameOuter() {
    console.log(this.vehicleName);
}

console.log(this);
printVehicleNameOuter();

var vehicle = {
    vehicleName: 'Nissan',
    printVehicleNameInner: printVehicleNameOuter
};

vehicle.printVehicleNameInner();