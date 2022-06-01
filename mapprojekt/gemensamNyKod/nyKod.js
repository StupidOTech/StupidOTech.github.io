
//Se TankarochFunderingar !!!!####!!!!
function skapaGrafikLager() {
    grafikLager[count] = new esri.layers.GraphicsLayer();
    map.addLayer(grafikLager[count]);
    var linjen = new esri.geometry.Polyline();
// Frågan är om det går göra en lokal variabel
// enLed <== där den skapas med data från en databas

    linjen.addPath(enLed);
    if (count < 11) {
        var linjeGrafik = new esri.Graphic(linjen, simpleLineSymbol);
    }
    else {
        var linjeGrafik = new esri.Graphic(linjen, simpleLineSymbolVandring);
    }
    grafikLager[count].add(linjeGrafik);
    //DAGENS#½┼┼½#1
    // Här skall då förmodligen grafiklager vara en array som är lagradnågonstans...
    count++;


};

/*
2022-05-17 ©Robin
En funktion som Robin skrev som öppnar en html form.
Denna form används till att ...
*/
//Antal funktioner
//
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

/*
2022-05-17 ©Robin
Denna form används till att ...
*/
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

/*
2022-05-17 ©Pierre
Denna funktion nollställer värdet i en html form (namnge dessa former så dom hittas?)
Och kallar på en funktionen paKarta
*/

/*/Steg 21*/ /*/Steg 26-27*/
function createPOI() {
    //when the map is clicked create a buffer around the click point of the specified distance.
    var poiLager = new esri.layers.GraphicsLayer();
    /*/Steg 22*/
    map.addLayer(poiLager);
    /*/Steg 23*/
    // De olika skyltarna
    var stopskylt = new esri.symbol.PictureMarkerSymbol("standard-bilder/xx.png", 20, 20);
    /*/Steg 24*/
    /*/Steg 25
    Startar en onclick funtion som följer muspekaren som */
    map.on("click", function (evt) {

        var mapPoint = esri.geometry.webMercatorToGeographic(evt.mapPoint);
        testfunka(mapPoint.x, mapPoint.y);
        /*/Steg 26-27*/
        /*/*STEG 31*/
    });

}

// #HÄRIFRÅN TILL "####""###"#

function savePOI() {
    // = document.querySelector('.testCheck').value;
    var markedCheckbox= document.querySelector('input[name="testCheck"]:checked').value;
    //alert(markedCheckbox);
    paKarta(markedCheckbox);
   // document.getElementById("typ").value
    //alert(cuu);

//Jag tror det är denna funktion som löser allt med databasaen.
}

/*
2022-05-17
Funktionen mottar tre st olika variabler, dessa är hämtade från ett html dokument som har olika värden
för närvarande är det 'typ' 'info' och 'bild'
dessa får ärvas av tre nya variabel namn
2022-05-17 ©Pierre*/
function paKarta(typ) {
    var intreLager = new esri.layers.GraphicsLayer();
    map.addLayer(intreLager);
   
    // Standardsymbol, vi kan lägga till if satser så baserat på typ (vi kan ha fast typer)
    // Så kan vi ha olika bilder


    var standardMark = new esri.symbol.PictureMarkerSymbol("standard-bilder/xx.png", 20, 20);
    
    if (typ == "BadPlats") {
        standardMark = new esri.symbol.PictureMarkerSymbol("standard-bilder/kram.png", 20, 20);
    } else if (typ == "Rastplats"){
        standardMark = new esri.symbol.PictureMarkerSymbol("standard-bilder/bomb.png", 20, 20);
    }

    var dennapunkten = new esri.geometry.Point(globX, globY);
    //Skapar punkt
    var punktGraffe = new esri.Graphic(dennapunkten, standardMark);
    /*#minlillapunkt#*/
    //Skapar grafik konbinerat två olika typer av data, en punkt bestående av x och y, och en bild
    var teBox = new esri.InfoTemplate();
    teBox.setTitle(typ);
    //Skapade och satt titeln från ärvd variabel
    var contentString = "#LITERANDONU"//beskr;
    //Sätter content,
    //Om content existerar som filsökväg. Lägg till den i rutan,
    //Gör #auth
    /*
    if (bld != null) {
        contentString += "<tr><br><b>Extra info:<img src='" + bld + "' alt='badURL' </b></tr>";
    }
*/
    teBox.setContent(contentString);
    //La till eventuell bild
    punktGraffe.setInfoTemplate(teBox);
    //Lägger infoboxen som html form med uppdaterat innehåll 
    //Kopplat till punkten /*#minlillapunkt#*/ som vi skapade ovan med angivna koordinater och tillhörande bild.

    //teBox.setContent(contentString);
    
/*
CREATE TBL AND USE SQL TO STORE VALUE INTO DATABASE

*/


    intreLager.add(punktGraffe);
    alert("kom vi hit?");
    BadplatsLager[cuu].add(punktGraffe);
   

    
    //Lägger till den grafiken till grafiklagret 
}
// #HÄRIFRÅN TILL "####""###"# PLUS

/*
Gemensam funktion ▓┼→+R

PQRSTUVWXY <-- För att denna skall funger

*/

function hideAll(elementet) {
    

    if(elementet.checked){
        document.getElementById("hide").checked = true;
        allShow();
    }else{
        document.getElementById("hide").checked = false;
        allInvis();
    }

    
}
function allInvis(){
    
    for (let rakna = 0; rakna < grafikLager.length; rakna++) {
        grafikLager[rakna].hide();
    }

}

function allShow(){
    for (let rakna = 0; rakna < grafikLager.length; rakna++) {
        grafikLager[rakna].show();
    }
}

function visible(elementet) {
    
   
        
    if (elementet.checked) {
        grafikLager[elementet.value].show();
        //DAGENS#½┼┼½#2
        // Här skall det då ändra från feature yes till feature no
        // 
    }
    else {
        grafikLager[elementet.value].hide();
    }

    
}
/*
Gemensam funktion ▓┼→+R
*/
function visibleKanot(elementet) {

    if (elementet.checked) {
        stiowapo[elementet.value].show();
    }
    else {
        stiowapo[elementet.value].hide();
    }
}

function visiblePOI(elementet) {
    //alert(punktlagret.length);
    if (elementet.checked) {

        for (let er = 0; er < punktlagret.length; er++) {
            punktlagret[er].show();
        }

    }
    else {
        for (let er = 0; er < punktlagret.length; er++) {
            punktlagret[er].hide();
        }

    }
}
/*
Gemensam funktion ▓┼→+R
*/

function tillhorKanot() {

    stiowapo[cucucu] = new esri.layers.GraphicsLayer();

    map.addLayer(stiowapo[cucucu]);

    gsegst = new esri.geometry.Polyline();

    gsegst.addPath(kanotLed);

    /*if (cucucu < 15) {
        zeNewsdag = /*=DWADAWDAWD=AWD=D"=¤)JAWDALKWNDLKAWNVDLAKWNVDLAKWNDV/new esri.Graphic(gsegst, kanotSymbol);
    }
    else {
        zeNewsdag =/*=DWADAWDAWD=AWD=D"=¤)JAWDALKWNDLKAWNVDLAKWNVDLAKWNDV/ new esri.Graphic(gsegst, simpleLineSymbolVandring);
    }*/
    var linjeGrafikkkk = new esri.Graphic(gsegst, kanotSymbol);
    stiowapo[cucucu].add(linjeGrafikkkk);
    // graffe.add(linjeGrafik);
    //grafikLager[count].hide();
    cucucu++;

};
/*
Gemensam funktion ▓┼→+R
*/
function tillhorElev() {

    elevLinje[nyCount] = new esri.layers.GraphicsLayer();

    map.addLayer(elevLinje[nyCount]);

    gsegKopian = new esri.geometry.Polyline();

    gsegKopian.addPath(elevLed);

    var linjeGrafikkkk = new esri.Graphic(gsegKopian, symbolForElev);
    elevLinje[nyCount].add(linjeGrafikkkk);
    // graffe.add(linjeGrafik);
    //grafikLager[count].hide();
    nyCount++;

};







/*//Steg: 5+x.*/

/*
Gemensam funktion ▓┼→+R
Denna funktion skapar en global Array som vi sparar de olika lederna i separata index.
Detta för att kunna använda funktion PQRSTUVWXY
*/




function skapaGrafikLagerPunktOfIntresse(xdatan, ydatan, namndatan) {
    var xa = xdatan;
    var ya = ydatan;
    var na = namndatan;

    //alert(xa);
    //alert(ya);
    //alert(na);
    var bomb = new esri.symbol.PictureMarkerSymbol("standard-bilder/bomb.png", 30, 30);
    var kram = new esri.symbol.PictureMarkerSymbol("bilder-to-use/infosymbol.jpg", 30, 30);
    var stopskylt = new esri.symbol.PictureMarkerSymbol("bilder-to-use/matplatsikon.jpg", 30, 30);
    var punkten = new esri.geometry.Point(globalaPunktArray[count2]);
    if (na == "Rastplats") {
        punktlagret[count2] = new esri.layers.GraphicsLayer();
        map.addLayer(punktlagret[count2]);
        var punktGrafik = new esri.Graphic(punkten, bomb);
        punktlagret[count2].add(punktGrafik);
        count2++;

    } else if (na == "Mat") {
        punktlagretMat[count3] = new esri.layers.GraphicsLayer();
        map.addLayer(punktlagretMat[count3]);
        var punktGrafik = new esri.Graphic(punkten, kram);
        punktlagretMat[count3].add(punktGrafik);
        count3++;
    } else if (na == "Info") {
        punktlagretInfo[count4] = new esri.layers.GraphicsLayer();
        map.addLayer(punktlagretInfo[count4]);
        var punktGrafik = new esri.Graphic(punkten, stopskylt);
        punktlagretInfo[count4].add(punktGrafik);
        count4++;
    }

    //alert(myX);
    //var punkten = new esri.geometry.Point(station.x, station.y);
    //punkteeen.add(globalaPunktArray);

    //var text = globalaPunktArray[count2];
    //alert(text);


    //alert(globalaPunktArray[0]);

    // var punkten = new esri.geometry.Point(16.6528401710, 60.3075463884);
    //16.6528401710, 60.3075463884, rastplats/info/mat

    //alert(count2);

    //alert(count2);


};



function makePoielev() {
    var whichStops = { url: "elevation/Biking_elevation161008.json", handleAs: "json", content: {}, load: showPoielev };

    dojo.xhrGet(whichStops);
}

function showPoielev(poiEData) {


    var stopLager = new esri.layers.GraphicsLayer();
    map.addLayer(stopLager);
    /*/Steg 15 och ökade kartans grafik lager med 1*/
    // De olika skyltarna
    var stopskylt = new esri.symbol.PictureMarkerSymbol("standard-bilder/xx.png", 30, 30);
    var bomb = new esri.symbol.PictureMarkerSymbol("standard-bilder/bomb.png", 30, 30);
    var kram = new esri.symbol.PictureMarkerSymbol("standard-bilder/kram.jpg", 30, 30);
    // De olika skyltarna
    /*/Steg 18*/

    /*
    En for loop som är känslig för hur saker och ting är skrivna
    */

    dojo.forEach(poiEData.posts, function (station) {

        var punkten = new esri.geometry.Point(station.longitude, station.latitude);

        /*/Steg 19*/
        /*'
        En if sats som hanterar följande Kollar vilken typ av plats som skall hanteras:
        Skapar två nya variabler. ena är en grafik variable den ändra en infotemplete som är en färdig HTML form
        Med hjälp av dokumentets utformning can vi sätta titlenamnet och innehållet
        Sedan använder vi det inbyggda namnet att lägga till denna 'formen' till grafik objeket.
        vi skapar en sträng variabel hänvisat till en specifik plats
        och vi lägger till dessa.
        */

        if (true) {

            var nygrafik = new esri.Graphic(punkten, bomb);
            var teBox = new esri.InfoTemplate();
            teBox.setTitle(station.name);
            teBox.setContent(station.information);
            nygrafik.setInfoTemplate(teBox);
            var contentString = station.information;
            contentString += "<tr><br><b>Extra info:<img src='" + station.bild + "'</b></tr>";
            teBox.setContent(contentString);
        }
        else if (station.elevation > 10) {
            var nygrafik = new esri.Graphic(punkten, bomb);
            var teBox = new esri.InfoTemplate();
            teBox.setTitle(station.name);

            nygrafik.setInfoTemplate(teBox);
            var contentString = station.information;
            contentString += "<tr><br><b>Extra info:<img src='" + station.bild + "'</b></tr>";
            teBox.setContent(contentString);
        }
        else if (station.elevation > 10) {
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

        stopLager.add(nygrafik);
    })
    /*/Steg 19+8<27>*/
    /*/Steg 20*/
}

/*/Steg 27*/
function testfunka(datax, datay) {
    //document.getElementById("demo").innerHTML = datax + " " + datay;
    globX = datax;
    globY = datay;
    /*/Steg 29*/
    document.getElementById("point").value = "Long: " + datax.toFixed(6) + " Lat: " + datay.toFixed(6);
    /*/Steg 30*/
}



/*
#####
#####
#####
#####
#####
#####
#####
#####
##  Ny kod 0518¤¤
#####
##### Lätt att kommentera bort då
#####
#####
#####
#####
#####
*/

function testarPoiMake() {
    //walking-poi/Biking_walking_noelevation_POI.json
    var nyaPunkter = { url: "poi-n/poisave.json", handleAs: "json", content: {}, load: vosatestarPoiMake };
    dojo.xhrGet(nyaPunkter);
 //Spara denna json i en databas

    
}
// #HÄRIFRÅN TILL "####""###"# PLUS// #HÄRIFRÅN TILL "####""###"# PLUS
// #HÄRIFRÅN TILL "####""###"# PLUS// #HÄRIFRÅN TILL "####""###"# PLUS
// De två kombinerat och reducerat
function vosatestarPoiMake(passedValue) {
// use image variable and combine global value.
    newLayerObjectFromEsri[bottomLayerC] = new esri.layers.GraphicsLayer();
    map.addLayer(newLayerObjectFromEsri[bottomLayerC]);
    var foodI = new esri.symbol.PictureMarkerSymbol("bilder-to-use/matplatsikon.jpg", 30, 30);
    var restI = new esri.symbol.PictureMarkerSymbol("bilder-to-use/Rastplatsikon.jpg", 30, 30);
    var infoI = new esri.symbol.PictureMarkerSymbol("bilder-to-use/infosymbol.jpg", 30, 30);
    var standard = new esri.symbol.PictureMarkerSymbol("standard-bilder/bomb.png", 30, 30);
    MatLager[co] = new esri.layers.GraphicsLayer();
    rastplatsLager[ci] = new esri.layers.GraphicsLayer();
    InfoLager[cu] = new esri.layers.GraphicsLayer();
    BadplatsLager[cuu] = new esri.layers.GraphicsLayer();
    map.addLayer(MatLager[co]);
    map.addLayer(rastplatsLager[ci]);
    map.addLayer(InfoLager[cu]);
    map.addLayer(BadplatsLager[cuu]);
    //¤#¤#¤#

    dojo.forEach(passedValue.intresse,
        function (newFunctionStartshere) {

            var zePoint = new esri.geometry.Point(newFunctionStartshere.x, newFunctionStartshere.y);


            var newPopUpTemplete = new esri.InfoTemplate();
            var appendInformationIntoPopup = newFunctionStartshere.information;

            newPopUpTemplete.setTitle(newFunctionStartshere.name);
            newPopUpTemplete.setTitle(newFunctionStartshere.information);

            if (newFunctionStartshere.name == "Rastplats") {

                var galenn = new esri.Graphic(zePoint, restI);

                galenn.setInfoTemplate(newPopUpTemplete);

                appendInformationIntoPopup += "<tr><br><b>Extra info:<img src='" + newFunctionStartshere.bild + "'</b></tr>";

                newPopUpTemplete.setContent(appendInformationIntoPopup);


                rastplatsLager[ci].add(galenn);

             
            } else if (newFunctionStartshere.name == "Mat") {

                var galenn = new esri.Graphic(zePoint, foodI);

                galenn.setInfoTemplate(newPopUpTemplete);

                appendInformationIntoPopup += "<tr><br><b>Extra info:<img src='" + newFunctionStartshere.bild + "'</b></tr>";

                newPopUpTemplete.setContent(appendInformationIntoPopup);


                MatLager[co].add(galenn);

            } else if (newFunctionStartshere.name == "Info") {

                var galenn = new esri.Graphic(zePoint, infoI);

                galenn.setInfoTemplate(newPopUpTemplete);

                appendInformationIntoPopup += "<tr><br><b>Extra info:<img src='" + newFunctionStartshere.bild + "'</b></tr>";

                newPopUpTemplete.setContent(appendInformationIntoPopup);

                InfoLager[cu].add(galenn);
            }else if (newFunctionStartshere.name == "Badplats") {

                var galenn = new esri.Graphic(zePoint, standard);

                galenn.setInfoTemplate(newPopUpTemplete);

                appendInformationIntoPopup += "<tr><br><b>Extra info:<img src='" + newFunctionStartshere.bild + "'</b></tr>";

                newPopUpTemplete.setContent(appendInformationIntoPopup);

                BadplatsLager[cuu].add(galenn);
            }

            


        })
        cuu++;
        cu++;
        ci++;
        co++;
       bottomLayerC++;

}
function visiblevosa(elementet) {
    /*
        if (elementet.checked) {
            newLayerObjectFromEsri[elementet.value].show();
        }
        else {
            newLayerObjectFromEsri[elementet.value].hide();
        }
        */
    if (elementet.checked) {
        elevLinje[elementet.value].show();
    }
    else {
        elevLinje[elementet.value].hide();
    }

}

function visibleInfo(elementet) {
    /*
        if (elementet.checked) {
            newLayerObjectFromEsri[elementet.value].show();
        }
        else {
            newLayerObjectFromEsri[elementet.value].hide();
        }
        */
    if (elementet.checked) {
        InfoLager[elementet.value].show();
    }
    else {
        InfoLager[elementet.value].hide();
    }

}


function visibleRastplats(elementet) {
    /*
        if (elementet.checked) {
            newLayerObjectFromEsri[elementet.value].show();
        }
        else {
            newLayerObjectFromEsri[elementet.value].hide();
        }
        */
    if (elementet.checked) {
        rastplatsLager[elementet.value].show();
    }
    else {
        rastplatsLager[elementet.value].hide();
    }

}

function visibleMatplats(elementet) {
    /*
        if (elementet.checked) {
            newLayerObjectFromEsri[elementet.value].show();
        }
        else {
            newLayerObjectFromEsri[elementet.value].hide();
        }
        */
    if (elementet.checked) {
        MatLager[elementet.value].show();
    }
    else {
        MatLager[elementet.value].hide();
    }

}

function visibleBadplats(elementet) {
    /*
        if (elementet.checked) {
            newLayerObjectFromEsri[elementet.value].show();
        }
        else {
            newLayerObjectFromEsri[elementet.value].hide();
        }
        */
    if (elementet.checked) {
        BadplatsLager[elementet.value].show();
    }
    else {
        BadplatsLager[elementet.value].hide();
    }

}


/*
#####
#####
#####
#####
#####
#####
#####
#####
##  Ny kod 0518¤¤
#####
##### Lätt att kommentera bort då
#####
#####
#####
#####
#####
*/

