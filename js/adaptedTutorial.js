
//declare map var in global scope
var map;

//function to instantiate the Leaflet map
function createMap(){
    //create the map
    map = L.map('mapid', {
        center: [20, 0],
        zoom: 2
    });

    //add OSM base tilelayer
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //attribution is needed for open sources
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
    }).addTo(map);

    //call getData function
    getData();
};

//added at Example 2.3 line 20...function to attach popups to each mapped feature
function onEachFeature(feature, layer) {
    //no property named popupContent; instead, create html string with all properties
    var popupContent = "";
    if (feature.properties) {
        //loop to add feature property names and values to html string
        for (var property in feature.properties){
            //<p> tag is the paragraph tag in html being added to the popup content on the map
            //currently having the loop look and label for the MegaCities properties and to label them.
            popupContent += "<p>" + property + ": " + feature.properties[property] + "</p>";
        }
        //labels all the attributes when the function is called.
        layer.bindPopup(popupContent);
    };
};

//function to retrieve the data and place it on the map
function getData(){
    //load the data MegaCities
    //getJSON is a function that retrieves json features - geoJSON counts
    $.getJSON("data/MegaCities.geojson", function(response){
            $.getJSON("data/MegaCities.geojson", function(response){
                //marker options for how to present MegaCities
                var geojsonMarkerOptions = {
                    //radius of the circle
                    radius: 8,
                    //color in hex for the fill of the circles
                    fillColor: "#ff7800",
                    color: "#000",
                    weight: 1,
                    //opacity is ranged from 0-1
                    opacity: 1,
                    //fillOpacity applies the same range
                    fillOpacity: 0.8
                };
    
                //create a Leaflet GeoJSON layer and add it to the map
                L.geoJson(response, {
                    onEachFeature: onEachFeature,
                    pointToLayer: function (feature, latlng){
                        return L.circleMarker(latlng, geojsonMarkerOptions);
                    }
                    //add the data to the map when ready.
                }).addTo(map);
            });
        });
};
//create the map
$(document).ready(createMap);