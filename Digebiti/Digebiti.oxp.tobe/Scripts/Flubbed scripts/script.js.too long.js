"use strict";
this.name	= "Digebiti.oxp";
this.author	= "Cholmondeley";
this.copyright	= "2022 Cholmondeley (but it's really all Phkb's!)";
this.description= "Digebiti.oxp";
this.licence	= "CC BY-NC-SA 4.0";

//each line of text in the P.A.D. page (max 64 characters) needs to be specified individually

this.startUpComplete = function() {
    worldScripts.Lib_PAD._addPageInCategory("SYSTEMS.Digebiti G1", {name:"Digebiti G1", info:["Home planet","The feudal paradise of Digebiti is just south of GalCenter G1","The killer mountain Seoids rule the mountains","Prince Rupert reigns over the system from the Cocktail Throne in the capital, Lesser Walsingham","Home to English aristocrats, Digebiti is renowned for its tea dances, real tennis and extreme dominoes","The sculpture and duelling pistols are famed exports","Hats are de rigeur","There are worries about Inonrian agents working to undermine the political system here in Digebiti, fomenting instability and disloyalty."]})
    worldScripts.Lib_PAD._addPageInCategory("PERSONS.Prince-Elector Rupert XIX", {name: "Prince-Elector Rupert XIX", origin:"Digebiti G1",species:"Human colonial",gender:"Male",age:41,ship:"None",rank:"Prince",info:"The Supreme Ruler of Digebiti","Rupert of the House of Lancaster, reigns from the Cocktail Throne in the capital, Lesser Walsingham"," He took the throne after the death of his older brother, Desmond, during a game of Real Tennis"," This unhappy event led to Rupert's eschewal of Tennis for Extreme Dominoes","He is understood to be much concerned with the constant diplomatic friction between Digebiti and Inonri (and their compatriots in Vetitice) to the north",t0:0,t1:"lib_user.png",t2:0})
}




