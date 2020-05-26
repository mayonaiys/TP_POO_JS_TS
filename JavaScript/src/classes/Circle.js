function Circle(radius){
    this.setRadius(radius);
}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.getRadius = function() { return this.radius; }
Circle.prototype.setRadius = function(radius) { this.radius = radius; }
Circle.prototype.draw = function(context) {
    context.beginPath();
    context.arc(this.getCenter().getX(),this.getCenter().getY(),this.getRadius(),0,2*Math.PI);
    context.stroke();
}