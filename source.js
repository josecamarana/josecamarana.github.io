var osc;
var env;
var slider;
var attack;
function setup (){
    //createCanvas(400,400);
    //background(100);
    osc = new p5.Oscillator();
    env = new p5.Env(0.01,0.2,0.5,1);
   
    osc.amp(env);
    osc.start();
    slider = createSlider(0, 255, 100);

    //slider.position(10, 10);

    slider.style('width', '80px');



    /*mod = new p5.Oscillator();
    mod.amp(0);
    mod.start();
    mod.disconnect();*/
}

function draw(){
   // fill(200,0,0);
    //background(100);


    //ellipse(mouseX,mouseY,70,70);
    //osc.amp(mouseX/800);
    //osc.freq(mouseY*4);
     //osc.env(slider.value());
     var val = slider.value();
     //background(val);
     env.setRange(slider.value(), 0);
    
    
}

function keyPressed(){
    console.log("you pressed the key" + key);
    ellipse(56, 46, 55, 55);
    
//osc.start();
var fr =0;
switch(key){
    case  "Q":
     fr = 262;
    break;
    case  "2":
        fr = 277;
    break;
    case  "W":
        fr = 293;
    break; 
    case "3":
     fr = 311;
    break; 
    case "E":
     fr = 330;
    break; 
    case "R":
     fr = 349;
    break; 
    case "5":
     fr = 370;
    break;
    case "T":
     fr = 392;
    break;
    case "6":
     fr = 415;
    break;
    case "Y":
     fr = 440;
    break;
    case "7":
     fr = 466;
    break;
    case "U":
     fr = 494;
    break;
    case "I":
     fr = 523;
    break;
    case "9":
     fr = 554;
    break;
    case "Z":
     fr = 587;
    break;
    case "S":
     fr = 622;
    break;
    case "X":
     fr = 659;
    break;
    case "C":
     fr = 698;
    break;
    case "F":
     fr = 740;
    break;
    case "V":
     fr = 784;
    break;
    case "G":
     fr = 830;
    break;
    case "B":
     fr = 880;
    break;
    case "H":
     fr = 932;
    break;
    case "B":
     fr = 987;
    break;


}
console.log(fr);
osc.freq(fr);
env.triggerAttack();
}
function keyReleased(){
    console.log("you released the key" + key);
env.triggerRelease();
background(255);
}

function sldamp(){

}

