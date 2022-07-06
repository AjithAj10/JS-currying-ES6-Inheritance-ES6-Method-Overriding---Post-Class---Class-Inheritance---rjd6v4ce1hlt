// import using require
const shapeClass = require('./shape');
// declare class
class Circle extends shapeClass{
    constructor(){

    this.transform = 5;
    }
    calculateArea(){
       
    };   
}
// export class using module.exports
module.export = shapeClass;
