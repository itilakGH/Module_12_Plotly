var numbers = [0,2,4,6,8];
var added = numbers.map(function(add5){
    return add5+5;
});
add5


cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

cityPop = cities.map(function(pop){
    return pop.population;
});
console.log(cityPop);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var nameS = words.filter(function(S) {
    return S[0]=== "s";
});

console.log(nameS);
