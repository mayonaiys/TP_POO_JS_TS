//Classe
class Rectangle1 extends Shape1{
    //Attributs
    private width : number;
    private height : number;

    //Constructeur
    constructor(width : number, height : number){
        super();
        this.setWidth(width);
        this.setHeight(height);
    }

    //Méthodes
    getWidth() : number { return this.width; }
    getHeight() : number { return this.height; }
    setWidth(width : number) : void { this.width = width; }
    setHeight(height : number) : void { this.height = height; }
    draw1(context) : void {
        context.beginPath();
        context.rect(this.getCenter1().getX(),this.getCenter1().getY(),this.getWidth(),this.getHeight());
        context.stroke();
    }
}