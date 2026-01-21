

function calculateTotal() {
 g1 = parseFloat(document.getElementById('g-1').value);
 g2 = parseFloat(document.getElementById('g-2').value);
 g3 = parseFloat(document.getElementById('g-3').value);
 let Total = g1 + g2 + g3;
  document.getElementById('result').innerText = `The Total Grocery Amount is: ${Total}`;
}

