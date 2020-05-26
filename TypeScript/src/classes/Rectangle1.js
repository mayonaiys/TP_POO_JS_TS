var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Classe
var Rectangle1 = /** @class */ (function (_super) {
    __extends(Rectangle1, _super);
    //Constructeur
    function Rectangle1(width, height) {
        var _this = _super.call(this) || this;
        _this.setWidth(width);
        _this.setHeight(height);
        return _this;
    }
    //Méthodes
    Rectangle1.prototype.getWidth = function () { return this.width; };
    Rectangle1.prototype.getHeight = function () { return this.height; };
    Rectangle1.prototype.setWidth = function (width) { this.width = width; };
    Rectangle1.prototype.setHeight = function (height) { this.height = height; };
    Rectangle1.prototype.draw1 = function (context) {
        context.beginPath();
        context.rect(this.getCenter1().getX(), this.getCenter1().getY(), this.getWidth(), this.getHeight());
        context.stroke();
    };
    return Rectangle1;
}(Shape1));
