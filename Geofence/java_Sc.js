var mymap = L.map('mapto').setView([47.78198 ,9.61062], 25);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoicno5MSIsImEiOiJja2h2eWhnMHUwM2ZkMnNsZjVmbnJtbmYwIn0.GF3Mwj-s0cl-SyfJruRczA'
}).addTo(mymap);

var marker = L.marker([47.769356762649764, 9.549082059622537]).addTo(mymap);

var polygon = L.polygon([
    [47.76735459588835, 9.547355312583909],
	[47.768129805658404, 9.547918576503156],
    [47.768739148472314, 9.548723239177132],
	[47.76865802336172, 9.5495466773135],
	[47.7684056333118, 9.550168949795708],
	[47.76816135464031, 9.550565916714872],
	[47.76797997575479, 9.550869714312757],
	[47.76791868034377, 9.551049422309946],
	[47.76765186418358, 9.551060151145599],
	[47.76744093422337, 9.550687324106658],
	[47.76714346743182, 9.55013478907693],
	[47.76710380506564, 9.549770008664726],
	[47.76691991551817, 9.549743186575594],
	[47.7667179968348, 9.549340855238606],
	[47.76697039506653, 9.548544239191369],
	[47.76712183341766, 9.548098992511768],
	[47.76719574959558, 9.547613512698469],
    [47.76735459588835, 9.547355312583909]
]).addTo(mymap); 

 polygon.bindPopup("Polygon by GPS");


var circle = L.circle([47.76919607358267, 9.54840993258422], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5
}).addTo(mymap); 

circle.bindPopup("Willkommen bei der Soluware GmbH !!!");

var circle = L.circle([47.82546425414478, 9.64428694067895], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 5
}).addTo(mymap); 

circle.bindPopup("Ich wohne hier");

var polygon = L.polygon([
[47.76770062157356, 9.54897348690701],
[47.76794792880797, 9.549789028394793],
[47.76751450298248, 9.549880065584126],
[47.76742526780536, 9.54911004269101],
[47.76770062157356, 9.54897348690701]
],{color:'red'}).addTo(mymap);