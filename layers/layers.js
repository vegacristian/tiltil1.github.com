var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Faenasmineras_1 = new ol.format.GeoJSON();
var features_Faenasmineras_1 = format_Faenasmineras_1.readFeatures(json_Faenasmineras_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Faenasmineras_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Faenasmineras_1.addFeatures(features_Faenasmineras_1);
var lyr_Faenasmineras_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Faenasmineras_1, 
                style: style_Faenasmineras_1,
                interactive: true,
                title: '<img src="styles/legend/Faenasmineras_1.png" /> Faenas mineras'
            });
var format_LimiteTiltil_2 = new ol.format.GeoJSON();
var features_LimiteTiltil_2 = format_LimiteTiltil_2.readFeatures(json_LimiteTiltil_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimiteTiltil_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteTiltil_2.addFeatures(features_LimiteTiltil_2);
var lyr_LimiteTiltil_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteTiltil_2, 
                style: style_LimiteTiltil_2,
                interactive: true,
                title: '<img src="styles/legend/LimiteTiltil_2.png" /> Limite Tiltil'
            });
var format_Areasurbanas_3 = new ol.format.GeoJSON();
var features_Areasurbanas_3 = format_Areasurbanas_3.readFeatures(json_Areasurbanas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Areasurbanas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areasurbanas_3.addFeatures(features_Areasurbanas_3);
var lyr_Areasurbanas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areasurbanas_3, 
                style: style_Areasurbanas_3,
                interactive: true,
                title: '<img src="styles/legend/Areasurbanas_3.png" /> Areas urbanas'
            });
var format_Tranquesderelave_4 = new ol.format.GeoJSON();
var features_Tranquesderelave_4 = format_Tranquesderelave_4.readFeatures(json_Tranquesderelave_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tranquesderelave_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tranquesderelave_4.addFeatures(features_Tranquesderelave_4);
var lyr_Tranquesderelave_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tranquesderelave_4, 
                style: style_Tranquesderelave_4,
                interactive: true,
                title: '<img src="styles/legend/Tranquesderelave_4.png" /> Tranques de relave'
            });
var format_Ruta5_5 = new ol.format.GeoJSON();
var features_Ruta5_5 = format_Ruta5_5.readFeatures(json_Ruta5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ruta5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruta5_5.addFeatures(features_Ruta5_5);
var lyr_Ruta5_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ruta5_5, 
                style: style_Ruta5_5,
                interactive: true,
                title: '<img src="styles/legend/Ruta5_5.png" /> Ruta 5'
            });
var format_Residuosyrellenossanitarios_6 = new ol.format.GeoJSON();
var features_Residuosyrellenossanitarios_6 = format_Residuosyrellenossanitarios_6.readFeatures(json_Residuosyrellenossanitarios_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residuosyrellenossanitarios_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residuosyrellenossanitarios_6.addFeatures(features_Residuosyrellenossanitarios_6);
var lyr_Residuosyrellenossanitarios_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Residuosyrellenossanitarios_6, 
                style: style_Residuosyrellenossanitarios_6,
                interactive: true,
                title: '<img src="styles/legend/Residuosyrellenossanitarios_6.png" /> Residuos y rellenos sanitarios'
            });
var format_RedVial_7 = new ol.format.GeoJSON();
var features_RedVial_7 = format_RedVial_7.readFeatures(json_RedVial_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RedVial_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RedVial_7.addFeatures(features_RedVial_7);
var lyr_RedVial_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RedVial_7, 
                style: style_RedVial_7,
                interactive: true,
                title: '<img src="styles/legend/RedVial_7.png" /> Red Vial'
            });
var format_Procesosindustriales_8 = new ol.format.GeoJSON();
var features_Procesosindustriales_8 = format_Procesosindustriales_8.readFeatures(json_Procesosindustriales_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Procesosindustriales_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Procesosindustriales_8.addFeatures(features_Procesosindustriales_8);
var lyr_Procesosindustriales_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Procesosindustriales_8, 
                style: style_Procesosindustriales_8,
                interactive: true,
                title: '<img src="styles/legend/Procesosindustriales_8.png" /> Procesos industriales'
            });
var format_Poblados_9 = new ol.format.GeoJSON();
var features_Poblados_9 = format_Poblados_9.readFeatures(json_Poblados_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poblados_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblados_9.addFeatures(features_Poblados_9);
var lyr_Poblados_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Poblados_9, 
                style: style_Poblados_9,
                interactive: true,
                title: '<img src="styles/legend/Poblados_9.png" /> Poblados'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Faenasmineras_1.setVisible(true);lyr_LimiteTiltil_2.setVisible(true);lyr_Areasurbanas_3.setVisible(true);lyr_Tranquesderelave_4.setVisible(true);lyr_Ruta5_5.setVisible(true);lyr_Residuosyrellenossanitarios_6.setVisible(true);lyr_RedVial_7.setVisible(true);lyr_Procesosindustriales_8.setVisible(true);lyr_Poblados_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Faenasmineras_1,lyr_LimiteTiltil_2,lyr_Areasurbanas_3,lyr_Tranquesderelave_4,lyr_Ruta5_5,lyr_Residuosyrellenossanitarios_6,lyr_RedVial_7,lyr_Procesosindustriales_8,lyr_Poblados_9];
lyr_Faenasmineras_1.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_LimiteTiltil_2.set('fieldAliases', {'objectid': 'objectid', 'shape_leng': 'shape_leng', 'dis_elec': 'dis_elec', 'cir_sena': 'cir_sena', 'cod_comuna': 'cod_comuna', 'codregion': 'codregion', 'st_area_sh': 'st_area_sh', 'st_length_': 'st_length_', 'Region': 'Region', 'Comuna': 'Comuna', 'Provincia': 'Provincia', });
lyr_Areasurbanas_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'landuse': 'landuse', });
lyr_Tranquesderelave_4.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Ruta5_5.set('fieldAliases', {'ROL': 'ROL', 'CODIGO': 'CODIGO', 'NOMBRE': 'NOMBRE', 'SHAPE_LENG': 'SHAPE_LENG', 'CARPETAV': 'CARPETAV', 'SHAPE_Le_1': 'SHAPE_Le_1', });
lyr_Residuosyrellenossanitarios_6.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_RedVial_7.set('fieldAliases', {'ROL': 'ROL', 'CODIGO': 'CODIGO', 'NOMBRE': 'NOMBRE', 'SHAPE_LENG': 'SHAPE_LENG', 'CARPETAV': 'CARPETAV', 'SHAPE_Le_1': 'SHAPE_Le_1', });
lyr_Procesosindustriales_8.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', });
lyr_Poblados_9.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Comuna': 'Comuna', 'Provincia': 'Provincia', 'Hab_': 'Hab_', 'Region': 'Region', 'Este': 'Este', 'Norte': 'Norte', });
lyr_Faenasmineras_1.set('fieldImages', {'id': '', 'Nombre': '', });
lyr_LimiteTiltil_2.set('fieldImages', {'objectid': 'TextEdit', 'shape_leng': 'TextEdit', 'dis_elec': 'Range', 'cir_sena': 'Range', 'cod_comuna': 'Range', 'codregion': 'Range', 'st_area_sh': 'TextEdit', 'st_length_': 'TextEdit', 'Region': 'TextEdit', 'Comuna': 'TextEdit', 'Provincia': 'TextEdit', });
lyr_Areasurbanas_3.set('fieldImages', {'ogc_fid': 'Range', 'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'name': 'TextEdit', 'landuse': 'TextEdit', });
lyr_Tranquesderelave_4.set('fieldImages', {'id': '', 'Nombre': '', });
lyr_Ruta5_5.set('fieldImages', {'ROL': '', 'CODIGO': '', 'NOMBRE': '', 'SHAPE_LENG': '', 'CARPETAV': '', 'SHAPE_Le_1': '', });
lyr_Residuosyrellenossanitarios_6.set('fieldImages', {'id': '', 'Nombre': '', });
lyr_RedVial_7.set('fieldImages', {'ROL': '', 'CODIGO': '', 'NOMBRE': '', 'SHAPE_LENG': '', 'CARPETAV': '', 'SHAPE_Le_1': '', });
lyr_Procesosindustriales_8.set('fieldImages', {'id': '', 'Nombre': '', });
lyr_Poblados_9.set('fieldImages', {'Id': '', 'Nombre': '', 'Comuna': '', 'Provincia': '', 'Hab_': '', 'Region': '', 'Este': '', 'Norte': '', });
lyr_Faenasmineras_1.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_LimiteTiltil_2.set('fieldLabels', {'objectid': 'no label', 'shape_leng': 'no label', 'dis_elec': 'no label', 'cir_sena': 'no label', 'cod_comuna': 'no label', 'codregion': 'no label', 'st_area_sh': 'no label', 'st_length_': 'no label', 'Region': 'no label', 'Comuna': 'no label', 'Provincia': 'no label', });
lyr_Areasurbanas_3.set('fieldLabels', {'ogc_fid': 'no label', 'osm_id': 'no label', 'osm_way_id': 'no label', 'name': 'no label', 'landuse': 'no label', });
lyr_Tranquesderelave_4.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_Ruta5_5.set('fieldLabels', {'ROL': 'no label', 'CODIGO': 'no label', 'NOMBRE': 'no label', 'SHAPE_LENG': 'no label', 'CARPETAV': 'no label', 'SHAPE_Le_1': 'no label', });
lyr_Residuosyrellenossanitarios_6.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_RedVial_7.set('fieldLabels', {'ROL': 'no label', 'CODIGO': 'no label', 'NOMBRE': 'no label', 'SHAPE_LENG': 'no label', 'CARPETAV': 'no label', 'SHAPE_Le_1': 'no label', });
lyr_Procesosindustriales_8.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', });
lyr_Poblados_9.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Comuna': 'no label', 'Provincia': 'no label', 'Hab_': 'no label', 'Region': 'no label', 'Este': 'no label', 'Norte': 'no label', });
lyr_Poblados_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});