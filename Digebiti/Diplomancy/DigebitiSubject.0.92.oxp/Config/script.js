"use strict";
this.name = "DigebitiSubject";
this.author = "phkb";
this.copyright  = "2021 phkb";
this.description = "Makes sure player has subjecthood in Digebiti.";
this.version = "0.9";
this.licence = "CC BY-NC-SA 4.0";

this.startUp = function() {
    if (worldScripts.DayDiplomacy_000_Engine) {
        worldScripts.DayDiplomacy_000_Engine.$subscribe(this.name);
    }
    delete this.startUp;
}

this._startUp = function() {
    let c = worldScripts.DayDiplomacy_060_Citizenships;
    if (!c.$hasPlayerCitizenship(0, 96)) {
        let s = System.infoForSystem(0, 96); // gal + id of Digebiti
        let price = c.$getCitizenshipPrice(s);
        // make sure we have enough credits to buy the subjecthood
        player.credits += price;
        c._buyCitizenship(0, 96);
        player.consoleMessage("You have been awarded subjecthood in " + System.systemNameForID(96), 5);
        player.credits = 100; //this does not work properly with the "Easy Start" at Zaonce
    }
}

// I want to add in compatibility with Lib_PAD:
//  i) Digebiti under "Origin" on the PAD "Persons" page 
// ii) a page for Digebiti on the PAD "Systems" page