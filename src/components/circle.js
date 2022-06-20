// import using require
const shapeClass = reuire('./shape');
// declare class
class Circle extends shapeClass{
    calculateArea(length){
        return this.length * this.length;
    };
}
// export class using module.exports
module.export = shapeClass;