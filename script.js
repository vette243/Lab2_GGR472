mapboxgl.accessToken = 'pk.eyJ1IjoidmV0dGUyNDMiLCJhIjoiY2xlNHJqbHNrMDVzNzNucDJrYm90djFrcyJ9.j2TYaVOLnNy8bDEv82GwLQ';

var map = new mapboxgl.Map({
    container: 'My Map',
    style: 'mapbox://styles/vette243/cle4pjfh6002401pal69tqaif',
    center: [-122.4376, 37.7577],
    zoom: 13
  });
  map.on('load', function() {
    map.addSource('Green Spaces', {
      type: 'geojson',
      data: 'Green Spaces.geojson'
    });
    map.addSource('neighborhoods', {
        type: 'geojson',
        data: 'Neighbourhoods.geojson'
    });
    map.addLayer({
      id: 'Neighbours',
      type: 'line',
      source: 'neighborhoods',
      paint: {
        'fill-color': '#f00',
        'fill-opacity': 1
      }
    });
    map.addLayer({
        id: 'public green',
        type: 'line',
        source: 'Green Spaces',
        paint: {
          'fill-color': '#118806',
          'fill-opacity': 1
        }
    })
  });