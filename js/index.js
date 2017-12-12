new ol.Map({
  layers: [
    new ol.layer.Tile({source: new ol.source.OSM()})
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-76.969314,-12.089413]), //ol.proj.LonLat([-12.089413, -76.969314]),
    zoom: 5.5
  }),
  target: 'map'
});