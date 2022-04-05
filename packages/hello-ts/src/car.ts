// Objects

import { Car, phonesType } from './types';

const one = {
  make: 'Toyota',
  model: 'Corolla',
  year: 2002,
};

const two = {
  ...one,
  chargeVoltage: 12,
  color: 'Red',
};

/**
 * Print information about a given car
 * @param car - the car to print
 */
function printCar(car: Car) {
  let str = `${car.make} ${car.model} ${car.year}`;

  if (typeof car.chargeVoltage !== 'undefined') {
    str += `// ${car.chargeVoltage}v`;
  }

  console.log(str);
}

printCar(one);
printCar({
  ...one,
  chargeVoltage: 12,
  color: 'Red',
});

// Index Signatures

const phones: phonesType = {};

// Array Types
const cars: Car[] = [];

const carss = [{ ...one }, { ...two }];

console.log(carss);

// Tuples
let myCar: [number, string, string] = [
  2002,
  'Toyota',
  'Corolla',
];

const [year, make, model] = myCar;

myCar = [2002, 'Toyota', 'Corolla'];
