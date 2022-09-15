var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_FortsMyPlaces_1 = new ol.format.GeoJSON();
var features_FortsMyPlaces_1 = format_FortsMyPlaces_1.readFeatures(json_FortsMyPlaces_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FortsMyPlaces_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FortsMyPlaces_1.addFeatures(features_FortsMyPlaces_1);
var lyr_FortsMyPlaces_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FortsMyPlaces_1, 
                style: style_FortsMyPlaces_1,
                interactive: true,
                title: '<img src="styles/legend/FortsMyPlaces_1.png" /> Forts — My Places'
            });

lyr_OSMStandard_0.setVisible(true);lyr_FortsMyPlaces_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_FortsMyPlaces_1];
lyr_FortsMyPlaces_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'year_Year': 'year_Year', });
lyr_FortsMyPlaces_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'year_Year': 'TextEdit', });
lyr_FortsMyPlaces_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'year_Year': 'no label', });
lyr_FortsMyPlaces_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});