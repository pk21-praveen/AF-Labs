var vehicleName = "car";

function printVehicleName(){
    console.log(this.vehicleName);
}

var Vehicle = {
    vehicleName : "van",
    getVehicleName : printVehicleName
}

Vehicle.getVehicleName();
printVehicleName();
