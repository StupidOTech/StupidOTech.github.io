var map;
var polyLine;
var simpleLineSymbol;
var simpleLineSymbolVandring;
var simpleLineSymbolTest;
var nyLinje;
var enLed = [];
var count = 0;
var taBortLed = [];
var grafikLager = [];
var sattapunkt = 0;
var globX;
var globY;
var kanotSymbol;
var kanotLed = [];
var cucucu = 0;
var zeNewsdag;
var gsegst;
var gsegKopian;
var stiowapo = [];
var elevLed = [];
var nyCount = 0;
var elevLinje = [];

var symbolForElev;


var globalaPunktArray = [];
var punktlagret = [];
var punktlagretInfo = [];
var punktlagretMat = [];
var count2 = 0;
var count3 = 0;
var count4 = 0;
var globalarastPlats = [];

//
var newLayerObjectFromEsri = [];
var bottomLayerC = 0;

var rastplatsLager = [];
var InfoLager = [];
var MatLager = [];
var BadplatsLager = [];
var co = 0;
var ci = 0;
var cu = 0;
var cuu = 0;
var c2 = 0;
var c3 = 0;
//##!"#¤%&START"



require(["esri/map", "esri/geometry/Polygon", "esri/layers/GraphicsLayer",
    "esri/symbols/SimpleLineSymbol", "esri/symbols/LineSymbol", "esri/symbols/SimpleMarkerSymbol", "esri/graphic", "esri/Color",
    "esri/InfoTemplate", "esri/geometry/Point", "esri/geometry/Polyline", "dojo/domReady!"],
    function (Map, Polygon, GraphicLayer, SimpleLineSymbol, LineSymbol, SimpleMarkerSymbol, Graphic, Color, InfoTemp, Point, PolyLine) {

        //require satsen verkar finnas med någon include sats, Jag 2022-05-17 Lägger in kommenterar på hur jag uppfattar på hur vi skulle ha börjat
        // 
        // Skapar en Karta i en funktion som alla alla ovan variabler,
        /*
        
        //##START##\\
        Börjar kommentera kod 2022-05-17 ©Pierre
        Här skapas en karta med samtiga ovan variabler tillgänglige
        */
        map = new Map('mapDiv', {
            basemap: "satellite",
            center: [16.6528401710, 60.3075463884],
            zoom: 10,
            sliderStyle: "small"
        });


        /*Det verkar som om det är här som vi egentligen då sitter och gör saker "utåt"
        
        
        
            Eftersom nedan är styling tyo ?

            Och sen ropar vi på kod.
         I htmnl skaapr ny knapp för att "loada lager" och sedan en knapp för visa och ta boret
        
        ##########################################################################
        */


        


        var graphics = new GraphicLayer();
        map.addLayer(graphics);
        simpleLineSymbol = new SimpleLineSymbol().setColor(new Color([255, 0, 0, 1]));
        simpleLineSymbol.setWidth(3);

        simpleLineSymbolVandring = new SimpleLineSymbol().setColor(new Color([0, 255, 0, 1]));
        simpleLineSymbolVandring.setWidth(2);
        simpleLineSymbolVandring.setStyle("dash");
        kanotSymbol = new SimpleLineSymbol().setColor(new Color([0, 0, 255, 1]));
        kanotSymbol.setWidth(2);
        kanotSymbol.setStyle("dash");

        symbolForElev = new SimpleLineSymbol().setColor(new Color([0, 255, 0, 1]));
        symbolForElev.setWidth(4);
        symbolForElev.setStyle("short-dot");

    

//tidigarekod
        laddaEtapper();
        BikingElevation(); //<==== byta färg
        kanjOt();
        testarPoiMake();
        //makePoi(); // denna kan vi ta bort nu
        createPOI();

        //makePoiKanot();
 
        //laddaPoi();
        //makePoielev();

    });
//Se TankarochFunderingar !!!!¤¤¤¤!!!!
//##!"#¤%&START"


