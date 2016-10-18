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

// sorting 

// if number is -, rec1 comes before rec2, if 0, they're next to each other, and if + , rec 1 is after rec 2 --> ascending
function compareByCount(rec1, rec2){
    return rec1.count - rec2.count;
}

function descending(comparator){
    return function(rec1, rec2) {
        return -(comparator(rec1, rec2));
    }
}

var females = BABYNAMES.filter (compareSex ("F"));
// to order ascending, get rid of the descending function
females.sort(descending(compareByCount));
console.log (females.length);

var males = BABYNAMES.filter (compareSex ("M"));
console.log (males.length);

var tbody = document.querySelector("tbody");

// iterate set of recods
function render(records){
    //clears the page
    tbody.innerHTML = "";
    // forEach = iterate over an array passing in a function that takes in a record or time, inner function is called once for each record in the set
    records.forEach (function(record){
        // creates tr element (new table row)
        var tr = document.createElement("tr")
        // class for making each color different "sex-f"/"sex-m"
        tr.classList.add("sex-" + record.sex.toLowerCase());
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
    });
}

// passes in full set of data
render(BABYNAMES);

//render(females.slice(0,100)); takes elements from starting index to ending index, top 100 records

var searchInput = document.getElementById("name-search-input");
searchInput.addEventListener("input", function(){
    // console.log("input event"); checks to see if things are working, but comment out after testing
    // returns what's tyyped in
    var query = searchInput.value.toLowerCase();
    // won't start filtering until you type at least 2 letters 
    if (query.length < 2) {
        render (BABYNAMES);
        return;
    }
    // filter through all baby names, so if you back space, babynames come back on the list
    var matches = BABYNAMES.filter(function(record){
        // if any characters match, it'll show up below
        return record.name.toLowerCase().indexOf(query) >=0;
    });
    render(matches);
});

// click on header
var countColHeading = document.getElementById("count-col-header");
countColHeading.addEventListener("click", function() {
    // console.log("click col header!");
    BABYNAMES.sort(descending(compareByCount));
    render(BABYNAMES);
});