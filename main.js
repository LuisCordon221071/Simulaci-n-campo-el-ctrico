

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





//Cuadrícula
let cx = 0;
let cy = 0;
    
//Líneas en x
for (let i = 0; i < 170; i++) {
    cx = cx+20
    c.beginPath();
    c.moveTo(cx,0);
    c.lineTo(cx,canvas.height);
    c.stroke();
}
//Líneas en x
for (let i = 0; i < 170; i++) {
    cy = cy+20
    c.beginPath();
    c.moveTo(0,cy);
    c.lineTo(canvas.width,cy);
    c.stroke();
}


//Constantes 
const pi = Math.PI
const ep = 8.85*Math.pow(10,-12)
const k = 1/(pi*ep*4)

//Coordenadas de la línea de carga
//Puntos iniciales de la línea de carga
let x_1 = 50
let y_1 = 100
//Punto final de la línea de carga
let x_2 = 70
let y_2 = 185
//Componentes de la línea
let Comx= (x_2-x_1)
let Comy = (y_2-y_1) 
//Pendiente de la línea
let m = Comy/Comx
//Longitud de la línea
let l = Math.sqrt(Math.pow(Comy,2)+Math.pow(Comx,2))
//Diferencial de longitud
let dL = Math.sqrt(1 + (Math.pow(m,2)))
//Longitud, carga y densidad de carga de la líena finita de carga
let Q = 0
let DensQ = Q/l

//Coordenadas de carga puntual
let a = 0
let b = 0


//Dibujo de la línea finita de carga
c.beginPath();
c.moveTo(x_1,y_1);
c.lineTo(x_2,y_2);
c.stroke();


//integral
function integral(){
    
    //y = m*(x-x_1)+y_1
    lambda = Q/l
    dQ= lambda*dL
    
    return l;
}

console.log(integral(1,2,4,6,5,6))
console.log(ep)




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


console.log("Area: "+A_1)
console.log("Area: "+A_2)
console.log("Area: "+A)


