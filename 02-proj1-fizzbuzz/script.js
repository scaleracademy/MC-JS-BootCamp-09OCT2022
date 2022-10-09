const btnPrint = document.getElementById("btnPrint");
const inpNum = document.getElementById("inpNum");
const listNum = document.getElementById("listNum");

// DOM = document object model


btnPrint.onclick = function() {
  const start = Date.now()
  const num = parseInt(inpNum.value);
  
  let data = ''
  for (let i = 1; i <= num; i++) {
    data += `<li>${i}</li>`;
  }
  listNum.innerHTML = data;

  const end = Date.now()
  console.log("time taken = " + (end - start))
}