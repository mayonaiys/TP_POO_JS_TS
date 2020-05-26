function Point(x, y){
    this.setX(x);
    this.setY(y);
}

Point.prototype.getX = function() { return this.x; }
Point.prototype.getY = function() { return this.y; }
Point.prototype.setX = function(x) { this.x = x; }
Point.prototype.setY = function(y) { this.y = y; }
   