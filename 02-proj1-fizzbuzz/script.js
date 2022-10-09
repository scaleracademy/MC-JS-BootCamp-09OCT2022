const btnPrint = document.getElementById("btnPrint");
const inpNum = document.getElementById("inpNum");
const listNum = document.getElementById("listNum");

// DOM = document object model


btnPrint.onclick = function() {
  const start = Date.now()
  const num = parseInt(inpNum.value);
  
  for (let i = 1; i <= num; i++) {
    const li = document.createElement('li')

    let text = ''
    if (i % 3 === 0) text += 'fizz'
    if (i % 5 === 0) text += 'buzz'
    if (text === '') text = i
    
    li.innerText = text
    
    
    listNum.appendChild(li)
  }

  const end = Date.now()
  console.log("time taken = " + (end - start))
}


/**
 * 1
 * 2
 * fizz
 * 4
 * buzz
 * fizz
 * 7
 * 8
 * fizz
 * buzz
 * 11
 * fizz
 * 13
 * 14
 * fizzbuzz
 */