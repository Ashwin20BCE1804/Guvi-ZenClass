
let pi=3.1412;
class circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
        }
        getradius(){
        return this.radius;
        }
        getcolor(){
            return this.color;
            
        }
        getarea(){
          return pi*this.radius*this.radius;
        }
        getcircumference(){
            return 2*pi*this.radius;
        }
}
let a=new circle(1.0,"red");
console.log(a.getradius())
console.log(a.getcolor())
console.log(a.getarea())
console.log(a.getcircumference())