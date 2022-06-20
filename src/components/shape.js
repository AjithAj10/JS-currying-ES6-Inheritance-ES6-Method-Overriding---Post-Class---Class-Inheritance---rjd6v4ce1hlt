// declare class
class Shape{
    drawShape(height,width){
        this.height = height;
        this.width = width;
    };
    calculateArea(height,width){
        return this.height * this.width;
    };
     color = "red";
}
// export class using module.exports
module.export = Shape