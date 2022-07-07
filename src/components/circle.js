// import using require
const Shape = require('.shape');
console.log(Shape);
// declare class
class Circle extends Shape{
//     constructor(){

//     
//     }
    calculateArea(){
        this.transform = 5;
    };   
}
// export class using module.exports
module.export = Circle;
