const btnPrint = document.getElementById("btnPrint");
const inpNum = document.getElementById("inpNum");

// DOM = document object model


btnPrint.onclick = function() {
  const num = parseInt(inpNum.value);
  for (let i = 1; i <= num; i++) {
    console.log(i)
  }
}