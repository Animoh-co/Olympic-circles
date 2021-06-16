canvas = document.getElementById("Mycanvas");
ctx= canvas.getContext("2d");

color="blue";

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 3;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth= 5;
ctx.arc(250, 210, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "black";
ctx.lineWidth= 5;
ctx.arc(340, 215, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "red";
ctx.lineWidth= 5;
ctx.arc(430, 215, 50, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle= "yellow";
ctx.lineWidth= 5;
ctx.arc(300, 285, 50, 0, 2*Math.PI);
ctx.stroke();


ctx.beginPath();
ctx.strokeStyle= "green";
ctx.lineWidth= 5;
ctx.arc(385, 285, 50, 0, 2*Math.PI);
ctx.stroke();


