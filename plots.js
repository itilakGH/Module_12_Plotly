Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);
Plotly.newPlot("plotArea2", [{x: [5,10,15,20,25,30,35,40,45,50], y: [1,2,3,4,5,6,7,8,9,10]}])


var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
 };

 var layout = {
     title: "Luncheon Survey",
     xaxis: {title: "Food Option"},
     yaxis: {title: "Number of Respondents"}
 };
 Plotly.newPlot("plotArea3", [trace], layout);


 var drinks = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
 };
 
 var layout = {
     title: "Drinks Statistics",
     xaxis: {title: "Beverages"},
     yaxis: {title: "% of Drinks Ordered"}
 };
 Plotly.newPlot("plotArea4", [drinks], layout);


 var trace2 = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita",
       "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
  };
  var data = [trace2];
  var layout = {
    title: "'Bar' Chart",
  };
  Plotly.newPlot("plotArea5", data, layout);


var scatter1 = {
    x: [1, 2, 3, 4, 5],
    y: [1, 6, 3, 6, 1],
    mode: 'markers+text',
    type: 'scatter',
    name: 'Team A',
    text: ['A1', 'A2', 'A3', 'A4', 'A5'],
    marker: {size:12},
    textposition: 'top center',
    textfont: 'Raleway, sans-serif'
};

var scatter2 = {
    x: [1.5, 2.5, 3.5, 4.5, 5.5],
    y: [4, 1, 7, 1, 4],
    mode: 'markers',
    type: 'scatter',
    name: 'Team B',
    text: ['B-a', 'B-b', 'B-c', 'B-d', 'B-e'],
    marker: { size: 12 }
  };
var data = [scatter1, scatter2];
var layout = {
    xaxis: {range: [0.75, 5.25]},
    yaxis: {range: [0, 8]},
    title: 'Data Label Hover'
};
Plotly.newPlot("plotArea6", data, layout);