map = new ol.Map({
  layers: [
    new ol.layer.Tile({source: new ol.source.OSM()}),
	  /*new ol.source.Vector({
		  url: 'http://localhost:4567/rails',
		  format: new ol.format.GeoJSON()
		}),*/
		new ol.layer.Vector({
      source: new ol.source.Vector({
        url: 'data/PER_roads.GeoJSON',
        format: new ol.format.GeoJSON()
      })
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([-76.969314,-12.089413]), //ol.proj.LonLat([-12.089413, -76.969314]),
    zoom: 5.5
  }),
  target: 'map',
  controls: ol.control.defaults({
    attributionOptions: {
      collapsible: true
    }
  }),
});
/*
var PER_roads = new OpenLayers.Layer.Vector("PER_roads GeoJSON", {
		protocol: new OpenLayers.Protocol.HTTP({
			url: "PER_roads.GeoJSON",
			format: new OpenLayers.Format.GeoJSON()
		}),
		strategies: [
			new OpenLayers.Strategy.Fixed()
		]
	});

map.addLayer();
*/