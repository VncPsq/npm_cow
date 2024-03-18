const userInformations = require('../information'); 
const cowsay = require("cowsay")

console.log(cowsay.say({
    text : `Hello je suis ${userInformations.nom} du campus ${userInformations.campus} et du crew ${userInformations.crew}`,
    e : "oO",
    T : "U "
}));
