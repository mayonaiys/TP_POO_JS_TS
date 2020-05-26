//Classe
class Circle1 extends Shape1{
    //Attributs
    private radius : number;

    //Constructeur
    constructor(radius : number){
        super();
        this.setRadius(radius);
    }

    //Méthodes
    getRadius() : number { return this.radius; }
    setRadius(radius : number) { this.radius = radius; }
    draw1(context) : void {
        context.beginPath();
        context.arc(this.getCenter1().getX(),this.getCenter1().getY(),this.getRadius(),0,2*Math.PI);
        context.stroke();
    }
}