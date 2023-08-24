var cursor = document.getElementById("cursor")
    document.addEventListener("mousemove", function (params) {
        var x = params.clientX;
        var y = params.clientY;
        cursor.style.top=y+"px";
        cursor.style.left=x+"px";

    })

function integral(x_1,y_1,x_2,y_2,a,b){
    cy=(y_2-y_1)
    cx=(x_2-x_1)
    m = cy/cx
    l = Math.sqrt(Math.pow(cx,2)+Math.pow(cy,2))
    
    return l;
}


console.log(integral(1,2,4,6,5,6))