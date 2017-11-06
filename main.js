import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import Stamen from 'ol/source/stamen';
import VectorLayer from 'ol/layer/vector';
import Vector from 'ol/source/vector';
import GeoJSON from 'ol/format/geojson';
import Style from 'ol/style/style';
import Text from 'ol/style/text';
import Stroke from 'ol/style/stroke';
import proj from 'ol/proj';
import Map from 'ol/map';

const map = new Map({
  target: 'map',
  view: new View({
    center: proj.fromLonLat([16.37, 48.2]),
    zoom: 13
  })
});

map.addLayer(new TileLayer({
  source: new Stamen({
    layer: 'watercolor'
  })
}));

const layer = new VectorLayer({
  source: new Vector({
    url: 'data/map.geojson',
    format: new GeoJSON()
  })
});
map.addLayer(layer);

layer.setStyle(function(feature) {
  return new Style({
    text: new Text({
      text: feature.get('orte'),
      font: 'Bold 13pt Calibri',
      stroke: new Stroke({
        color: 'white',
        width: 3
      })
    })
  });
});
