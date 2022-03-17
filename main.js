var map = L.map('map', {
    zoomControl: false
}).setView([28.06842871415242, -82.30105234509858], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

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

