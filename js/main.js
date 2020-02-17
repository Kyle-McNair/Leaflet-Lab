
//declare map var in global scope
var map;

//function to instantiate the Leaflet map
function createMap(){
    //create the map
    //default coordinates and zoom level when first opened.
    map = L.map('mapid', {
        center: [38, -93],
        zoom: 4
    });
    
    //add the stamen tiles
    L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);
    //call getData function
    getData();
};

//added at Example 2.3 line 20...function to attach popups to each mapped feature
function onEachFeature(feature, layer) {
    //no property named popupContent; instead, create html string with all properties
    var popupContent = layer;
    if (feature.properties) {
        //using the html tags to customize the text and avoid the underscores.
        //still able to label each attribute for the points.
        popupContent.bindPopup("<b>City: <b>"+ feature.properties.City + '<br>' + 
        "<b>Total Structures Built (100m+): <b>"+ feature.properties.Total_Structures_Built_100m + '<br>' +
        "<b>Built 1950-1959: <b>"+ feature.properties.Built_1950_1959 + '<br>'+
        "<b>Built 1960-1969: <b>"+ feature.properties.Built_1960_1969 + '<br>' +
        "<b>Built 1970-1979: <b>"+ feature.properties.Built_1970_1979 + '<br>' +
        "<b>Built 1980-1989: <b>"+ feature.properties.Built_1980_1989 + '<br>' +
        "<b>Built 1990-1999: <b>"+ feature.properties.Built_1990_1999 + '<br>' +
        "<b>Built 2000-2009: <b>"+ feature.properties.Built_2000_2009 + '<br>' +
        "<b>Built 2010-2019: <b>"+ feature.properties.Built_2010_2019 + '<br>' )

    };
};

//function to retrieve the data and place it on the map
function getData(){
    //load the data
    $.getJSON("data/NorthAmerica_Structures.geojson", function(response){
            $.getJSON("data/NorthAmerica_Structures.geojson", function(response){
                //create marker options
                var geojsonMarkerOptions = {
                    //have the circles be a little larger than the megacities
                    radius: 10,
                    //fill color be a bright purple
                    fillColor: "#b19cd9",
                    color: "#000",
                    weight: 1,
                    opacity: 1,
                    //keeping the content visible as necessary. 
                    fillOpacity: 1
                };
    
                //create a Leaflet GeoJSON layer and add it to the map
                L.geoJson(response, {
                    //on each feature is called, where it can help label the popups I stated.
                    onEachFeature: onEachFeature,
                    pointToLayer: function (feature, latlng){
                        //circleMarker will bring the geojson coordinates and have the radius from the centerpoint of the coordinates
                        return L.circleMarker(latlng, geojsonMarkerOptions);
                    }
                //add my data to the map. 
                }).addTo(map);
            });
        });
};
//creates the map when ready.
$(document).ready(createMap);