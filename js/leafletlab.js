//declare vars globally so all functions have access
var map;
var minValue



//create map
function createMap(){
    //create the map
    //default coordinates and zoom level when first opened.
    map = L.map('mapid', {
        center: [38, -97],
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
    //call getData function to get everything added onto the map
    getData(map);
};

function calcMinValue(data){
     
     //create empty array to store all data values
     var allValues = [];

     //loop through each city
     for(var city of data.features){
          //loop through each year
          //1890 is the earliest time interval
          //have it be in increments of 10
          for(var year = 1890; year <= 2010; year+=10){
                //get population for current year
               var value = city.properties["Built_"+ String(year)+"s"];
               //if values are not 0, push them to the allValues list
               if(value =! 0)allValues.push(value);
           }
     }
     
     //get minimum value of our array
     var minValue = Math.min(...allValues)

     return minValue;
}

//calculate the radius of each proportional symbol
function calcPropRadius(attValue) {
        //constant factor adjusts symbol sizes evenly
        //set min radius value to 6
     var minRadius = 5;
     
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
    // var skyline = feature.properties.Image
   

    //function where you click on the given cities, a photo of the skyline will appear as well as city name and total structures built
    layer.on({
    click: function(){
        //skyline tag used to implement the cities being added
        $("#skyline").html(cities);
        //if statement to go through each city, and inserts an image into the div tag of the #skyline.
        for(var c in cities){
            var citySplit = cities.replace(/\s/g,'');
            $('#skyline').append('<img id="CityImage" src = "images/' + citySplit+'.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        // if(cities == "Atlanta"){
        //     $('#skyline').html('<img id="CityImage" src = "images/Atlanta.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "Boston"){
        //     $('#skyline').html('<img id="CityImage" src = "images/Boston.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "Calgary"){
        //     $('#skyline').html('<img id="CityImage" src = "images/Calgary.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "Chicago"){
        //     $('#skyline').html('<img id="CityImage" src = "images/Chicago.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "Dallas"){
        //     $('#skyline').html('<img id="CityImage" src = "images/Dallas.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "Houston"){
        //     $('#skyline').html('<img id="CityImage" src = "images/Houston.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "Las Vegas"){
        //     $('#skyline').html('<img id="CityImage" src = "images/LasVegas.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "Los Angeles"){
        //     $('#skyline').html('<img id="CityImage" src = "images/LosAngeles.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "Mexico City"){
        //     $('#skyline').html('<img id="CityImage" src = "images/MexicoCity.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "Miami"){
        //     $('#skyline').html('<img id="CityImage" src = "images/Miami.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "Montreal"){
        //     $('#skyline').html('<img id="CityImage" src = "images/Montreal.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "New York City"){
        //     $('#skyline').html('<img id="CityImage" src = "images/NewYorkCity.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "Philadelphia"){
        //     $('#skyline').html('<img id="CityImage" src = "images/Philadelphia.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "San Francisco"){
        //     $('#skyline').html('<img id="CityImage" src = "images/Philadelphia.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "Seattle"){
        //     $('#skyline').html('<img id="CityImage" src = "images/Seattle.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
        // else if(cities == "Toronto"){
        //     $('#skyline').html('<img id="CityImage" src = "images/Toronto.jpg">');
        //     $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        // }
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
        };
	});
};
//create the sequence controls
function createSequenceControls(list){
    //create range input element (slider)
    //add the decade to show which decade the symbols are currently on
    $('#panel').append('<div class="decade"> </div>');
    //input the slider
    $('#panel').append('<input class="range-slider" type="range">');
    //slider attributes
    //there are 13 time intervals, so have 0-12 be the range and increment by 1
    $('.range-slider').attr({
        max: 12,
        min: 0,
        value: 0,
        step: 1
    });
    

    //add the forward and reverse buttons
    $('#panel').append('<button class="step" id="reverse" title="Reverse"><<</button>');
    $('#panel').append('<button class="step" id="forward" title="Forward">>></button>');
    //create the decade variable to find the year from the list variable. 
    var decade = list[0].split("Built_")[1]; 
    //add it onto the webpage
    $('.decade').html(decade);
    
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
		//pass new attribute to update symbols
        updatePropSymbols(map, list[index]);
        
	});
};
//get the data and retrieves all of the data from all of the functions
function getData(map){
    //load the geoJson
    $.ajax("data/UpdatedSkyscrapers.geojson", {
        dataType: "json",
        success: function(response){
            //creates the variable list and has it be processed
            var list = processData(response);
            //find the minimum value
            minValue = calcMinValue(response);
            //proportional symbols are created based on the list
            createPropSymbols(response, list);
            //sequence controls can now be implemented
            createSequenceControls(list);

        }
    
    });
};

//create the map when ready
$(document).ready(createMap);