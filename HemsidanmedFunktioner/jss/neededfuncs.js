
var submits = 0;
var buttonOne = false;
var buttonTwo = false;
var buttonThree = false;
var buttonFour = false;
var buttonFive = false;
var buttonSix = false;

var numbertrue = 0;
var firsthasbeenclicked = false;

var submitOne = false;
var submitTwo = false;
var heroshown = false;

function showNavbar(){a
    document.getElementById('leftColNav').style.display = 'flex';
   
}


function showHero(){
    if (heroshown){
        alert("nonedewd")
    }else{
        document.getElementById('herosec').style.display = 'block';
        heroshown = true;
    }
   
    
}

function showLock() {
    document.getElementById('makeinvisible').style.display = 'block';
    alert("tryck på den röda knappen några ggr");
    //document.getElementById('makevisible').style.display = 'none';
    //document.getElementById("knas").style.cssText = "display: block; position: absolute;";
}
function showTextAndButt(){
    if (firsthasbeenclicked){
        alert("noneed");
    }else{
        firsthasbeenclicked = true;
        document.getElementById('valuetocheck').style.display = 'block';
        document.getElementById('buttoncheck').style.display = 'block';
    
    }
}


function correctAnswer() {
    document.getElementById("alr").innerHTML = valuetocheck.value;
    document.getElementById('showthissection').style.display = 'block';
    document.getElementById('valuetocheck').style.display = 'none';
    document.getElementById('buttoncheck').style.display = 'none';
    document.getElementById('makevisible').style.display = 'none';
   
}

function checkText(){
    var inputfromuser = valuetocheck.value;
    if (inputfromuser == "knasigtvärreutanmellanslag")
    {
        alert("du hade det gömda lösenordet!");
        hideAll();
    }

    if (inputfromuser == "ärligt"){
        showLineOne();
        showLineTwo();
        showLineThree();
        showLineArli();
        alert("Vissa saker är klickbara");
        correctAnswer();
        document.getElementById('showthissection').style.display= 'block';
        document.getElementById
        ('section.thesix').style.display
        = 'block'; 
            
    }
    if(submits == 0){
        showLineOne();
    }   
    if(submits == 1){
        showLineTwo();
    }   
    if(submits == 2){
        showLineThree();
    }   
    if(submits == 3){
        showLineArli(); 
    }    
    submits += 1;
    if(submits > 4){
        alert("Ljusröda Texten");
        submits = 0;
    }   

}
function showLineOne(){
document.getElementById('hidethesetwo').style.display = 'block';
}
function showLineTwo(){
    document.getElementById('hidethesetwot').style.display = 'block';

}
function showLineThree(){
    document.getElementById('hidethesetwott').style.display = 'block';
}

        
function showLineArli(){
    document.getElementById('hidethesetwottt').style.display = 'block';
}

function clickOne(){
    if (buttonOne){
        alert("du har redan tryckt här");
    }else {
        buttonOne = true;  
        numbertrue += 1;    
    }
     
}
function hasBeenClickedt(){
   
    if (buttonTwo){
        alert("du har redan tryckt här");
    }else {
        buttonTwo = true;  
        numbertrue += 1;    
    }
   
}
function hasBeenClickedtt(){
    if (buttonThree){
        alert("du har redan tryckt här");
    }else {
        buttonThree = true;  
        numbertrue += 1;    
    }
   
}
function hasBeenClickedttt(){
    if (buttonFour){
        alert("du har redan tryckt här");
    }else {
        buttonFour = true;  
        numbertrue += 1;    
    }

}
   function hasBeenClickedtttt(){
    if (buttonFive){
        alert("du har redan tryckt här");
    }else {
        buttonFive = true;
        numbertrue += 1;    
    }
    
}
   function hasBeenClickedttttt(){
    if (buttonSix){
        alert("du har redan tryckt här");
    }else {
        buttonSix = true;
        numbertrue += 1;    
    }
}

function checkster(){
    if (numbertrue == 0){
        alert("Inget har skett för att ta sig frammåt")
    }
    
    if (numbertrue == 1){
        alert("Något rätt har gjorts")
    }

    
    if (numbertrue == 2){
        alert("har du löst det nu?")
    }
    if(numbertrue == 3){
        alert("inte riktigt där!")
    }
    if(buttonOne && buttonTwo && buttonThree && buttonFour && buttonFive && buttonSix){
        document.getElementById('citece').style.display = 'block';


        alert("två av fyra klick kan ge resultat");
    }
}
function citeButt(){
    document.getElementById('stairsandcouch').style.display = 'block';
}

function showContact(){
    document.getElementById('mycontact').style.display = 'block';
}
//<img src="http://cdn.schoolstickers.com/products/en/819/GREEN-SMILE-00.png" onclick="window.open(this.src)">
//
// Get a reference to the element that you want to work with
//var img = document.querySelector("img.img-default");
//
// Set up an event handler. Notice that we don't use "on" in front
// of the event name when doing it this way.
//img.addEventListener("mouseover", changeDef);
//
//function changeDef(){
//    allert();
//}
//
//<img class="img-default" src="http://cdn.schoolstickers.com/products/en/819/GREEN-SMILE-00.png"></img>
function finish(){
    var lokalHold = document.getElementById("message").value
    if (lokalHold == "öppen"){
        submitOne = true;
    }
    var lokalHoldTva = document.getElementById("thislinks").value
    if(lokalHoldTva == "stängd"){
        submitTwo = true;
    }

    if (lokalHold && lokalHoldTva){
        alert("Grattis! Du klarade alla steg!");
        hideAll();
    }
}

function hideAll(){
    document.getElementById('stairsandcouch').style.display = 'none';
    document.getElementById('citece').style.display = 'none';
    document.getElementById('showthissection').style.display = 'none';
    document.getElementById('herosec').style.display = 'none';
    document.getElementById('mycontact').style.display = 'none';
    document.getElementById('finish').style.display = 'block';
}