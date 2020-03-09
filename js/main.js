//declare vars globally so all functions have access
var map;
var dataStats = {};
var data1890 = [{"City":"New York City","Total":3},{"City":"Chicago","Total":0},{"City":"Miami","Total":0},{"City":"Houston","Total":0},{"City":"Los Angeles","Total":0},{"City":"San Francisco","Total":0},{"City":"Seattle","Total":0},{"City":"Boston","Total":0},{"City":"Dallas","Total":0},{"City":"Atlanta","Total":0},{"City":"Las Vegas","Total":0},{"City":"Philadelphia","Total":0},{"City":"Toronto","Total":0},{"City":"Montreal","Total":0},{"City":"Calgary","Total":0},{"City":"Mexico City","Total":0}]
var data1900 = [{"City":"New York City","Total":13},{"City":"Chicago","Total":0},{"City":"Miami","Total":0},{"City":"Houston","Total":0},{"City":"Los Angeles","Total":0},{"City":"San Francisco","Total":0},{"City":"Seattle","Total":0},{"City":"Boston","Total":0},{"City":"Dallas","Total":0},{"City":"Atlanta","Total":0},{"City":"Las Vegas","Total":0},{"City":"Philadelphia","Total":1},{"City":"Toronto","Total":0},{"City":"Montreal","Total":0},{"City":"Calgary","Total":0},{"City":"Mexico City","Total":0}]
var data1910 = [{"City":"New York City","Total":26},{"City":"Chicago","Total":0},{"City":"Miami","Total":0},{"City":"Houston","Total":0},{"City":"Los Angeles","Total":0},{"City":"San Francisco","Total":0},{"City":"Seattle","Total":1},{"City":"Boston","Total":1},{"City":"Dallas","Total":0},{"City":"Atlanta","Total":0},{"City":"Las Vegas","Total":0},{"City":"Philadelphia","Total":1},{"City":"Toronto","Total":0},{"City":"Montreal","Total":0},{"City":"Calgary","Total":0},{"City":"Mexico City","Total":0}]
var data1920 = [{"City":"New York City","Total":79},{"City":"Chicago","Total":23},{"City":"Miami","Total":1},{"City":"Houston","Total":2},{"City":"Los Angeles","Total":1},{"City":"San Francisco","Total":5},{"City":"Seattle","Total":1},{"City":"Boston","Total":1},{"City":"Dallas","Total":2},{"City":"Atlanta","Total":1},{"City":"Las Vegas","Total":0},{"City":"Philadelphia","Total":6},{"City":"Toronto","Total":1},{"City":"Montreal","Total":1},{"City":"Calgary","Total":0},{"City":"Mexico City","Total":0}]
var data1930 = [{"City":"New York City","Total":141},{"City":"Chicago","Total":30},{"City":"Miami","Total":1},{"City":"Houston","Total":2},{"City":"Los Angeles","Total":1},{"City":"San Francisco","Total":5},{"City":"Seattle","Total":1},{"City":"Boston","Total":3},{"City":"Dallas","Total":2},{"City":"Atlanta","Total":1},{"City":"Las Vegas","Total":0},{"City":"Philadelphia","Total":11},{"City":"Toronto","Total":2},{"City":"Montreal","Total":2},{"City":"Calgary","Total":0},{"City":"Mexico City","Total":0}]
var data1940 = [{"City":"New York City","Total":154},{"City":"Chicago","Total":30},{"City":"Miami","Total":1},{"City":"Houston","Total":2},{"City":"Los Angeles","Total":1},{"City":"San Francisco","Total":5},{"City":"Seattle","Total":1},{"City":"Boston","Total":5},{"City":"Dallas","Total":3},{"City":"Atlanta","Total":1},{"City":"Las Vegas","Total":0},{"City":"Philadelphia","Total":11},{"City":"Toronto","Total":2},{"City":"Montreal","Total":2},{"City":"Calgary","Total":0},{"City":"Mexico City","Total":0}]
var data1950 = [{"City":"New York City","Total":183},{"City":"Chicago","Total":32},{"City":"Miami","Total":1},{"City":"Houston","Total":3},{"City":"Los Angeles","Total":1},{"City":"San Francisco","Total":6},{"City":"Seattle","Total":1},{"City":"Boston","Total":5},{"City":"Dallas","Total":8},{"City":"Atlanta","Total":1},{"City":"Las Vegas","Total":0},{"City":"Philadelphia","Total":12},{"City":"Toronto","Total":3},{"City":"Montreal","Total":2},{"City":"Calgary","Total":0},{"City":"Mexico City","Total":2}]
var data1960 = [{"City":"New York City","Total":258},{"City":"Chicago","Total":68},{"City":"Miami","Total":2},{"City":"Houston","Total":10},{"City":"Los Angeles","Total":11},{"City":"San Francisco","Total":17},{"City":"Seattle","Total":3},{"City":"Boston","Total":8},{"City":"Dallas","Total":12},{"City":"Atlanta","Total":9},{"City":"Las Vegas","Total":2},{"City":"Philadelphia","Total":14},{"City":"Toronto","Total":9},{"City":"Montreal","Total":13},{"City":"Calgary","Total":2},{"City":"Mexico City","Total":4}]
var data1970 = [{"City":"New York City","Total":388},{"City":"Chicago","Total":122},{"City":"Miami","Total":7},{"City":"Houston","Total":27},{"City":"Los Angeles","Total":26},{"City":"San Francisco","Total":38},{"City":"Seattle","Total":9},{"City":"Boston","Total":22},{"City":"Dallas","Total":17},{"City":"Atlanta","Total":19},{"City":"Las Vegas","Total":4},{"City":"Philadelphia","Total":26},{"City":"Toronto","Total":39},{"City":"Montreal","Total":20},{"City":"Calgary","Total":14},{"City":"Mexico City","Total":7}]
var data1980 = [{"City":"New York City","Total":536},{"City":"Chicago","Total":175},{"City":"Miami","Total":19},{"City":"Houston","Total":60},{"City":"Los Angeles","Total":45},{"City":"San Francisco","Total":62},{"City":"Seattle","Total":27},{"City":"Boston","Total":33},{"City":"Dallas","Total":35},{"City":"Atlanta","Total":33},{"City":"Las Vegas","Total":8},{"City":"Philadelphia","Total":35},{"City":"Toronto","Total":54},{"City":"Montreal","Total":27},{"City":"Calgary","Total":38},{"City":"Mexico City","Total":13}]
var data1990 = [{"City":"New York City","Total":597},{"City":"Chicago","Total":204},{"City":"Miami","Total":23},{"City":"Houston","Total":62},{"City":"Los Angeles","Total":57},{"City":"San Francisco","Total":65},{"City":"Seattle","Total":28},{"City":"Boston","Total":35},{"City":"Dallas","Total":36},{"City":"Atlanta","Total":42},{"City":"Las Vegas","Total":19},{"City":"Philadelphia","Total":40},{"City":"Toronto","Total":71},{"City":"Montreal","Total":31},{"City":"Calgary","Total":39},{"City":"Mexico City","Total":21}]
var data2000 = [{"City":"New York City","Total":712},{"City":"Chicago","Total":270},{"City":"Miami","Total":76},{"City":"Houston","Total":80},{"City":"Los Angeles","Total":59},{"City":"San Francisco","Total":78},{"City":"Seattle","Total":37},{"City":"Boston","Total":42},{"City":"Dallas","Total":40},{"City":"Atlanta","Total":64},{"City":"Las Vegas","Total":49},{"City":"Philadelphia","Total":48},{"City":"Toronto","Total":124},{"City":"Montreal","Total":34},{"City":"Calgary","Total":48},{"City":"Mexico City","Total":42}]
var data2010 = [{"City":"New York City","Total":878},{"City":"Chicago","Total":327},{"City":"Miami","Total":116},{"City":"Houston","Total":102},{"City":"Los Angeles","Total":74},{"City":"San Francisco","Total":94},{"City":"Seattle","Total":59},{"City":"Boston","Total":48},{"City":"Dallas","Total":46},{"City":"Atlanta","Total":71},{"City":"Las Vegas","Total":54},{"City":"Philadelphia","Total":57},{"City":"Toronto","Total":267},{"City":"Montreal","Total":47},{"City":"Calgary","Total":66},{"City":"Mexico City","Total":69}]

var decadeList = [data1890, data1900, data1910, data1920, data1930, data1940, data1950, data1960, data1970, data1980, data1990, data2000, data2010]



//create map
function createMap(){
    //create the map
    //default coordinates and zoom level when first opened.
    map = L.map('mapid', {
        center: [38, -97],
        zoom: 4,
        maxZoom: 6
    });
    L.tileLayer('https://api.mapbox.com/styles/v1/mcnairk94/ck7i2bsfy13se1ilosdb1v0ch/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWNuYWlyazk0IiwiYSI6ImNrNmpxdDI1eDAwZjUzbG15OGFnZGxyd2EifQ.7XQ2utbtmE1Vqu4LbrcXyw', { 
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 6,
        minZoom:4,
        //sets the max zoom level of the map
    }).addTo(map)
    // //call getData function to get everything added onto the map
    getData();
};

function calcStats(data){
    //create empty array to store all data values
    var allValues = [];
    var newValues = [];
    //loop through each city
    for(var city of data.features){
    
        //loop through each year
        for(var year = 1890; year <= 2010; year+=10){
      
            //get population for current year
            var value = city.properties["Built_"+ String(year)+"s"];
            //add value to array
            if(value =! 0)allValues.push(value)
        }
    }
    for(var city of data.features){
    
        //loop through each year
        for(var year = 1890; year <= 2010; year+=10){
            //get population for current year
            var value = city.properties["Built_"+ String(year)+"s"];
            //add value to array
            newValues.push(value)
        }
    }
    //get min, max, mean stats for our array
    dataStats.min = 1//Math.min(...newValues);
    dataStats.max = 50//Math.max(...newValues);

    //calculate mean
    var sum = newValues.reduce(function(a, b){return a+b;});
    dataStats.mean = Math.round(sum/ newValues.length);
    var minValue = Math.min(...allValues)

    return minValue;

}

//calculate the radius of each proportional symbol
function calcPropRadius(attValue) {
        //constant factor adjusts symbol sizes evenly
        //set min radius value to 6
     var minRadius = 4;
     
     //Flannery Appearance Compensation formula
     var radius = 1.0083 * Math.pow(attValue/minValue,0.5715) * minRadius;
     //return the radius variable to be used in other functions
     return radius;
    
  
};
//process data function goes through the list of attributes given in the geoJson
function processData(data){
    //creates an empty list
    var list = [];

    //properties of the first feature in the dataset
    var properties = data.features[0].properties;
    //for loop to go through each properties that contains the property value of "Built_"
    //and adds it to the list variable
    for (var attribute in properties){

        if (attribute.indexOf("Built_") > -1){
            list.push(attribute)
        };
    };
    //list is returned for other functions
    return list;
};

//function pointToLayer takes the attributes and puts the circle markers onto the map
function pointToLayer(feature, latlng, list){
    //Determine which attribute to visualize with proportional symbols
    var attribute = list[0];
    //create marker options
    var options = {
        fillColor: "#d4af37",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.75
    };
    
    //For each feature, determine its value for the selected attribute
    var attValue = Number(feature.properties[attribute]);
    
    //Give each feature's circle marker a radius based on its attribute value
    options.radius = calcPropRadius(attValue);

    //create circle marker layer
    var layer = L.circleMarker(latlng, options);

    //build popup content string
    var popupContent = ("<b>City: </b>"+ feature.properties.City + "<br>");
    //find the year attribute in the geoJson
    var year = attribute.split("Built_")[1];
    //add the label in the popup content that contains the year
    popupContent += "<b>Skyscrapers built in the " + year + ": </b>" + feature.properties[attribute];

    //bind the popup to the circle marker
    layer.bindPopup(popupContent);
    //variable of the cities in the geoJson
    var cities = feature.properties.City;

    //function where you click on the given cities, a photo of the skyline will appear as well as city name and total structures built
    layer.on({
    //     mouseover: function(){
    //         this.openPopup();
    //     },     
    //     mouseout: function(){
    //         this.closePopup();
    //     }, 
    click: function(){
        //skyline tag used to implement the cities being added
        $("#skyline").html(cities);
        //if statement to go through each city, and inserts an image into the div tag of the #skyline.
        if(cities == "Atlanta"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/Atlanta.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Boston"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/Boston.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Calgary"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/Calgary.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Chicago"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/Chicago.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Dallas"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/Dallas.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Houston"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/Houston.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Las Vegas"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/LasVegas.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Los Angeles"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/LosAngeles.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Mexico City"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/MexicoCity.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Miami"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/Miami.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Montreal"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/Montreal.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "New York City"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/NewYorkCity.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Philadelphia"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/Philadelphia.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "San Francisco"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/SanFrancisco.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Seattle"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/Seattle.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Toronto"){
            $('#clickguider').empty();
            $('#skyline').append('<img id="CityImage" src = "images/Toronto.jpg">');
            $('#info').html('<p>Total Structures Built (100m+):   '+ feature.properties.Total_Structures_100m+ '</p>');
        }
    }
    })
    //return the circle marker to the L.geoJson pointToLayer option
    return layer;



    
    
};
// create proportional symbols option
function createPropSymbols(data, list){
    //create a Leaflet GeoJSON layer and add it to the map
    L.geoJson(data, {
        //point to layer with the features and the list containing the geoJson attributes
        pointToLayer: function(feature, latlng){
            return pointToLayer(feature, latlng, list);
        }
    }).addTo(map);
};
//update propportional symbols functions
function updatePropSymbols(map, attribute){
	map.eachLayer(function(layer){
        //used to also contain the 0 values, where these will not be skipped
		if (layer.feature){
            //access feature properties
            var props = layer.feature.properties;
            //update each feature's radius based on new attribute values
            var radius = calcPropRadius(props[attribute]);

            //set the radius of the layer from the calcPropRadius
            layer.setRadius(radius);

            //add city to popup content string
            var popupContent = "<b>City:</b> " + props.City+"<br>";

            //add formatted attribute to panel content string
            var year = attribute.split("Built_")[1];
            //add the popup content of the structures built
            popupContent += "<b>Structures built in the " + year + ":</b> " + props[attribute];

            //update popup content
            popup = layer.getPopup();
            popup.setContent(popupContent).update();
            $('#temporal-legend').html("Structures Built <br>During the " + year);


        };
        
	});
};
//create the sequence controls
function createSequenceControls(list){
    var SequenceControl = L.Control.extend({
        options: {
            position: 'bottomleft'
        },

        onAdd: function () {
            // create the control container div with a particular class name
            var container = L.DomUtil.create('div', 'sequence-control-container');

            // ... initialize other DOM elements
            $(container).append('<div class="decade"> </div>');
            $(container).append('<input class="range-slider" type="range">');

            $(container).append('<img class="step" id="reverse" title="Reverse" src="images/reverse.png"></img>');
            $(container).append('<img class="step" id="forward" title="Forward" src="images/forward.png"></img>');

            // $('#forward').html('<img src="images/forward.png">');

            L.DomEvent.disableClickPropagation(container);

            return container;
        }
    });

    map.addControl(new SequenceControl());

    //create range input element (slider)
    //there are 13 time intervals, so have 0-12 be the range and increment by 1
    $('.range-slider').attr({
        max: 12,
        min: 0,
        value: 0,
        step: 1
    });
    //create the decade variable to find the year from the list variable. 
    var decade = list[0].split("Built_")[1]; 
    //add it onto the webpage
    $('.decade').html(decade);

    var baryear = decadeList[0];
    $('#plot').html(barChart(baryear));
    $("#chartyear").html('<p>Total Structures Built from 1890</p>');
    //click on the forward or reverse button functions
    $('.step').click(function(){
		//get the old index value
		var index = $('.range-slider').val();
		//increment or decriment depending on button clicked
		if ($(this).attr('id') == 'forward'){
			index++;
		    //if past the last attribute, wrap around to first attribute
			index = index > 12 ? 0 : index;
		} else if ($(this).attr('id') == 'reverse'){
			index--;
			//if past the first attribute, wrap around to last attribute
			index = index < 0 ? 12 : index;
        };

		//update slider
        $('.range-slider').val(index);
        //update the decade based on slider
        var decade = list[index].split("Built_")[1]; 
        $('.decade').html(decade);
        var baryear = decadeList[index];
        $("#chartyear").html('<p>Total Structures Built from 1890 - '+decade+'</p>');
        if(index ===0){
            $("#chartyear").html('<p>Total Structures Built from 1890</p>')
        }
        $('#plot').empty();
        $('#plot').html(barChart(baryear));
		//pass new attribute to update symbols
        updatePropSymbols(map, list[index]);
        
        
	});

	//Step 5: input listener for slider
	$('.range-slider').on('input', function(){
		//get the new index value
        var index = $(this).val();
		//increment or decriment depending on button clicked
		if ($(this).attr('id') == 'forward'){
			index++;
			//if past the last attribute, wrap around to first attribute
			index = index > 12 ? 0 : index;
		} else if ($(this).attr('id') == 'reverse'){
			index--;
			//if past the first attribute, wrap around to last attribute
			index = index < 0 ? 12 : index;
        };
        //update the decade based on slider
        var decade = list[index].split("Built_")[1]; 
        $('.decade').html(decade);
        $("#chartyear").html('<p>Total Structures Built from 1890 - '+decade+'</p>');
        if(index ===0){
            $("#chartyear").html('<p>Total Structures Built from 1890</p>')
        }
        var baryear = decadeList[index];
        $('#plot').empty();
        $('#plot').html(barChart(baryear));
		//pass new attribute to update symbols
        updatePropSymbols(map, list[index]);
        
        
        
	});
};

function createLegend(){
    var LegendControl = L.Control.extend({
        options: {
            position: 'bottomright'
        },

        onAdd: function () {
            // create the control container with a particular class name
            var container = L.DomUtil.create('div', 'legend');

            $(container).append('<div id="temporal-legend">Structures Built <br>During the 1890s</div>')

            var svg = '<svg id="attribute-legend">';

            var circles = ["max", "mean", "min"];

            if(circles[0]){
                var radius = calcPropRadius(dataStats[circles[0]]);
                var cy = 60 - radius;
                svg += '<circle class="legend-circle" id="' + circles[0] + '" r="' + radius + '"cy="' + cy + '" fill="#d4af37" fill-opacity="0.8" stroke="#000000" cx="35"/>';
                svg += '<text fill="#c5bdc3" id="' + circles[0] + '-text" x="85" y="1">' + Math.round(dataStats[circles[0]]*100)/100 + "(+) structures" + '</text>';
                };
            if(circles[1]){
                var radius = calcPropRadius(dataStats[circles[1]]);
                var cy = 60 - radius;
                svg += '<circle class="legend-circle" id="' + circles[1] + '" r="' + radius + '"cy="' + cy + '" fill="#d4af37" fill-opacity="0.8" stroke="#000000" cx="35"/>';
                svg += '<text fill="#c5bdc3" id="' + circles[1] + '-text" x="85" y="30">' + Math.round(dataStats[circles[1]]*100)/100 + " structures" + '</text>';
                };
            if(circles[2]){
                var radius = calcPropRadius(dataStats[circles[2]]);
                var cy = 60 - radius;
                svg += '<circle class="legend-circle" id="' + circles[2] + '" r="' + radius + '"cy="' + cy + '" fill="#d4af37" fill-opacity="0.8" stroke="#000000" cx="35"/>';
                svg += '<text fill="#c5bdc3" id="' + circles[2] + '-text" x="85" y="55">' + Math.round(dataStats[circles[2]]*100)/100 + " structure" + '</text>';
                }
            svg += "</svg>";
            $(container).append(svg)
            return container;
        }
    });

    map.addControl(new LegendControl());

};



//get the data and retrieves all of the data from all of the functions
function getData(){
    //load the geoJson
    $.ajax("data/UpdatedSkyscrapers.geojson", {
        dataType: "json",
        success: function(response){
            //creates the variable list and has it be processed
            var list = processData(response);
            //find the minimum value
            minValue = calcStats(response);
            //proportional symbols are created based on the list
            createPropSymbols(response, list);
            //sequence controls can now be implemented
            createSequenceControls(list);
            createLegend(list)
            calcStats(response);

        }
    
    });
};
function barChart(data){


    var margin = {top: 20, right: 20, bottom: 30, left: 100},
    width = 600 - margin.left - margin.right,
    height = 350 - margin.top - margin.bottom;


    // set the ranges
    var y = d3.scaleBand()
          .range([height, 0])
          .padding(0.1);

    var x = d3.scaleLinear()
          .range([0, width]);
          
    // append the svg object to the body of the page
    // append a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("#plot").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
          "translate(" + margin.left + "," + margin.top + ")");

    // format the data
    data.forEach(function(d) {
        d.Total = +d.Total;
    });
    data.sort(function(a, b) {
        return a.Total - b.Total;
      });
    // Scale the range of the data in the domains
    x.domain([0, d3.max(data, function(d){ return d.Total; })])
    y.domain(data.map(function(d) { return d.City; }));


    // append the rectangles for the bar chart
    svg.selectAll(".bar")
          .data(data)
        .enter().append("rect")
        .transition()
        .duration(1000)
        .attr("class", "bar")
        .attr("width", function(d) {return x(d.Total); } )
        .attr("y", function(d) { return y(d.City); })
        .attr("height", y.bandwidth())
 

    
    // add the x Axis
    svg.append("g")
          .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

     // add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));
};

//create the map when ready
$(document).ready(createMap);