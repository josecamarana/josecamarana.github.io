
function preload() {
    soundFormats("mp3");
    s1 = loadSound('rolas/01 Solx.mp3');
    s2 = loadSound('rolas/CEPJA jingle1.mp3');
    s3 = loadSound('rolas/Prayers.mp3');

}

var pos = 0;

function setup() {
    cnv = createCanvas(400,400);
    amplitude = new p5.Amplitude();
    cnv.position(70,20);
    arr = [s1, s2, s3];
    buttonplay = createButton('PLAY');
    buttonplay.position(19, 20);
    buttonstop = createButton('STOP');
    buttonstop.position(19, 40);
    buttonnext = createButton('NEXT');
    buttonnext.position(19, 60);
    buttonpre = createButton('PREVIOUS');
    buttonpre.position(19, 80);
    buttonpause =createButton('PAUSE');
    buttonpause.position(19, 100);
    buttonloop =createButton('LOOP');
    buttonloop.position(19, 120);
    buttonplay.mousePressed(playS);
    buttonstop.mousePressed(stop);
    buttonnext.mousePressed(nextSong);
    buttonpre.mousePressed(prevSong);
    buttonpause.mousePressed(pause);
    buttonloop.mousePressed(loop);

}
function loop(){
    arr[pos].loop(true);
}
function playS(){
    arr[pos].play();
}
function pause(){
    arr[pos].pause();
}

function stop() {
    arr[pos].stop();

}

function nextSong() {
    arr[pos].stop();
    pos = (pos + 1) % 3;
    arr[pos].play();
}

function prevSong() {
    arr[pos].stop();
    pos = pos - 1;
    if (pos==-1){
        pos = pos+3;
}
    arr[pos].play();    
}



function draw() {
    background(0);
    fill(255);
    var level = amplitude.getLevel();
    var size = map(level, 0, 1, 0, 200);
    ellipse(width/2, height/2, size, size);
  }

