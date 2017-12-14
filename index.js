
// -- check number or not, return message ----------------------------------

function isNumber(x) {
    return !isNaN(Number(x)) ? "it is a number" : "it is not a number";
};

// -- return average of array elements -----------------------------------

function averageArr(array) {
    var sum = array.reduce(function(summa,value){
        return summa + value;
    });
    return sum / array.length;
}

// -- exchange of currency ----------------------------------------------------------------------

var cur1 = prompt("Choose the currency you want to exchange: USD, EUR, UAH");
var cur2 = prompt("Choose the currency to which you want to change: USD, EUR, UAH");
var sum1 = prompt("Enter your sum");

var sum2;
var rateUSD = 27.5;
var rateEUR = 32.5;

var change = {
    "USD": {
        "USD": sum1,
        "EUR": sum1 * rateUSD / rateEUR,
        "UAH": sum1 * rateUSD
    },
    "EUR": {
        "USD": sum1 * rateEUR / rateUSD,
        "EUR": sum1 ,
        "UAH": sum1 * rateEUR
    },
    "UAH": {
        "USD": sum1 / rateUSD,
        "EUR": sum1 / rateEUR,
        "UAH": sum1
    }
};

sum2 = Math.round(change [cur1][cur2] * 100) / 100;
alert( sum1 +" " + cur1 + " is " + sum2 + " " + cur2);



// -- add 1 to each element of array ---------------------------------------------------------

function add1ToEach(array) {
    return array.map (function (value2) { return value2 += 1; })
}


//Task 2 -- function getObject() return Object with 2 methods: iterate and value --

function giveObject() {
    var k = 0;
    return {
        iterate: function () {
            k++;
        },
        value: function () {
            return k;
        }
    }
}

var valueObject = giveObject();

valueObject.iterate();
valueObject.iterate();
valueObject.iterate();

var result = valueObject.value();

console.log(result);


//Task 3 -- return number from any value ------------------------------------

function giveNumber(x) {
    return  isNaN(x) ? 0 : Number(x);
}


var value = prompt("Enter value");

var result2 = giveNumber(value);

console.log(result2);