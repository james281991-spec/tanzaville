var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_TANZAVIILLEHOABDRY_1 = new ol.format.GeoJSON();
var features_TANZAVIILLEHOABDRY_1 = format_TANZAVIILLEHOABDRY_1.readFeatures(json_TANZAVIILLEHOABDRY_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TANZAVIILLEHOABDRY_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANZAVIILLEHOABDRY_1.addFeatures(features_TANZAVIILLEHOABDRY_1);
var lyr_TANZAVIILLEHOABDRY_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANZAVIILLEHOABDRY_1, 
                style: style_TANZAVIILLEHOABDRY_1,
                popuplayertitle: 'TANZAVIILLE HOA BDRY',
                interactive: true,
                title: '<img src="styles/legend/TANZAVIILLEHOABDRY_1.png" /> TANZAVIILLE HOA BDRY'
            });
var group_tanzavilleSDP1 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'tanzaville SDP 1'});

lyr_OpenStreetMap_0.setVisible(true);lyr_TANZAVIILLEHOABDRY_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_TANZAVIILLEHOABDRY_1];
lyr_TANZAVIILLEHOABDRY_1.set('fieldAliases', {'name': 'name', });
lyr_TANZAVIILLEHOABDRY_1.set('fieldImages', {'name': 'TextEdit', });
lyr_TANZAVIILLEHOABDRY_1.set('fieldLabels', {'name': 'inline label - visible with data', });
lyr_TANZAVIILLEHOABDRY_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});