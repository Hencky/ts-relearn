"use strict";
// 联合类型和类型别名
/** 1. 可辨识 */
var CarTransmission;
(function (CarTransmission) {
    CarTransmission[CarTransmission["Automatic"] = 200] = "Automatic";
    CarTransmission[CarTransmission["Manual"] = 300] = "Manual";
})(CarTransmission || (CarTransmission = {}));
/** 3. 类型守卫 */
const PI = Math.PI;
function evaluatePrice(vehicle) {
    // return vehicle.capacity * EVVALUATION_FACTOR;
    switch (vehicle.vType) {
        case 'car':
            return vehicle.transmission * PI;
        case 'truck':
            return vehicle.capacity * PI;
        case 'motorcycle':
            return vehicle.make * PI;
    }
}
