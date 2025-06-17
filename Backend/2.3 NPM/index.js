// let generateName = require('sillyname');

import generateName from "sillyname";
import {randomSuperhero} from "superheroes";

let sillyName = generateName();

let heroName = randomSuperhero();

console.log(`My name is ${sillyName} and I'm ${heroName}!`);