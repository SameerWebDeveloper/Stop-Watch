var displayMint = document.getElementById('Mint')
var displaySec = document.getElementById('Second')
var displayMilliSec = document.getElementById('MilliSec')

var Minute = 0;
var Second = 0;
var MilliSec = 0;

var Interval;

function Watch() {
    MilliSec++;
    displayMilliSec.innerHTML = MilliSec;
    if (MilliSec === 99) {
        Second++;
        displaySec.innerHTML = Second;
        MilliSec = 0;
    }

    if (Second === 60) {
        Minute++;
        displayMint.innerHTML = Minute;
        Second = 0;
    }
}

function Start() {
    Interval = setInterval(Watch, 10)
    document.getElementById('Startbtn').style.display = 'none'
    document.getElementById('Pausebtn').style.display = ''
    document.getElementById('Resetbtn').style.display = ''
}

function pause() {
    clearInterval(Interval);
    document.getElementById('Startbtn').style.display = ''
    document.getElementById('Pausebtn').style.display = 'none'


    
   
}

function Restart() {

    pause()
    Minute = 0;
    Second = 0;
    MilliSec = 0;

    displayMint.innerHTML = Minute;
    displaySec.innerHTML = Second;
    displayMilliSec.innerHTML = MilliSec;
    document.getElementById('Resetbtn').style.display = 'none'

}