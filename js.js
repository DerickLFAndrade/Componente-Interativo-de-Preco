var slider = document.getElementById("myRange");
var output = document.getElementById("texto4");
//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)

slider.oninput = function () {
  var valor1 = slider.value
 var valor1N = Number(valor1)
  output.innerHTML = `${valor1N.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
  
}

/**/