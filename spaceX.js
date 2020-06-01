const url = "https://api.spacexdata.com/v2/launchpads";

var data = d3.json(url).then(receivedData  => console.log(receivedData.location));
var data = d3.json(url).then(function (receivedData) {
    return receivedData;
});
console.log(data);
var getLatitude = data.map(function(lat){
    return lat.location.getLatitude;
});
console.log(getLatitude);

