//Classe
var Point1 = /** @class */ (function () {
    //Constructeur
    function Point1(x, y) {
        this.setX(x);
        this.setY(y);
    }
    //Méthodes
    Point1.prototype.getX = function () { return this.x; };
    Point1.prototype.getY = function () { return this.y; };
    Point1.prototype.setX = function (x) { this.x = x; };
    Point1.prototype.setY = function (y) { this.y = y; };
    return Point1;
}());
