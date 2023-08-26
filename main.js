

//Seguimiento del punto al cursor
var cursor = document.getElementById("cursor")
    document.addEventListener("mousemove", function (params) {
        var x = params.clientX;
        var y = params.clientY;
        cursor.style.top=y+"px";
        cursor.style.left=x+"px";

    })


//Canvas
var canvas = document.querySelector("canvas");

//Modificar canvas al tamaño de la pantalla
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Variable para usar canvas
var c = canvas.getContext("2d");

//Rectangulo: Linea finita de carga
c.fillRect(100,250,10,100)

c.beginPath();
c.moveTo(0,0);
c.lineTo(200,125/7);
c.stroke();

//Cuadrícula
let cx = 0;
let cy = 0;

for (let i = 0; i < 170; i++) {
    cx = cx+20
    c.beginPath();
    c.moveTo(cx,0);
    c.lineTo(cx,751);
    c.stroke();
}

for (let i = 0; i < 170; i++) {
    cy = cy+20
    c.beginPath();
    c.moveTo(0,cy);
    c.lineTo(1800,cy);
    c.stroke();
}


//Constantes y variables de la integral
const pi = Math.PI
const ep = 8.85*Math.pow(10,-12)
const k = 1/(pi*ep*4)
let Q = 0
let x_1 = 0
let y_1 = 0
let x_2 = 5
let y_2 = 0
let a = 0
let b = 0
let l = (1)
let DensQ = Q/l


//integral
function integral(cx,cy,){
    cy=(y_2-y_1)
    cx=(x_2-x_1)
    m = cy/cx
    l = Math.sqrt(Math.pow(cx,2)+Math.pow(cy,2))
    dL=Math.sqrt(1+Math.pow(m,2))
    //y = m*(x-x_1)+y_1
    lambda = Q/l
    dQ= lambda*dL
    
    return l;
}



console.log(integral(1,2,4,6,5,6))
console.log(ep)

let A=0
let ccx = x_2-x_1;
let dx = 0.0001
let punto = 0
let fx = 0
let CantidadDeRectangulos = ccx/dx

for (let i = 0; i < CantidadDeRectangulos; i++) {
    A= (1/(punto+1))*dx + A
    punto = dx + punto
}


console.log(CantidadDeRectangulos)
console.log("Area: "+A)
