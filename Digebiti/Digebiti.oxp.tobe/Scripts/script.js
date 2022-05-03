"use strict";
this.name	= "Digebiti.oxp";
this.author	= "Cholmondeley";
this.copyright	= "2022 Cholmondeley (but it's really all Phkb's!)";
this.description= "Digebiti.oxp";
this.licence	= "CC BY-NC-SA 4.0";

this.startUpComplete = function() {
    worldScripts.Lib_PAD._addPageInCategory("SYSTEMS.Digebiti G1", {name:"Digebiti G1", info:[
	    "The sculpture and duelling pistols are famed exports",
	    "Home to English aristocrats, Hats are de rigeur",
	    "The feudal paradise of Digebiti is just south of GalCenter G1",
	    "My home planet"]})
    worldScripts.Lib_PAD._addPageInCategory("PERSONS.Prince-Elector Rupert XIX", {name: "Prince-Elector Rupert XIX", origin:"Digebiti G1",species:"Human colonial",gender:"Male",age:31,ship:"Royal Barque: HSHS Falkland",rank:"Prince-Elector",info:[
	    "He is worried about the communist agents of Inonri & Vetitice",
	    "This led to Rupert's eschewal of Tennis for Extreme Dominoes",
	    "He succeeded after his brother Desmond died playing Real Tennis",
	    "The Supreme Ruler of Digebiti (in Lesser Walsingham)"],
	    t0:"lib_pad_rank9.png",t1:"lib_ovc02.png",t2:"lib_pad_medal14.png"})
}












