var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_soilclipped_2 = new ol.format.GeoJSON();
var features_soilclipped_2 = format_soilclipped_2.readFeatures(json_soilclipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_soilclipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_soilclipped_2.addFeatures(features_soilclipped_2);
var lyr_soilclipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_soilclipped_2, 
                style: style_soilclipped_2,
                popuplayertitle: 'soilclipped',
                interactive: false,
                title: '<img src="styles/legend/soilclipped_2.png" /> soilclipped'
            });
var format_geologyclipped_3 = new ol.format.GeoJSON();
var features_geologyclipped_3 = format_geologyclipped_3.readFeatures(json_geologyclipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geologyclipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geologyclipped_3.addFeatures(features_geologyclipped_3);
var lyr_geologyclipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geologyclipped_3, 
                style: style_geologyclipped_3,
                popuplayertitle: 'geologyclipped',
                interactive: false,
                title: '<img src="styles/legend/geologyclipped_3.png" /> geologyclipped'
            });
var format_geomorphologyclipped_4 = new ol.format.GeoJSON();
var features_geomorphologyclipped_4 = format_geomorphologyclipped_4.readFeatures(json_geomorphologyclipped_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geomorphologyclipped_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geomorphologyclipped_4.addFeatures(features_geomorphologyclipped_4);
var lyr_geomorphologyclipped_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_geomorphologyclipped_4, 
                style: style_geomorphologyclipped_4,
                popuplayertitle: 'geomorphologyclipped',
                interactive: false,
                title: '<img src="styles/legend/geomorphologyclipped_4.png" /> geomorphologyclipped'
            });
var format_parassala_wards_5 = new ol.format.GeoJSON();
var features_parassala_wards_5 = format_parassala_wards_5.readFeatures(json_parassala_wards_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parassala_wards_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parassala_wards_5.addFeatures(features_parassala_wards_5);
var lyr_parassala_wards_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parassala_wards_5, 
                style: style_parassala_wards_5,
                popuplayertitle: 'parassala_wards',
                interactive: false,
    title: 'parassala_wards<br />\
    <img src="styles/legend/parassala_wards_5_0.png" /> ADUMANCADU<br />\
    <img src="styles/legend/parassala_wards_5_1.png" /> AYINKAMAM<br />\
    <img src="styles/legend/parassala_wards_5_2.png" /> CHERUVARAKONAM<br />\
    <img src="styles/legend/parassala_wards_5_3.png" /> IDICHAKKAPLAMOODU<br />\
    <img src="styles/legend/parassala_wards_5_4.png" /> INCHIVILA<br />\
    <img src="styles/legend/parassala_wards_5_5.png" /> KARUMANOOR<br />\
    <img src="styles/legend/parassala_wards_5_6.png" /> KEEZHATHOTTAM<br />\
    <img src="styles/legend/parassala_wards_5_7.png" /> KODAVILAKOM<br />\
    <img src="styles/legend/parassala_wards_5_8.png" /> KOTTAIKKAM<br />\
    <img src="styles/legend/parassala_wards_5_9.png" /> MELEKONAM<br />\
    <img src="styles/legend/parassala_wards_5_10.png" /> MULLUVILA<br />\
    <img src="styles/legend/parassala_wards_5_11.png" /> MURIYANKARA<br />\
    <img src="styles/legend/parassala_wards_5_12.png" /> MURIYATHOTTAM<br />\
    <img src="styles/legend/parassala_wards_5_13.png" /> NADUTHOTTAM<br />\
    <img src="styles/legend/parassala_wards_5_14.png" /> NEDIYAMCODE<br />\
    <img src="styles/legend/parassala_wards_5_15.png" /> NEDUVANVILA<br />\
    <img src="styles/legend/parassala_wards_5_16.png" /> PARASUVAIKKAL<br />\
    <img src="styles/legend/parassala_wards_5_17.png" /> PAVATHIYANVILA<br />\
    <img src="styles/legend/parassala_wards_5_18.png" /> PERUVILA<br />\
    <img src="styles/legend/parassala_wards_5_19.png" /> PONNAMKULAM<br />\
    <img src="styles/legend/parassala_wards_5_20.png" /> PULLOORKONAM<br />\
    <img src="styles/legend/parassala_wards_5_21.png" /> PUTHENKADA<br />\
    <img src="styles/legend/parassala_wards_5_22.png" /> TOWN<br />\
    <img src="styles/legend/parassala_wards_5_23.png" /> VANNIYACODE<br />\
    <img src="styles/legend/parassala_wards_5_24.png" /> <br />' });
var format_clippedroad_6 = new ol.format.GeoJSON();
var features_clippedroad_6 = format_clippedroad_6.readFeatures(json_clippedroad_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedroad_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedroad_6.addFeatures(features_clippedroad_6);
var lyr_clippedroad_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedroad_6, 
                style: style_clippedroad_6,
                popuplayertitle: ' clippedroad',
                interactive: false,
                title: '<img src="styles/legend/clippedroad_6.png" />  clippedroad'
            });
var format_drainageclipped_7 = new ol.format.GeoJSON();
var features_drainageclipped_7 = format_drainageclipped_7.readFeatures(json_drainageclipped_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_drainageclipped_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_drainageclipped_7.addFeatures(features_drainageclipped_7);
var lyr_drainageclipped_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_drainageclipped_7, 
                style: style_drainageclipped_7,
                popuplayertitle: 'drainageclipped',
                interactive: false,
                title: '<img src="styles/legend/drainageclipped_7.png" /> drainageclipped'
            });
var format_clippedjunction_8 = new ol.format.GeoJSON();
var features_clippedjunction_8 = format_clippedjunction_8.readFeatures(json_clippedjunction_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clippedjunction_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clippedjunction_8.addFeatures(features_clippedjunction_8);
var lyr_clippedjunction_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_clippedjunction_8, 
                style: style_clippedjunction_8,
                popuplayertitle: 'clippedjunction',
                interactive: false,
                title: '<img src="styles/legend/clippedjunction_8.png" /> clippedjunction'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_soilclipped_2.setVisible(true);lyr_geologyclipped_3.setVisible(true);lyr_geomorphologyclipped_4.setVisible(true);lyr_parassala_wards_5.setVisible(true);lyr_clippedroad_6.setVisible(true);lyr_drainageclipped_7.setVisible(true);lyr_clippedjunction_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_soilclipped_2,lyr_geologyclipped_3,lyr_geomorphologyclipped_4,lyr_parassala_wards_5,lyr_clippedroad_6,lyr_drainageclipped_7,lyr_clippedjunction_8];
lyr_soilclipped_2.set('fieldAliases', {'id': 'id', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'SOIL': 'SOIL', });
lyr_geologyclipped_3.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_geomorphologyclipped_4.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_parassala_wards_5.set('fieldAliases', {'ward_no': 'ward_no', 'ward_name': 'ward_name', 'area_m2': 'area_m2', });
lyr_clippedroad_6.set('fieldAliases', {'NAME': 'NAME', 'Length': 'Length', });
lyr_drainageclipped_7.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_clippedjunction_8.set('fieldAliases', {'Id': 'Id', 'Jn_Name': 'Jn_Name', 'District': 'District', 'Name': 'Name', });
lyr_soilclipped_2.set('fieldImages', {'id': '', 'AREA': '', 'PERIMETER': '', 'SOIL': '', });
lyr_geologyclipped_3.set('fieldImages', {'ROCK_GROUP': '', 'NAME': '', });
lyr_geomorphologyclipped_4.set('fieldImages', {'NAME': '', 'TYPE1': '', 'TYPE2': '', });
lyr_parassala_wards_5.set('fieldImages', {'ward_no': 'TextEdit', 'ward_name': 'TextEdit', 'area_m2': 'TextEdit', });
lyr_clippedroad_6.set('fieldImages', {'NAME': 'TextEdit', 'Length': 'TextEdit', });
lyr_drainageclipped_7.set('fieldImages', {'ORDER1': 'Range', });
lyr_clippedjunction_8.set('fieldImages', {'Id': 'Range', 'Jn_Name': 'TextEdit', 'District': 'TextEdit', 'Name': 'TextEdit', });
lyr_soilclipped_2.set('fieldLabels', {'id': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'SOIL': 'no label', });
lyr_geologyclipped_3.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'no label', });
lyr_geomorphologyclipped_4.set('fieldLabels', {'NAME': 'no label', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_parassala_wards_5.set('fieldLabels', {'ward_no': 'no label', 'ward_name': 'no label', 'area_m2': 'no label', });
lyr_clippedroad_6.set('fieldLabels', {'NAME': 'no label', 'Length': 'no label', });
lyr_drainageclipped_7.set('fieldLabels', {'ORDER1': 'no label', });
lyr_clippedjunction_8.set('fieldLabels', {'Id': 'no label', 'Jn_Name': 'no label', 'District': 'no label', 'Name': 'no label', });
lyr_clippedjunction_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});