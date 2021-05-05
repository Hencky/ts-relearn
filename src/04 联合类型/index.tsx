// 联合类型和类型别名

/** 1. 可辨识 */
enum CarTransmission {
  Automatic = 200,
  Manual = 300,
}

interface Motorcycle {
  vType: 'motorcycle',
  make: number;
}


interface Car {
  vType: 'car',
  transmission: CarTransmission;
}

interface Truck {
  vType: 'truck';
  capacity: number;
}

/** 2. 联合类型 */
type Vehicle = Motorcycle | Car | Truck;

/** 3. 类型守卫 */
const PI = Math.PI;

function evaluatePrice(vehicle: Vehicle) {
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



// 类型别名
type Message = string | string[];