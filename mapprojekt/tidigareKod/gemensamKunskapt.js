

/*//Steg: 2.*/
/*
Funktion från tidigare arbete
Skapa led
*/

function laddaEtapper() {

    for (let i = 11; i < 22; i++) {
        /*//Steg: 3.*/
        //URL skall väll då hämtas från databasen?
        var whichStops = { url: "etapper/Etapp_" + i + "_wgs84.json", sync: "false", handleAs: "json", content: {}, load: laddaDatan };
        dojo.xhrGet(whichStops);
    }

    laddaSlinga();
    /*
        for (let y = 11; y < 13; y++) {
    
            var whichStops = { url: "Etapp_Slinga_" + y + "_1_wgs84.json", handleAs: "json", content: {}, load: laddaDatan };
            dojo.xhrGet(whichStops);
        }
    */
}
/*
Funktion från tidigare arbete
*/
function laddaSlinga() {

    for (let y = 11; y < 13; y++) {

        var slingor = { url: "slingor/Etapp_Slinga_" + y + "_1_wgs84.json", handleAs: "json", content: {}, load: laddaDatan };
        dojo.xhrGet(slingor);
    }

}
/*//Steg: 4.*/

function laddaDatan(data) {
    dojo.forEach(data.posts, function (zeData) {
        enLed.push([zeData.longitude, zeData.latitude]);
    });
    /*//Steg: x>4.*/
    /*//Steg: 10+3z+4x+3y. BACK TO*XCVZ*/
    skapaGrafikLager();
    enLed = [];
    //BACKTOEEEE##*/
};

function laddaPoi() {

    var laddarinInastaFunmtion = { url: "with_elevation_POI.json", handleAs: "json", content: {}, load: laddaPOIforElevation };
    dojo.xhrGet(laddarinInastaFunmtion);
}



/*
Funktion som....
Samma SOM Z[\]^_`
Contribute Pierre
walking-poi/Biking_walking_noelevation_POI
*/




/*/Steg 14\*/

function showPoi(poiData) {
// Kan det funka om denna blir global?
    var stopLager = new esri.layers.GraphicsLayer();
    map.addLayer(stopLager);
    /*/Steg 15 och ökade kartans grafik lager med 1*/
    // De olika skyltarna
    var stopskylt = new esri.symbol.PictureMarkerSymbol("bilder-to-use/matplatsikon.jpg", 30, 30);
    var bomb = new esri.symbol.PictureMarkerSymbol("bilder-to-use/Rastplatsikon.jpg", 30, 30);
    var kram = new esri.symbol.PictureMarkerSymbol("bilder-to-use/infosymbol.jpg", 30, 30);
    // De olika skyltarna
    /*/Steg 18*/

    /*
    En for loop som är känslig för hur saker och ting är skrivna
    */
    dojo.forEach(poiData.intresse, function (station) {
        var punkten = new esri.geometry.Point(station.x, station.y);
        /*/Steg 19*/
        /*'
        En if sats som hanterar följande Kollar vilken typ av plats som skall hanteras:
        Skapar två nya variabler. ena är en grafik variable den ändra en infotemplete som är en färdig HTML form
        Med hjälp av dokumentets utformning can vi sätta titlenamnet och innehållet
        Sedan använder vi det inbyggda namnet att lägga till denna 'formen' till grafik objeket.
        vi skapar en sträng variabel hänvisat till en specifik plats
        och vi lägger till dessa.
        */
        if (station.name == "Mat") {
            var nygrafik = new esri.Graphic(punkten, stopskylt);
            var teBox = new esri.InfoTemplate();
            teBox.setTitle(station.name);
            teBox.setContent(station.information);
            nygrafik.setInfoTemplate(teBox);
            var contentString = station.information;
            contentString += "<tr><br><b>Extra info:<img src='" + station.bild + "'</b></tr>";
            teBox.setContent(contentString);
        }
        else if (station.name == "Rastplats") {
            var nygrafik = new esri.Graphic(punkten, bomb);
            var teBox = new esri.InfoTemplate();
            teBox.setTitle(station.name);

            nygrafik.setInfoTemplate(teBox);
            var contentString = station.information;
            contentString += "<tr><br><b>Extra info:<img src='" + station.bild + "'</b></tr>";
            teBox.setContent(contentString);
        }
        else if (station.name = "Info") {
            var nygrafik = new esri.Graphic(punkten, kram);
            var teBox = new esri.InfoTemplate();
            teBox.setTitle(station.name);
            var contentString = station.information;

            //contentString += "<tr><br><b>Extra info:<img src='Rastplatser/rastplats.jpg'</b></tr>";

            // var testSr = "Rastplatser/rastplats.jpg";

            //var bussImages = new Array();
            //bussImages = new Image();
            //bussImages[0] = ("Rastplatser/" + text + ".jpg");

            contentString += "<tr><br><b>Extra info:<img src='" + station.bild + "'</b></tr>";

            teBox.setContent(contentString);
            nygrafik.setInfoTemplate(teBox);
        }
        //Allt samma förutom denna är global?? 0518
        stopLager.add(nygrafik);
    })
    /*/Steg 19+8<27>*/
    /*/Steg 20*/
}

/*
Funktion som....
Samma SOM Z[\]^_`
Contribute Robin
*/
function makePoiKanot() {
    var whichStops = { url: "kanot-poi/KanotPOIer.json", handleAs: "json", content: {}, load: showPoiKanot };
    dojo.xhrGet(whichStops);
}


function showPoiKanot(poiData) {

    var stopLager = new esri.layers.GraphicsLayer();
    map.addLayer(stopLager);

    // De olika skyltarna
    // Standard bilbliotek för bilder bilder-to-use/senedan
    var badplats = new esri.symbol.PictureMarkerSymbol("bilder-to-use/matplatsikon.jpg", 30, 30);
    var rast = new esri.symbol.PictureMarkerSymbol("bilder-to-use/Rastplatsikon.jpg", 30, 30);
    var info = new esri.symbol.PictureMarkerSymbol("bilder-to-use/infosymbol.jpg", 30, 30);

    // De olika skyltarna

    dojo.forEach(poiData.intresse, function (station) {
        var punkten = new esri.geometry.Point(station.x, station.y);


        if (station.type == "badplats") {
            var nygrafik = new esri.Graphic(punkten, badplats);
            var teBox = new esri.InfoTemplate();
            teBox.setTitle(station.name);
            teBox.setContent(station.information);
            nygrafik.setInfoTemplate(teBox);
            var contentString = station.information;
            contentString += "<tr><br><b>Extra info:<img src='" + station.bild + "'</b></tr>";
            teBox.setContent(contentString);
        }
        else if (station.type == "rastplats") {
            var nygrafik = new esri.Graphic(punkten, rast);
            var teBox = new esri.InfoTemplate();
            teBox.setTitle(station.name);

            nygrafik.setInfoTemplate(teBox);
            var contentString = station.information;
            contentString += "<tr><br><b>Extra info:<img src='kanotbilder/" + station.bild + "'</b></tr>";
            teBox.setContent(contentString);
        }
        else if (station.type = "Info") {
            var nygrafik = new esri.Graphic(punkten, info);
            var teBox = new esri.InfoTemplate();
            teBox.setTitle(station.name);
            var contentString = station.information;

            //contentString += "<tr><br><b>Extra info:<img src='Rastplatser/rastplats.jpg'</b></tr>";

            // var testSr = "Rastplatser/rastplats.jpg";

            //var bussImages = new Array();
            //bussImages = new Image();
            //bussImages[0] = ("Rastplatser/" + text + ".jpg");

            contentString += "<tr><br><b>Extra info:<img src='" + station.bild + "'</b></tr>";

            teBox.setContent(contentString);
            nygrafik.setInfoTemplate(teBox);
        }

        stopLager.add(nygrafik);
    })

    function hidePoiKanot(badplats, rast, camping) {

        if (elementet.checked) {
            stiowapo[elementet.value].show();
        }
        else {
            stiowapo[elementet.value].hide();
        }
    }
}

/*
Någorlunda ▓┼→+R
*/
function kanjOt() {


    var whereCaon1 = { url: "Kanotleder/farnebofjarden.json", sync: "true", handleAs: "json", content: {}, load: loadCanjot };
    dojo.xhrGet(whereCaon1);
    var whereCaon2 = { url: "Kanotleder/gysingekanot.json", sync: "true", handleAs: "json", content: {}, load: loadCanjot };
    dojo.xhrGet(whereCaon2);
    var whereCaon3 = { url: "Kanotleder/hedesundafjarden.json", sync: "true", handleAs: "json", content: {}, load: loadCanjot };
    dojo.xhrGet(whereCaon3);
}

/*
Någorlunda ▓┼→+R
*/

function loadCanjot(data) {
    dojo.forEach(data.post, function (zeData) {
        kanotLed.push([zeData.longitude, zeData.latitude]);
    });
    // Hold until button pushed
    /*

    IMPLEMENT Text notice pls
    */
    //Do this first time when pushed button?
    tillhorKanot();
    kanotLed = [];
};

function BikingElevation() {

    var randomNamn = { url: "elevation/Biking_elevation161008.json", sync: "true", handleAs: "json", content: {}, load: loadElev };
    dojo.xhrGet(randomNamn);
    var randomNamn2 = { url: "elevation/Walk_elevation_123547.json", sync: "true", handleAs: "json", content: {}, load: loadElev };
    dojo.xhrGet(randomNamn2);
    var randomNamn3 = { url: "elevation/Walk_elevation_151851.json", sync: "true", handleAs: "json", content: {}, load: loadElev };
    dojo.xhrGet(randomNamn3);

}

function loadElev(data) {
    dojo.forEach(data.posts, function (zeData) {
        elevLed.push([zeData.longitude, zeData.latitude]);
    });
    // Hold until button pushed
    /*

    IMPLEMENT Text notice pls
    */
    //Do this first time when pushed button?
    tillhorElev();
  
    elevLed = [];
};