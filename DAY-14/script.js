function clickMe() {
  alert("hey you submitted your firstname successfully");
}
var chp = document.querySelector('div>p');

function mouseOverEvent() {
  chp.style.backgroundColor = "yellow";
}

function mouseOutEvent() {
  chp.style.backgroundColor = "red";
}
var ish = document.querySelector('#myid');

function keyUp() {
  ish.style.backgroundColor = "yellow";
}
var ish1 = document.querySelector('#myid1');

function keyDown() {
  ish1.style.backgroundColor = "blue";
}

var ish2 = document.querySelector('#myid2');

function iamfoussed() {
  ish2.style.backgroundColor = "crimson";
}

function resized() {
  console.log("you have resized window");
}