let descuento = parseInt(prompt("Ingrese el descuento que desea hacer sobre el valor de los precios (en porcentaje)"))
let precio1 = 130000
let precio2 = 220000
let precio3 = 535000
let porcentaje

if (descuento < 1 || descuento > 100 || isNaN(descuento)) {
    document.write(`<body class="background"><div class="centrado">
    <h1 class="error">¡Error! Debe ingresar un número entre 1 y 100 para hacer el descuento.</h1>
    <h1 class="error">Actualice la pagina para volver a intentarlo.</h1>
    <div class="error_img"><img src="error.png"></div>
    </div></body>`)
} else {
    document.write(
        `<h1>Hard.js</h1>
        <div class="contenedor">
            <div class="card card1">
                <img src="1660ti.jpg" alt="1660">
                <h2>GTX 1660 Ti GamingX <br> <del> $130.000 </del> <span>$${funcDescuento(precio1, descuento)}</span> </h2>
            </div>
    
            <div class="card card2">
                <img src="3060.jpg" alt="3060">
                <h2>RTX 3060 <br> <del> $220.000 </del> <span>$${funcDescuento2(precio2, descuento)}</span> </h2>
            </div>
    
            <div class="card card3">
                <img src="3090.jpg" alt="1660">
                <h2>RTX 3090 SuprimX <br> <del> $535.000 </del> <span>$${funcDescuento3(precio3, descuento)}</span></h2>
            </div>
        </div>`
    )
}

function funcDescuento(precio1, descuento) {
    porcentaje = precio1 * descuento / 100
    return precio1 - porcentaje
}

function funcDescuento2(precio2, descuento) {
    porcentaje = precio2 * descuento / 100
    return precio2 - porcentaje
}

function funcDescuento3(precio3, descuento) {
    porcentaje = precio3 * descuento / 100
    return precio3 - porcentaje
}
