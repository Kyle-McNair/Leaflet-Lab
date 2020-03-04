//declare vars globally so all functions have access
var map;
var minValue



//step 1 create map
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
    //call getData function
    getData(map);
};

function calcMinValue(data){
     
     //create empty array to store all data values
     var allValues = [];

     //loop through each city
     for(var city of data.features){
          //loop through each year
          for(var year = 1890; year <= 2010; year+=10){
                //get population for current year
               var value = city.properties["Built_"+ String(year)+"s"];
               if(value =! 0)allValues.push(value);
               //add value to array
            //    allValues.push(value);
           }
     }
     
     //get minimum value of our array
     var minValue = Math.min(...allValues)

     return minValue;
}

//calculate the radius of each proportional symbol
function calcPropRadius(attValue) {
        //constant factor adjusts symbol sizes evenly
     var minRadius = 5;
     
     //Flannery Appearance Compensation formula
     var radius = 1.0083 * Math.pow(attValue/minValue,0.5715) * minRadius;
     return radius;
    
  
};

function processData(data){

    var list = [];

    //properties of the first feature in the dataset
    var properties = data.features[0].properties;

    for (var attribute in properties){

        if (attribute.indexOf("Built_") > -1){
            list.push(attribute)
        };
    };

    //check result
    
    return list;
};

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

    var year = attribute.split("Built_")[1];
    popupContent += "<b>Skyscrapers built in the " + year + ": </b>" + feature.properties[attribute];

    //bind the popup to the circle marker
    layer.bindPopup(popupContent);
    var cities = feature.properties.City;
    // var skyline = feature.properties.Image
   
    layer.on({
    click: function(){
        $("#skyline").html(cities);
        if(cities == "Atlanta"){
            $('#skyline').append('<img id="CityImage" src = "images/Atlanta.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Boston"){
            $('#skyline').append('<img id="CityImage" src = "images/Boston.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Calgary"){
            $('#skyline').append('<img id="CityImage" src = "images/Calgary.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Chicago"){
            $('#skyline').append('<img id="CityImage" src = "images/Chicago.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Dallas"){
            $('#skyline').append('<img id="CityImage" src = "images/Dallas.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Houston"){
            $('#skyline').append('<img id="CityImage" src = "images/Houston.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Las Vegas"){
            $('#skyline').append('<img id="CityImage" src = "images/LasVegas.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Los Angeles"){
            $('#skyline').append('<img id="CityImage" src = "images/LosAngeles.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Mexico City"){
            $('#skyline').append('<img id="CityImage" src = "images/MexicoCity.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Miami"){
            $('#skyline').append('<img id="CityImage" src = "images/Miami.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Montreal"){
            $('#skyline').append('<img id="CityImage" src = "images/Montreal.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "New York City"){
            $('#skyline').append('<img id="CityImage" src = "images/NewYorkCity.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Philadelphia"){
            $('#skyline').append('<img id="CityImage" src = "images/Philadelphia.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "San Francisco"){
            $('#skyline').append('<img id="CityImage" src = "images/Philadelphia.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Seattle"){
            $('#skyline').append('<img id="CityImage" src = "images/Seattle.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
        else if(cities == "Toronto"){
            $('#skyline').append('<img id="CityImage" src = "images/Toronto.jpg">');
            $('#info').html('<p>Total Structures Built (100m+): '+ feature.properties.Total_Structures_100m+ '</p>');
        }
    }
    })
    //return the circle marker to the L.geoJson pointToLayer option
    return layer;



    
    
};

function createPropSymbols(data, list){
    //create a Leaflet GeoJSON layer and add it to the map
    L.geoJson(data, {
        pointToLayer: function(feature, latlng){
            return pointToLayer(feature, latlng, list);
        }
    }).addTo(map);
};

function updatePropSymbols(map, attribute){
	map.eachLayer(function(layer){
		if (layer.feature){
            //access feature properties
            var props = layer.feature.properties;
            //update each feature's radius based on new attribute values
            
            var radius = calcPropRadius(props[attribute]);

            layer.setRadius(radius);

            //add city to popup content string
            var popupContent = "<b>City:</b> " + props.City+"<br>";

            //add formatted attribute to panel content string
            var year = attribute.split("Built_")[1];
            popupContent += "<b>Structures built in the " + year + ":</b> " + props[attribute];

            //update popup content
            popup = layer.getPopup();
            popup.setContent(popupContent).update();
        };
	});
};

function createSequenceControls(list){
    //create range input element (slider)
    $('#panel').append('<div class="decade"> </div>');
    $('#panel').append('<input class="range-slider" type="range">');

    $('.range-slider').attr({
        max: 12,
        min: 0,
        value: 0,
        step: 1
    });
    


    $('#panel').append('<button class="step" id="reverse" title="Reverse"><<</button>');
    $('#panel').append('<button class="step" id="forward" title="Forward">>></button>');
    var decade = list[0].split("Built_")[1]; 
    $('.decade').html(decade);
    
    $('.step').click(function(){
		//get the old index value
		var index = $('.range-slider').val();
		//Step 6: increment or decriment depending on button clicked
		if ($(this).attr('id') == 'forward'){
			index++;
			//Step 7: if past the last attribute, wrap around to first attribute
			index = index > 12 ? 0 : index;
		} else if ($(this).attr('id') == 'reverse'){
			index--;
			//Step 7: if past the first attribute, wrap around to last attribute
			index = index < 0 ? 12 : index;
        };

		//Step 8: update slider
        $('.range-slider').val(index);
        
        var decade = list[index].split("Built_")[1]; 
        $('.decade').html(decade);
		//Step 9: pass new attribute to update symbols
        updatePropSymbols(map, list[index]);
	});

	//Step 5: input listener for slider
	$('.range-slider').on('input', function(){
		//Step 6: get the new index value
        var index = $(this).val();
		//Step 6: increment or decriment depending on button clicked
		if ($(this).attr('id') == 'forward'){
			index++;
			//Step 7: if past the last attribute, wrap around to first attribute
			index = index > 12 ? 0 : index;
		} else if ($(this).attr('id') == 'reverse'){
			index--;
			//Step 7: if past the first attribute, wrap around to last attribute
			index = index < 0 ? 12 : index;
        };
        var decade = list[index].split("Built_")[1]; 
        $('.decade').html(decade);
		//Step 9: pass new attribute to update symbols
        updatePropSymbols(map, list[index]);
        
	});
};

function getData(map){
    //load the data
    $.ajax("data/skyscrapers.geojson", {
        dataType: "json",
        success: function(response){
            var list = processData(response);

            minValue = calcMinValue(response);
            createPropSymbols(response, list);
            createSequenceControls(list);

        }
    
    });
};

function ClickImage(feature, layer){
    var city = feature.properties.City
    if(city == "Chicago"){
        $('#skyline').append('<img src = "images\chicago">'),
        console.log("You Clicked Me!")
    }
};


$(document).ready(createMap);