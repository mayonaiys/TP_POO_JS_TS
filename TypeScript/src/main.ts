function drawShapes1(shapes, context){
    for(let shape of shapes){
    shape.draw1(context);
    }
}
   
function main1(){
    let circle = new Circle1(50);
    circle.setCenter1(new Point1(100,75));
    let rectangle = new Rectangle1(150, 100);
    rectangle.setCenter1(new Point1(150,30));
    let shapes = [circle, rectangle];
    const canvas: any = document.getElementById("drawings");
    const context: CanvasRenderingContext2D= canvas.getContext("2d");
    drawShapes1(shapes, context);
}
main1();