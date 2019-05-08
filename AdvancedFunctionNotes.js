var persons = [

    {name:"Henry",age:22},
    {name:"Jeff",age:32},
    {name:"Ryan",age:17},
    {name:"Arthur",age:42},


];
//take in object map name data into list of names, return names
var nameList = (people_object) => people_object.map((personList)=> personList.name);

function listNames(people_object) {

    var list = people_object.map((personList) => { return personList.name});
    return list;

}

console.log(listNames(persons));

var num1 = 4;
var num2 = 6;

var multiplyier = (a,b)=> a * b;

console.log(multiplyier(num1,num2));

//.filter

var numbers = [1,2,3,4,5,6,7,8,9,10];
//function evenNumbers(numberList) { var evens = numberList.filter( function (evenNumberList){return evenNumberList % 2 === 0})}
var evenNumbers = (numberList) => numberList.filter((evenNumberList) => evenNumberList % 2 === 0 );

console.log("evens = " + evenNumbers(numbers));

//.forEach

var doubles = [];
console.log("numbers = " + numbers);
numbers.forEach((ValueAtPos) => {doubles.push(ValueAtPos * 2);});
console.log(doubles); 

//default Values
 function numMulti(a = 1, b = 1){

        return a * b;

 }

 console.log("2 * 3 = " +  numMulti(4,8));


 //defaults and objects

 var daves_Account = {
    canSpend : true,
    balance : 100
    };

function transaction(amount, account = daves_Account) {

        if (amount > account.balance && account.canSpend){return "Not authorized"}
        else (account.balance -= amount)

        if (account.balance <= 0){account.canSpend = false}


}

//arguments and ...num

function multiply(plier,...nums){

    console.log("arguments = " , arguments);
    return nums.map((n) => n * plier);
    
}

console.log(multiply(7, 4, 8, 2, 6, 3));

//object constructor
function Car(make,model,year){

    this.make = make;
    this.model = model;
    this.year = year;

}

var mikesCar = new Car("Toyota","prius",2006);

console.log(mikesCar);

//this and set interval

function timeStep (time){

    this.time = time;
    setInterval(() => {
        this.time -= 1;
        console.log(this.time);
    },1000);


};

timeStep(20);


 
