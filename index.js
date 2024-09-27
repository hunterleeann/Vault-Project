//Psuedocode:
// 1. Create variables for all combo parts 
//  1.A. set up math functions for all three parts 
// 2. Create string with message: ="You have received this message because you have been chosen to open an important vault. Here is the secret combination:"
// 3. display string with embedded combo variables 

let comboOne = 5 + 5; //determines first part of the combo
let comboTwo = 2*20; //determines second part of the combo
let comboThree = 40-1; //determines third part of the combo

const message = `You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${comboOne}-${comboTwo}-${comboThree}`
console.log(message); 
