var mymap = L.map('mapto').setView([47.76933144428044, 9.548611897639718], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9', // streets-v11 or satellite-v9
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicno5MSIsImEiOiJja2h2eWhnMHUwM2ZkMnNsZjVmbnJtbmYwIn0.GF3Mwj-s0cl-SyfJruRczA'
}).addTo(mymap);

var marker = L.marker([47.769356762649764, 9.549082059622537]).addTo(mymap);

// the geoJSON data
var geoJSON_F=
[
 {
   "type": "FeatureCollection",
   "features":
		[
			{"type":"Feature","geometry":
				{"type": "Polygon",
				 "coordinates":
					 [
					   [
					     [9.548150747899273,47.769180685236535],
					     [9.548409425953214,47.76932567065764],
					     [9.548609028742238,47.769159027628525],
					     [9.548346939264432,47.769021124774106],
					     //[9.548150747899273,47.769180685236535]
					   ]
	                 ]
				}
			}
		]
 }		
];
// adding the geoJSON data 
var myLayer = L.geoJSON().addTo(mymap);
myLayer.addData(geoJSON_F);
