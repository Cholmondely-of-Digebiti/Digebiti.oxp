"use strict";\
this.name = "RexebeCitizen";\
this.author = "phkb";\
this.copyright  = "2021 phkb";\
this.description = "Makes sure player has citizenship in Rexebe.";\
this.licence = "CC BY-NC-SA 4.0";\
this.startUpComplete = function() \{\
    if (worldScripts.DayDiplomacy_060_Citizenships) \{\
        let c = worldScripts.DayDiplomacy_060_Citizenships;\
        if (!c.$hasPlayerCitizenship(0, 232)) \{\
            let s = System.infoForSystem(0, 232); // gal + id of Rexebe\
            let price = c.$getCitizenshipPrice(s);\
            // make sure we have enough credits to buy the citizenship\
            player.credits += price;\
            c._buyCitizenship(galaxyNumber, sys);\
            player.consoleMessage("You have been awarded citizenship in " + System.systemNameForID(232), 5);\
        \}\
    \}\
\}}