/*var greenIcon = L.icon({
    iconUrl: 'rwu.png',
    //shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
}); */

var mymap = L.map('mapto').setView([47.76922327867449, 9.548606532907547], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9', // streets-v11 or satellite-v9
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicno5MSIsImEiOiJja2h2eWhnMHUwM2ZkMnNsZjVmbnJtbmYwIn0.GF3Mwj-s0cl-SyfJruRczA'
}).addTo(mymap);

L.geoJSON(geojsonFeature).addTo(mymap);

var marker = L.marker([47.769356762649764, 9.549082059622537]).addTo(mymap);
//L.marker([47.76770062157356, 9.54897348690701], {icon: greenIcon}).addTo(mymap);



var geojsonFeature = 
{
    "type": "Feature",
    "properties": 
	{
    },
    "geometry":
	{
        "type": "Polygon",
        "coordinates": 
		[[9.54897348690701,47.76770062157356],
         [9.549789028394793,47.76794792880797],
         [9.549880065584126,47.76751450298248],
         [9.54897348690701,47.76770062157356]]
    }
};


