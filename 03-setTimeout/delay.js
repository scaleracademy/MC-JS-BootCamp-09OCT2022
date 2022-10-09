let btnCount = document.getElementById("btnCount");
let btnWait = document.getElementById("btnWait");

let divCounter = document.getElementById("divCounter");
let divWait = document.getElementById("divWait");

let count = 0;

btnWait.onclick = function() {
  // 1. print "Waiting" 
  divWait.innerText = "Waiting";
  // 2. wait for 5 seconds 
  // 3. print "Done waiting"
  setTimeout(function() {
    divWait.innerText = "Done Waiting";
  }, 5000)

}


btnCount.onclick = function() {
  count++;
  divCounter.innerText = count;
}