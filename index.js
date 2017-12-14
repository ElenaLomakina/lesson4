
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


// -- add 1 to each element of array ---------------------------------------

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