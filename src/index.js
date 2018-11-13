const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken = 'pk.eyJ1IjoiYWx0b2V2YW5iIiwiYSI6ImNqb2c3cWd5cTBjOGMzdmxqenl1Y3N3cnYifQ.QcakT_w4-gXfnShSoPG_1A';

const map = new mapboxgl.Map({
    container: 'map',
    center: [-87.6354,41.8885],
    zoom: 12,
    style: 'mapbox://styles/mapbox/streets-v10'
});
