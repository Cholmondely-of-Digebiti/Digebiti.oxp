"use strict";
this.name	= "Digebiti.oxp";
this.author	= "Cholmondeley";
this.copyright	= "2022 Cholmondeley (but it's really all Phkb's!)";
this.description= "Digebiti.oxp";
this.licence	= "CC BY-NC-SA 4.0";

this.startUpComplete = function() {
    worldScripts.Lib_PAD._addPageInCategory("SYSTEMS.Digebiti G1", {name:"Digebiti G1", info:["Home planet","Located just to the south of GalCenter G1"]})
    worldScripts.Lib_PAD._addPageInCategory("PERSONS.Prince-Elector Rupert XIX", {name: "Prince-Elector Rupert XIX", origin:"Digebiti G1",species:"Human colonial",gender:"Male",age:41,ship:"None",rank:"Prince",t0:0,t1:"lib_user.png",t2:0})
}




