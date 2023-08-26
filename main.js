

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

//Líneas en x
for (let i = 0; i < 170; i++) {
    cx = cx+20
    c.beginPath();
    c.moveTo(cx,0);
    c.lineTo(cx,751);
    c.stroke();
}
//Líneas en y
for (let i = 0; i < 170; i++) {
    cy = cy+20
    c.beginPath();
    c.moveTo(0,cy);
    c.lineTo(1800,cy);
    c.stroke();
}


//Constantes 
const pi = Math.PI
const ep = 8.85*Math.pow(10,-12)
const k = 1/(pi*ep*4)

//Coordenadas de la línea de carga
//Puntos iniciales de la línea de carga
let x_1 = 5
let y_1 = 0

//Punto final de la línea de carga
let x_2 = 7
let y_2 = 0

//Coordenadas de carga puntual
let a = 0
let b = 0

//Longitud, carga y densidad de carga de la líena finita de carga
let l = (1)
let Q = 0
let DensQ = Q/l


//integral
/*
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
*/



//Suma de Riemann 
let A_1=0
let A_2=0
let A = 0
const dx = 0.0001
let punto = 0
let punto1 = 0
let fx = 0
let CantidadDeRectangulos1 = x_2/dx
let CantidadDeRectangulos2 = x_1/dx

for (let i = 0; i < CantidadDeRectangulos1; i++) {
    A_1= (1/(punto+1))*dx + A_1
    punto = dx + punto
}


for (let i = 0; i < CantidadDeRectangulos2; i++) {
    A_2 = (1/(punto1+1))*dx + A_2
    punto1 = dx + punto1
}


A = A_1-A_2 

console.log(CantidadDeRectangulos1)
console.log(CantidadDeRectangulos2)
console.log("Area: "+A_1)
console.log("Area: "+A_2)
console.log("Area: "+A)
