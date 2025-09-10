#!/usr/bin/node

const argument1 = process.argv[2];
const argument2 = process.argv[3];
const argument3 = process.argv[4];

if (argument1 === undefined) {
  console.log("No argument");
} else {
  console.log(argument1);
}

