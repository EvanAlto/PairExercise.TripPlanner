const mapboxgl = require('mapbox-gl')
const markerMaker = require('./marker');

mapboxgl.accessToken =
  'pk.eyJ1IjoiYWx0b2V2YW5iIiwiYSI6ImNqb2c3cWd5cTBjOGMzdmxqenl1Y3N3cnYifQ.QcakT_w4-gXfnShSoPG_1A'

const map = new mapboxgl.Map({
  container: 'map',
  center: [-87.641, 41.895],
  zoom: 12,
  style: 'mapbox://styles/mapbox/streets-v10'
})

const homeMarker = document.createElement('div')
homeMarker.style.width = '32px'
homeMarker.style.height = '32px'
homeMarker.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)'

new mapboxgl.Marker(homeMarker).setLngLat([-87.641, 41.895]).addTo(map)

markerMaker();