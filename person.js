class Person {
    constructor(firstName,lastName,age,country,city)
    {
this.firstName = firstName;
this.lastName = lastName;
this.age = age;
this.country=country
this.city=city
this.skills=[];
    }
    get getFullName()
    {
        const fullname = this.firstName +''+this.lastName
        return fullname;
    }
    get getskills()
    {
        return this.skills;
    }
    set setskill(skill)
    {
        this.skills.push(skill)
    }

}
const newPerson = new Person("Rajalakshme","Sundaram",35,"India","Chennai")
const newPerson1 = new Person("Venkatesh","Rajagopal",39,"India","Chennai")
const newPerson2 = new Person("Niketan raj","Venkatesh",22,"indian","Chennai")

newPerson.setskill = "Java Script"
newPerson.setskill = "HTML"
newPerson.setskill ="CSS"

newPerson1.setskill ="People Management"
newPerson1.setskill="Positive Attitude"
newPerson1.setskill ="High Logical Skills"

newPerson2.setskill="Foot Ball"
newPerson2.setskill="Chess"
newPerson2.setskill="Running"

console.log("Person Full Name =",newPerson.getFullName,"Age=",newPerson.age,"Person Country =",newPerson.country,"Person City =",newPerson.city,"Person Skills=",newPerson.getskills)
console.log("Person Full Name =",newPerson1.getFullName,"Age=",newPerson1.age,"Person Country =",newPerson1.country,"Person City =",newPerson1.city,"Person Skills=",newPerson1.getskills)
console.log("Person Full Name =",newPerson2.getFullName,"Age=",newPerson2.age,"Person Country =",newPerson2.country,"Person City =",newPerson2.city,"Person Skills=",newPerson2.getskills)