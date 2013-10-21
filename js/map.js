

var directionsService = new google.maps.DirectionsService();
var	directionsDisplay = new google.maps.DirectionsRenderer();	
var coLatLng = new google.maps.LatLng(28.676515199999997,77.5016382);
var rStationLatLng = new google.maps.LatLng(28.6504645,77.4318289);
var bStationLatLng = new google.maps.LatLng(28.6774832,77.38080089999994);
var mStationLatLng = new google.maps.LatLng(28.649972,77.339737);

function initialize() 
{
	var e1 = document.getElementById("from");
	var e2 = document.getElementById("to");
	var to = e2.options[e2.selectedIndex].value;
	var from = e1.options[e1.selectedIndex].value;
	
	var start,end;

	var map_canvas = document.getElementById('map_canvas');

	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function(position){ 
				userLatLng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
				
				console.log(to+"'"+from);

				if(to == 2)
					start = rStationLatLng;
				else if(to == 3)
					start = bStationLatLng;
				else if (to == 4)
					start = coLatLng;
				
				if(from == 2)
					end = rStationLatLng;
				else if(from == 3)
					end = bStationLatLng;
				else if (from == 5)
					end = userLatLng;
				
				var map = new google.maps.Map(map_canvas, map_options);
				var request = {
					origin:start,
					destination:end,
					travelMode: google.maps.TravelMode.DRIVING
				};
				directionsService.route(request, function(result, status) {
					if (status == google.maps.DirectionsStatus.OK) {
						directionsDisplay.setDirections(result);
					}
				});
				directionsDisplay.setMap(map);	  
			},
			function(error){
				console.log("geolocation access denied :)");
			}
			);
	}
	var map_options = {
		center: new google.maps.LatLng(28.5403, 77.5463),
		zoom: 8,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	}


}