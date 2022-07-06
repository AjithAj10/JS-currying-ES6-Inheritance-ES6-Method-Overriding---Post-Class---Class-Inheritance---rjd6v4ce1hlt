// import using require
ShapeClass = require('./shape');
// declare class
class Circle extends ShapeClass{
    constructor(){

    this.transform = 5;
    }
    calculateArea(){
       
    };   
}
// export class using module.exports
module.export = Circle;
