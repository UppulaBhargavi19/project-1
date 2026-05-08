function wish(name){
    console.log(`congratulations ${name}, welcome to PG`);
}
wish("Bhargavi");



function square(n){
    let square;
    square=n*n;
    return square;
}
let res=square(5)
console.log(`square of a number is ${res}`);



function getfullname(firstname,lastname,midlename){
    let fullname;
    fullname=firstname + lastname + midlename;
    return fullname;
}
let fullname=getfullname("Uppula",  "Bhargavi",  "maharaj",);
console.log(`"full name is ${fullname}"`);



function getstudentavg(maths,science,social){
    let avg;
    avg=(maths+science+social)/3;
    return avg;
}
let avg=getstudentavg(90,89,96);
console.log(`"student average is ${avg}"`)



function greetuser(username,age){
    console.log(`"hello ${username}, you are ${age} old, welcome to novotel"`);
 
}
greetuser("Bhargavi",21);



function cube(number){
    let cube;
    cube=number*number*number;
    return cube;
}
let result=cube(5)
console.log(`"cube of a number is ${result}"`);



function powerbillcalculations(numberofunits,priceperunit){
    let totalpowerbill;
    totalpowerbill=numberofunits*priceperunit;
    return totalpowerbill;
}
let powerbill=powerbillcalculations(100,50);
console.log(`"total powerbill is ${powerbill}"`);



function calculateavgoffive(n1,n2,n3,n4,n5){
    let avgoffive;
    avgoffive=(n1+n2+n3+n4+n5)/5;
    return avgoffive;
}
let avgoffive=calculateavgoffive(10,20,30,40,50);
console.log(`"average of five is ${avgoffive}"`);