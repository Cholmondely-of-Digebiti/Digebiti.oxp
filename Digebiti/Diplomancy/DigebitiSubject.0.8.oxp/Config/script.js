"use strict";\
this.name = "DigebitiSubject";
this.author = "phkb";\
this.copyright  = "2021 phkb";\
this.description = "Makes sure player has subjecthood in Digebiti.";
this.version = "1.0";
this.licence = "CC BY-NC-SA 4.0";\

this.startUpComplete = function() \{\
    if (worldScripts.DayDiplomacy_060_Citizenships) \{\
        let c = worldScripts.DayDiplomacy_060_Citizenships;\
        if (!c.$hasPlayerCitizenship(0, 96)) \{\
            let s = System.infoForSystem(0, 96); // gal + id of Digebiti\
            let price = c.$getCitizenshipPrice(s);\
            // make sure we have enough credits to buy the citizenship\
            player.credits += price;\
            c._buyCitizenship(0, 96);\
            player.consoleMessage("You have been awarded subjecthood in " + System.systemNameForID(96), 5);\
        \}\
    \}\
\}}