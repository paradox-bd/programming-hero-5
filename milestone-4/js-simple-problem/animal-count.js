'use strict';

function animalCount(miles) {
  const animalDensityFirst10Miles = 10;
  const animalDensitySecond50Miles = 50;
  const animalDensityRestMiles = 100;
  if (miles <= 10) {
    const count = miles * animalDensityFirst10Miles;
    return count;
  } else if (miles <= 20) {
    const first10 = 10 * animalDensityFirst10Miles;
    const restMiles = miles - 10;
    const secondDenseAnimals = restMiles * animalDensitySecond50Miles;
    const totalAnimals = first10 + secondDenseAnimals;
    return totalAnimals;
  } else {
    const first10 = 10 * animalDensityFirst10Miles;
    const secondDenseAnimals = 10 * animalDensitySecond50Miles;
    const restMiles = miles - 20;
    const RestDenseAnimals = restMiles * animalDensityRestMiles;
    const totalAnimals = first10 + secondDenseAnimals + RestDenseAnimals;
    return totalAnimals;
  }
}
const animal = animalCount(29);
console.log(animal);
