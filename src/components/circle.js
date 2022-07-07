// import using require
const Shape = require('./shape');

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
module.exports = Circle;
