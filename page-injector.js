// document.getElementsByTagName('head').appendChild('<link rel="stylesheet" href="errorbutton.css">');
// document.head.innerHTML += '<link rel="stylesheet" href="errorbutton.css">';
// const style = document.getElementById('style');
// style = null;

document.head.innerHTML += '<style>* {margin: 0;padding: 0;box-sizing: border-box;}@keyframes buttton {0% {opacity: 1;}66% {opacity: 0;}90% {opacity: 1;}}@keyframes textButton {0% {font-size: 30px;border-color: red;}66% {font-size: 10px;border-style: none;}100% {font-size: 30px;border-color: red;}}body {width: 100%;height: 100vh;background-color: transparent;}marquee {height: 100vh;}#button-for-error {animation-name: buttton;animation-duration: 10s;animation-iteration-count: infinite;}button {font-family: impact;width: 80px;height: 60px;font-size: 30px;color: red;background-color: transparent;animation-name: textButton;animation-duration: 1s;animation-iteration-count: infinite;</style>';
document.body.innerHTML += '<marquee behavior="alternate" scrollamount="30"><marquee behavior="alternate" scrollamount="30" direction="down"><div id="button-for-error"><button id="error-button">ERROR</button></div></marquee></marquee>';
// document.body.innerHTML += '<marquee behavior="alternate" scrollamount="30" style="errorbutton.css"><marquee behavior="alternate" scrollamount="30" direction="down" style="errorbutton.css"><div id="button-for-error" style="errorbutton.css"><button id="error-button" style="errorbutton.css">ERROR</button></div></marquee></marquee>';
// document.body.innerHTML += '<marquee behavior="alternate" scrollamount="30" style="errorbutton.css"><marquee behavior="alternate" scrollamount="30" direction="down" style="errorbutton.css"><div id="button-for-error" style="errorbutton.css"><button id="error-button" style="errorbutton.css">ERROR</button></div></marquee></marquee>';
// document.body.innerHTML += '<marquee behavior="alternate" scrollamount="30" style="errorbutton.css"><marquee behavior="alternate" scrollamount="30" direction="down" style="errorbutton.css"><div id="button-for-error" style="errorbutton.css"><button id="error-button" style="errorbutton.css">ERROR</button></div></marquee></marquee>';
// document.body.innerHTML += '<marquee behavior="alternate" scrollamount="30"><marquee behavior="alternate" scrollamount="30" direction="down"><div id="button-for-error"><button id="error-button">ERROR</button></div></marquee></marquee>';
document.body.innerHTML += '<div id="overlay"></div>';
document.head.innerHTML += '<style> overlay{position: fixed; display: none; width: 100%; height: 100%; top:0; left:0; right:0; bottom:0; background-color: rgba(0,0,0,0.2); z-index:2; cursor:pointer;}</style>';
// var styleInjector = function (param){
//     var link = document.createElement('link');
//     link.rel = "stylesheet";
//     document.head.appendChild(link);
//     link.href="errorbutton.css";
// }

// var button = document.getElementById('error-button');
// button.style = "errorbutton.css";

var div = document.getElementById("overlay");
div.innerHTML += '<marquee behavior="alternate" scrollamount="30"><marquee behavior="alternate" scrollamount="30" direction="down"><div id="button-for-error"><button id="error-button">ERROR</button></div></marquee></marquee>';
