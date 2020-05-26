function drawShapes1(shapes, context) {
    for (var _i = 0, shapes_1 = shapes; _i < shapes_1.length; _i++) {
        var shape = shapes_1[_i];
        shape.draw1(context);
    }
}
function main1() {
    var circle = new Circle1(50);
    circle.setCenter1(new Point1(100, 75));
    var rectangle = new Rectangle1(150, 100);
    rectangle.setCenter1(new Point1(150, 30));
    var shapes = [circle, rectangle];
    var canvas = document.getElementById("drawings");
    var context = canvas.getContext("2d");
    drawShapes1(shapes, context);
}
main1();
