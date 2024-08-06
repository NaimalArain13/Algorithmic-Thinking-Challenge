import { Shape } from "./f1";

export class Circle implements Shape {
    name: string;
    area: number;
    radius:number;
    constructor(name:string,area:number,radius:number){
        this.name=name;
        this.area=area;
        this.radius=radius;
    }
    calculateArea(){
       let area = 3.14*(this.radius)*this.radius
       return area
       
    };
    
}

