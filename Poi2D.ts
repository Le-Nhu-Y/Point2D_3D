export class Poi2D{
    x: number=1.0;
    y: number=1.0
    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }
    getX(): number {
        return this.x;
    }
    setX(x: number){
        this.x = x;
    }
    getY(): number {
        return this.y;
    }
    setY(y: number){
        this.y = y;
    }
}