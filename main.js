

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
const dx = 0.0001

//Coordenadas de la línea de carga
//Puntos iniciales de la línea de carga
let x_1 = 100
let y_1 = 0
//Punto final de la línea de carga 
let x_2 = 150
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
let b = canvas.height -0


//Dibujo de la línea finita de carga
c.beginPath();
c.moveTo(x_1, canvas.height-y_1);
c.lineTo(x_2, canvas.height-y_2);
c.stroke(); 



//integral
function integral(){
    
    //y = m*(x-x_1)+y_1
    
    
    return l;
}



//Suma de Riemann 
let A_1=0
let A_2=0
let A = 0
//Varible independiente
let punto = 0

let CantidadDeRectangulos1 = x_2/dx
let CantidadDeRectangulos2 = x_1/dx
for (let i = 0; i < CantidadDeRectangulos1; i++) {
    A_1= (k*DensQ*dL*dx*(punto-a))/(Math.pow(Math.sqrt(Math.pow(y-b,2)+Math.pow(punto-a,2))),3) + A_1
    punto = dx + punto
}
punto = 0
for (let i = 0; i < CantidadDeRectangulos2; i++) {
    A_2 = (k*DensQ*dL*dx*(punto-a))/(Math.pow(Math.sqrt(Math.pow(y-b,2)+Math.pow(punto-a,2)),3)) + A_2
    punto = dx + punto
}
punto = 0
A = A_1-A_2 


console.log("Area 1 : "+A_1)
console.log("Area 2 : "+A_2)
console.log("Area : "+A)


