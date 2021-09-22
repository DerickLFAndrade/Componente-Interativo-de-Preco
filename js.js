var slider = document.getElementById("myRange");
var fm3 = document.getElementById("desconto")
var output = document.getElementById("texto4");
var output2 = document.getElementById("texto5");
var mes = document.getElementById("texto5");
var view = document.getElementById("texto3")
var bot = document.getElementById("switch-shadow")
//output.innerHTML = slider.value; // Display the default slider value
var slider2 = document.getElementById("myRange2");
// Update the current slider value (each time you drag the slider handle)
var validador = 0

function iniciar() {
  
  
 
this.slider.oninput()
  
  if (slider.value == 250) {
    output.innerHTML = 'R$ 0,00'
    mes.style.marginLeft = '125px'
    view.innerHTML = '<b>0 VIEWS<b>'
   
  }
 

}
if (validador == 0) {
  bot.addEventListener("click", barra2)
slider.oninput = function () { //função slider 1
  validador = 1
  console.log(validador)
  slider2.oninput = false
  slider2.style.visibility = 'hidden'

  var valor1 = slider.value
  var valor1N = Number(valor1)

  output.innerHTML = `${valor1N.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`


  if (slider.value == 0) {
    mes.style.marginLeft = '120px'

  } else if (slider.value == 50) {
    mes.style.marginLeft = '120px'
  } else if (slider.value >= 50 && slider.value <= 1000) {
    mes.style.marginLeft = '120px'
  } else if (slider.value >= 1000) {
    mes.style.marginLeft = '120px'
  }

  if (slider.value == 50) {
   view.innerHTML = '<b>10K DE VIEWS<b>'
  } else if (slider.value == 100) {
    view.innerHTML = '<b>20K DE VIEWS<b>'
  } else if (slider.value == 150) {
    view.innerHTML = '<b>30K DE VIEWS<b>'
  } else if (slider.value == 200) {
    view.innerHTML = '<b>40K DE VIEWS<b>'
  } else if (slider.value == 250) {
    view.innerHTML = '<b>50K DE VIEWS<b>'
  } else if (slider.value == 300) {
    view.innerHTML = '<b>60K DE VIEWS<b>'
  } else if (slider.value == 350) {
    view.innerHTML = '<b>70K DE VIEWS<b>'
  } else if (slider.value == 400) {
    view.innerHTML = '<b>80K DE VIEWS<b>'
  } else if (slider.value == 450) {
    view.innerHTML = '<b>90K DE VIEWS<b>'
  } else if (slider.value == 500) {
    view.innerHTML = '<b>100K DE VIEWS<b>'
  } else if (slider.value == 0) {
    view.innerHTML = '<b>0 VIEWS<b>'
  }
 
}
}




function barra2() { //slider2
  
  validador = 0
  if (validador == 0) {
  console.log(validador)
  fm3.style.color = 'Red'
  output2.innerHTML = '/ano'

  slider.oninput = false
  slider.style.visibility = 'hidden'

  slider2.oninput = true
  slider2.style.visibility = 'visible'


  slider2.oninput = function () {
    var valor1 = slider2.value
    var valor1N = Number(valor1)
    output.innerHTML = `${valor1N.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`
    if (slider2.value == 0) {
      mes.style.marginLeft = '120px'
      
    } else if (slider2.value >= 449 && slider2.value <= 899) {
      mes.style.marginLeft = '120px'
    } else if (slider2.value >= 899 && slider2.value <= 1000) {
      mes.style.marginLeft = '120px'
    } else if (slider2.value >= 1349) {
      mes.style.marginLeft = '120px'
    }

    if (slider2.value == 450) {
      view.innerHTML = '<b>120K DE VIEWS/ano<b>'
    } else if (slider2.value == 900) {
      view.innerHTML = '<b>240K DE VIEWS/ano<b>'
    } else if (slider2.value == 1350) {
      view.innerHTML = '<b>360K DE VIEWS/ano<b>'
    } else if (slider2.value == 1800) {
      view.innerHTML = '<b>480K DE VIEWS/ano<b>'
    } else if (slider2.value == 2250) {
      view.innerHTML = '<b>600K DE VIEWS/ano<b>'
    } else if (slider2.value == 2700) {
      view.innerHTML = '<b>720K DE VIEWS/ano<b>'
    } else if (slider2.value == 3150) {
      view.innerHTML = '<b>840K DE VIEWS/ano<b>'
    } else if (slider2.value == 3600) {
      view.innerHTML = '<b>960K DE VIEWS/ano<b>'
    } else if (slider2.value == 4050) {
      view.innerHTML = '<b>1080KK DE VIEWS/ano<b>'
    } else if (slider2.value == 4500) {
      view.innerHTML = '<b>1200KK DE VIEWS/ano<b>'
    } else if (slider2.value == 0) {
      view.innerHTML = '<b>0 VIEWS<b>'
    }


  }
    bot.addEventListener("click", reload)
  validador = 1
  console.log(validador)
  }
 bot.addEventListener('click', reload)
}

function views() {
 
  }

 function reload () {
  location.reload()
 
}


iniciar()

console.log(validador)