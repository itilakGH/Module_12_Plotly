// Sort and Select the Cities
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 -b.Increase_from_2016).reverse();
var topSevenCities = sortedCities.slice(0,7);

// Create Arrays of City Names and Growth Figures
var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityGrowths = topSevenCities.map(city => parseInt(city.Increase_from_2016));

// Create a Bar Chart with the Arrays
var trace = {
    x: topSevenCityNames,
    y: topSevenCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: { title: "City" },
    yaxis: { title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);
