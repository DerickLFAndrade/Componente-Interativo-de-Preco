var slider = document.getElementById("myRange");
var fm3 = document.getElementById("desconto")
var output = document.getElementById("texto4");
var output2 = document.getElementById("texto5");
var mes = document.getElementById("formatada");
var bot = document.getElementById("switch-shadow")
//output.innerHTML = slider.value; // Display the default slider value
var slider2 = document.getElementById("myRange2");
// Update the current slider value (each time you drag the slider handle)
var validador = 0

function iniciar() {
  bot.addEventListener("click", barra2)
this.slider.oninput()
  if (slider.value == 250) {
    output.innerHTML = 'R$ 0,00'
    mes.style.marginLeft = '440px'
   
  }
 

}

slider.oninput = function () { //função slider 1
  validador = 1
  console.log(validador)
  slider2.oninput = false
  slider2.style.visibility = 'hidden'

  var valor1 = slider.value
  var valor1N = Number(valor1)

  output.innerHTML = `${valor1N.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`


  if (slider.value == 0) {
    mes.style.marginLeft = '440px'

  } else if (slider.value == 50) {
    mes.style.marginLeft = '470px'
  } else if (slider.value >= 50 && slider.value < 1000) {
    mes.style.marginLeft = '490px'
  } else if (slider.value >= 1000) {
    mes.style.marginLeft = '530px'
  }

  
}




function barra2() { //slider2
  
  validador = 0
  console.log(validador)
  fm3.style.color = 'Red'
  output2.innerHTML = '/ano'

  slider.oninput = false
  slider.style.visibility = 'hidden'

  slider2.oninput = true
  slider2.style.visibility = ''


  slider2.oninput = function () {
    var valor1 = slider2.value
    var valor1N = Number(valor1)
    output.innerHTML = `${valor1N.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    if (slider2.value == 0) {
      mes.style.marginLeft = '440px'

    } else if (slider2.value >= 449 && slider2.value <= 899) {
      mes.style.marginLeft = '490px'
    } else if (slider2.value >= 899 && slider2.value <= 1000) {
      mes.style.marginLeft = '490px'
    } else if (slider2.value >= 1349) {
      mes.style.marginLeft = '530px'
    }




  }
 bot.addEventListener('click', barra1)
}

function barra1() {
 
 
}


iniciar()

console.log(validador)