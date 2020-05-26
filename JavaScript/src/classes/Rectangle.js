function Rectangle(width,height){
    this.setWidth(width);
    this.setHeight(height);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.getWidth = function() { return this.width; }
Rectangle.prototype.getHeight = function() { return this.height; }
Rectangle.prototype.setWidth = function(width) { this.width = width; }
Rectangle.prototype.setHeight = function(height) { this.height = height; }
Rectangle.prototype.draw = function(context) {
    context.beginPath();
    context.rect(this.getCenter().getX(),this.getCenter().getY(),this.getWidth(),this.getHeight());
    context.stroke();
}