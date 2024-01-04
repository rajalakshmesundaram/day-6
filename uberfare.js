class UberfarePerson{
constructor(ondemandPrice=100,basePrice=50,PricePerKm=20)
{
this.PickPlace=[];
this.DropPlace=[];
this.TypeofVehicle=[]
this.distance=[];
this.ondemandPrice =ondemandPrice
this.basePrice=basePrice
this.PricePerKm =PricePerKm
}
get getPickPlace()
{
return this.PickPlace;
}
get getdropplace()
{
    return this.DropPlace;
}
get getTypeofvehicle()
{
    return this.TypeofVehicle;
}
get getDistance()
{
 return this.distance
}
set setPickdetails(data)
{
this.PickPlace.push(data)
}
set setdropdetails(data)
{
this.DropPlace.push(data)
}
set setvehicledetails(data)
{
this.TypeofVehicle.push(data)
}
set setDistance(data)
{
this.distance.push(data)
}
get getTravelPrice()
{
    let TotalPrice = this.basePrice + (this.distance * this.PricePerKm)
    return TotalPrice;
}
get getondemandPrice()
{
    let DemandPrice = this.ondemandPrice + (this.distance * this.PricePerKm);
    return DemandPrice;
}
}
const person1 = new UberfarePerson;
person1.setPickdetails = "chennai Ramapuram"
person1.setdropdetails =" Tambaram"
person1.setvehicledetails = "Auto"
person1.setDistance = 25
console.log("Travel details of customer =>",person1.PickPlace,person1.DropPlace,person1.TypeofVehicle,person1.distance)
console.log("Price Details of Travel customer =>",person1.getTravelPrice," , ",person1.getondemandPrice)