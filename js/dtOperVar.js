//======================= EXERCISE 1 =======================\\

var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?

var d = "hello";
var e = false;

d++;
e++;

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

var price = 2.7;
price.toFixed(2);

var price = "2.7";
price.toFixed(2);

isNaN(0)

isNaN(1)

isNaN("")

isNaN("string")

isNaN("0")

isNaN("1")

isNaN("3.145")

isNaN(Number.MAX_VALUE)

isNaN(Infinity)

isNaN("true")

isNaN(true)

isNaN("false")

isNaN(false)

// to illustrate why the isNaN() function is needed:
NaN == NaN


!true

!false

!!true

!!false

!!0

!!-0

!!1

!!-1

!!0.1

!!"hello"

!!""

!!''

!!"false"

!!"0"




//======================= EXERCISE 2 =======================\\

var sample = "Hello Codeup";
sample.length;
sample.toUpperCase();
sample.toLowerCase();

sample = "Hello Codeup " + "Students";
sample.replace("Students", "Class");
sample.indexOf("c");
sample.indexOf("C");
sample.indexOf("C".substring(1, 5));



//======================= EXERCISE 3 =======================\\

// lm = "The Little Mermaid";
// bb = "Brother Bear";
// h = "Hercules";

function moviePrice() {
    let lm = 3;
    let bb = 5;
    let h = 1;
    let price = 3;
    let totalPrice = (lm * price) + (bb * price) + (h * price);
    console.log(totalPrice);
}
moviePrice();


function paycheck() {
    let g = 400 * 6;
    let a = 380 * 4;
    let f = 350 * 10;
    let p = g + a + f;
    console.log(p);
}
paycheck();


function enrollment() {
    let classCap = 120;
    let studentsInClass = 0;
    let scheduleConflict = false;
    if (studentsInClass < classCap && scheduleConflict === false) {
        console.log('Available');
    }
}
enrollment();


function discount() {
    let numberOfItems = 0;
    let premiumMem = false;
    if (numberOfItems >= 2 || premiumMem === true) {
        console.log('You get a 15% discount!');
    }
}
discount();


//======================= EXERCISE 4 =======================\\

function passwordWorks() {
    var username = 'codeup';
    var password = 'notastrongpassword';
    if (username.length() < 5 && username === password
        && username.length > 20
        && username.trim()
        && password.trim()) {
        console.log('Password okay');
    }
}
passwordWorks();


