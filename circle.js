class Circle {
    constructor(radius = 1 , colour ="red")
    {
this.radius=radius;
this.colour=colour;
    }
    get newRadius(){
return this.radius
    }
    set newsetRadius(RadiusValue)
    {
        
        this.radius =RadiusValue;
    }
    get newColour()
    {
        return this.colour
    }
    set newsetColour(colourname){
        this.colour=colourname
    }
    get areaCircle()
    {
        return (Math.PI * Math.pow(this.radius,2)).toFixed(2)
    }
    get areaCircumference()
    {
        return (2*Math.PI*this.radius).toFixed(2)
    }
    toString() {
        return `Circle (radius=${this.radius}, color=${this.colour})`;
    }

}
const newcircle = new Circle;

newcircle.newsetRadius =7;
newcircle.newsetColour ="blue"
console.log(newcircle.toString());
console.log("Area of new circle is :" ,newcircle.areaCircle,"Circumference of new Circle is :",newcircle.areaCircumference);