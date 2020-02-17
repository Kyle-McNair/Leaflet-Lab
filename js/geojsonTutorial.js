//set up the map parameters

var mymap = L.map('mapid').setView([39.74739, -105], 5);

//add tile layer...replace project id and accessToken with your own
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012'
}).addTo(mymap);

function onEachFeature(feature, layer) {
    // does this feature have a property named popupContent?
    //for executing the popup feature when selecting one of the features on the map. 
    if (feature.properties && feature.properties.popupContent) {
        layer.bindPopup(feature.properties.popupContent);
    }
}
//tutorial on creating or uploading geojson features
//this variable is currently the geojson of a point feature. 
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

//add the point geojson to the map when ready
L.geoJSON(geojsonFeature, {
    onEachFeature: onEachFeature
}).addTo(mymap);

//now creating lines based on geojson properties
var myLines = [{
    "type": "LineString",
    "coordinates": [[-100, 40], [-105, 45], [-110, 55]]
}, {
    "type": "LineString",
    "coordinates": [[-105, 40], [-110, 45], [-115, 55]]
}];
//customize the style of the lines through myStyle
var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};
//leaflet function to add another feature to the map as a geoJSON file
//style: myStyle lets you add the customzed variable style
L.geoJSON(myLines, {
    style: myStyle
}).addTo(mymap);

//onEachFeature function, but this one is for having the popup's for the state polygons
function onEachstateFeature(feature, layer) {
    // does this feature have a property named party?
    //we want to label the political party
    if (feature.properties && feature.properties.party) {
        layer.bindPopup(feature.properties.party);
    }
}
//creating the states polygon by creating the geojson.
var states = [{
    "type": "Feature",
    "properties": {"party": "Republican"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            //multiple coordinates are used so that the polygon can bind up.
            [-104.05, 48.99],
            [-97.22,  48.98],
            [-96.58,  45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

//adding the state data onto the leaflet map.
L.geoJSON(states, {
    //calling the function, notice the onEachFeature is calling the onEachstateFeature
    onEachFeature: onEachstateFeature,
    style: function(feature) {
        //switch the properties based on the political party attributes of the states.
        switch (feature.properties.party) {
            case 'Republican': return {color: "#ff0000"};
            case 'Democrat':   return {color: "#0000ff"};
        }
    }
//add to map when ready.    
}).addTo(mymap);

