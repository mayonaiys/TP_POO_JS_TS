//Classe
class Point1 {
    //Attributs
    private x : number;
    private y : number;

    //Constructeur
    constructor(x : number, y : number) {
        this.setX(x);
        this.setY(y);
    }

    //Méthodes
    getX() : number { return this.x; }
    getY() : number { return this.y; }
    setX(x : number) : void { this.x = x; }
    setY(y : number) : void { this.y = y; }
}