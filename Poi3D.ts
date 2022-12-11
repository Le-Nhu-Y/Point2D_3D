
import {Poi2D} from "./Poi2D";

export class Poi3D extends Poi2D{
    z:number=1.0;
    constructor(x:number, y:number, z:number) {
        super(x,y);
        this.z=z;
    }
    getZ():number {
        return this.z;
    }
    setZ(z:number) {
        this.z=z;
    }
}