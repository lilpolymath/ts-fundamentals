import { SpecialDate, UserInfo } from './types';

const newYearsEve: SpecialDate = {
  ...new Date(),
  getReason: () => 'Last day of the year',
};

console.log(newYearsEve.getReason());

function printUserInfo(user: UserInfo) {}

interface Animal {
  isAlive(): boolean;
}

interface Mammal extends Animal {
  getFurOrHairColor(): string;
}

interface Dog extends Mammal {
  getBreed(): string;
}

function careForDog(dog: Dog) {
  dog.getBreed();
}
