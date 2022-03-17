var map = L.map('map', {
    zoomControl: false
}).setView([28.06842871415242, -82.30105234509858], 6);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var Smooth = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map);

var OpenTopo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

L.control.scale().addTo(map);

$('#hollywoodzoom').click(function() {
    map.setView([26.011546392726334, -80.14323931292438], 13)
})
$('#flstate').click(function() {
    map.setView([30.441916706649845, -84.29852799899774], 13)
})
$('#tampazoom').click(function() {
    map.setView([27.947743040214263, -82.45], 13)
})

var baseMaps = {
    'OSM' : osm,
    'Grey Smooth' : Smooth,
    'Open topo' : OpenTopo
}

L.control.layers(baseMaps, {}, {position: 'topleft'}).addTo(map);