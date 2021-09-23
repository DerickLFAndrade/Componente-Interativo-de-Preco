<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="favicon-32x32.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="css.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"
        integrity="sha256-eGE6blurk5sHj+rmkfsGYeKyZx3M4bG+ZlFyA7Kns7E=" crossorigin="anonymous"></script>

</head>

<body>


        <div class="container-fluid" id="containerPrincipal">
           
            
                <div class="container-fluid" id="containerSecundario">
                    <img src="logo.jpg" alt="logo" width="250px" id="logo">

            <div id="view">
                <span id="texto3">
                    <h1><b>100K  DE  VIEWS</b></h1>
                </span>
            </div>
            <div id="formatado">
                <span id="texto4">
                    <h1>R$ 0,00</h1>   
                </span>
                <span  id="formatada">
                    <h4 id="texto5">/mês</h4>
                </span>
            </div>
                
            
           
            <div id="contentar">
                <input id="myRange" class="slider" type='range' min="0" max="500" step="50">
                <input id="myRange2" class="slider" type='range' min="0" max="4500" step="450">
            
            </div>
           
            <div id="textoB">
                <span id="fm1">
                    <h4>Faturamento do mês</h4>
                </span>
                <span id="fm2">
                    <h4>Faturamento anual</h4>
                    <div id="fm3">
                        <h4 id='desconto'>25% de desconto</h4>
                    </div>
                </span>
                <div class="switch__container">
                    <input id="switch-shadow" class="switch switch--shadow" type="checkbox" />
                    <label for="switch-shadow" id="label"></label>
                </div>
            </div>
            <br> <br>
            <hr>
            <div id="lista">
                <ul>
                    <img src="icon-check.svg"> Sites ilimitados <br>
                    <img src="icon-check.svg"> Propriedade de dados <br>
                    <img src="icon-check.svg"> Relatórios de e-mail
                </ul>
            </div>
                <a href="pag2.html"><button id="btn" type="button" class="btn btn-primary btn-sm"><b>Começar meu teste gratuito</b></button></a>
            
                </div>
        </div>

    <script src="js.js"></script>
</body>

</html>