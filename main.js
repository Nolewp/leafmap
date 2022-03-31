var map = L.map('map', {
    zoomControl: false,
    maxZoom: 18,
    minZoom: 2
}).setView([28.06842871415242, -82.30105234509858], 6);

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var USGS = L.tileLayer('https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles courtesy of the <a href="https://usgs.gov/">U.S. Geological Survey</a>'
});

var OpenTopo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

L.control.scale().addTo(map);

document.querySelector('#hollywoodzoom').addEventListener("click", function(e) {
    map.setView([26.011546392726334, -80.14323931292438], 14)
})

document.querySelector('#flstate').addEventListener("click", function(e) {
    map.setView([30.441916706649845, -84.29852799899774], 14)
})
document.querySelector('#tampazoom').addEventListener("click", function(e) {
    map.setView([27.947743040214263, -82.45], 14)
})

var baseMaps = {
    'OSM' : osm,
    'USGS' : USGS ,
    'Open topo' : OpenTopo
}

L.control.layers(baseMaps, {}, {position: 'topleft'}).addTo(map);