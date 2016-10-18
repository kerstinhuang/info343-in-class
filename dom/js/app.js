//put interpreter into strict mode
"use strict";

console.log(numeral(BABYNAMES.length).format("0,0")); //number of babynames

// returning function from a function is called a closure
// takes in paramenter sex - takes in M or F
function compareSex(sex){
    // returns true or false
    return function(record) {
        // returns gender
        return sex == record.sex;
    }
}

var females = BABYNAMES.filter (compareSex ("F"));
console.log (females.length);

var males = BABYNAMES.filter (compareSex ("M"));
console.log (males.length);

var currentSet = females;
var tbody = document.querySelector("tbody");

function render(){
    // forEach = iterate over an array passing in a function that takes in a record or time, inner function is called once for each record in the set
    currentSet.forEach (function(record){
        // creates tr element (new table row)
        var tr = document.createElement("tr")
        // creates new table cell
        var td = document.createElement("td")
        // sets content in cell to name 
        td.textContent = record.name;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = record.sex;
        tr.appendChild(td);

        td = document.createElement("td");
        td.textContent = record.count;
        tr.appendChild(td);

        tbody.appendChild(tr);
    })
}

render();