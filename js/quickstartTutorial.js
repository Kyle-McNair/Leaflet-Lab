//set up the map parameters
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

//add tile layer...replace project id and accessToken with your own
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //farthest you can zoom in on the interactive map.
    maxZoom: 19,
    //show attribution of the map.
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

//adding the marker based on these coordinates to the map.
//coordinates should be somewhere in london
var marker = L.marker([51.5, -0.09]).addTo(mymap);
//adding the circle to the map based on the coordinates and these styles.
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);
//adding the polygon to the map based on these coordinates.
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);
//.bindPopup will "popup" labels of each feature based on the command you are trying to show.
//later on, you can use the onEachFeature to customize your popups, but this example is more manual.
marker.bindPopup("<strong>Hello world!</strong><br />I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");
//creating the popup variable for a standalone
//this popup does not come from any of the features previously added, but you can bring it in based on the input coordinates.
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(mymap);

var popup = L.popup();
//Clicking the map at certain locations will have the popup appear of where you clicked.
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
//brings the function to the map. 
mymap.on('click', onMapClick);
