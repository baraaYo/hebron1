ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:28191").setExtent([158091.362629, 104264.380825, 160321.904333, 105282.497053]);
var wms_layers = [];

var format_Building_0 = new ol.format.GeoJSON();
var features_Building_0 = format_Building_0.readFeatures(json_Building_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_Building_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_0.addFeatures(features_Building_0);
var lyr_Building_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Building_0, 
                style: style_Building_0,
                interactive: true,
    title: 'Building<br />\
    <img src="styles/legend/Building_0_0.png" /> <br />'
        });
var format_mo_1 = new ol.format.GeoJSON();
var features_mo_1 = format_mo_1.readFeatures(json_mo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_mo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mo_1.addFeatures(features_mo_1);cluster_mo_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_mo_1
});
var lyr_mo_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_mo_1, 
                style: style_mo_1,
                interactive: true,
                title: '<img src="styles/legend/mo_1.png" /> mo'
            });
var format_school_2 = new ol.format.GeoJSON();
var features_school_2 = format_school_2.readFeatures(json_school_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_school_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_school_2.addFeatures(features_school_2);
var lyr_school_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_school_2, 
                style: style_school_2,
                interactive: true,
                title: '<img src="styles/legend/school_2.png" /> school'
            });
var format_points_3 = new ol.format.GeoJSON();
var features_points_3 = format_points_3.readFeatures(json_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_3.addFeatures(features_points_3);
var lyr_points_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_points_3, 
                style: style_points_3,
                interactive: true,
                title: '<img src="styles/legend/points_3.png" /> points'
            });
var format_stret_4 = new ol.format.GeoJSON();
var features_stret_4 = format_stret_4.readFeatures(json_stret_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28191'});
var jsonSource_stret_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_stret_4.addFeatures(features_stret_4);
var lyr_stret_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_stret_4, 
                style: style_stret_4,
                interactive: true,
    title: 'stret<br />\
    <img src="styles/legend/stret_4_0.png" /> Internal<br />\
    <img src="styles/legend/stret_4_1.png" /> Local<br />\
    <img src="styles/legend/stret_4_2.png" /> Main<br />\
    <img src="styles/legend/stret_4_3.png" /> Other<br />\
    <img src="styles/legend/stret_4_4.png" /> Regional<br />'
        });

lyr_Building_0.setVisible(true);lyr_mo_1.setVisible(true);lyr_school_2.setVisible(true);lyr_points_3.setVisible(true);lyr_stret_4.setVisible(true);
var layersList = [lyr_Building_0,lyr_mo_1,lyr_school_2,lyr_points_3,lyr_stret_4];
lyr_Building_0.set('fieldAliases', {'Id': 'Id', 'TYPE': 'TYPE', });
lyr_mo_1.set('fieldAliases', {'Governorat': 'Governorat', 'CommunityN': 'CommunityN', 'Commercial': 'Commercial', 'Economic_A': 'Economic_A', 'x': 'x', 'y': 'y', 'LayerName_': 'LayerName_', 'LayerName1': 'LayerName1', });
lyr_school_2.set('fieldAliases', {'LayerName_': 'LayerName_', 'LayerName1': 'LayerName1', 'SchoolName': 'SchoolName', 'SchoolNa_1': 'SchoolNa_1', 'SchoolNa_2': 'SchoolNa_2', });
lyr_points_3.set('fieldAliases', {'osm_id': 'osm_id', 'timestamp': 'timestamp', 'name': 'name', 'type': 'type', });
lyr_stret_4.set('fieldAliases', {'LayerName_': 'LayerName_', 'LayerName1': 'LayerName1', 'Classifica': 'Classifica', 'Classifi_1': 'Classifi_1', 'RoadName_A': 'RoadName_A', 'RoadName_E': 'RoadName_E', 'ValueName_': 'ValueName_', 'ValueName1': 'ValueName1', 'RoadType_A': 'RoadType_A', 'RoadType_E': 'RoadType_E', 'Classifi_2': 'Classifi_2', 'Classifi_3': 'Classifi_3', 'RoadNameTe': 'RoadNameTe', 'RoadName_1': 'RoadName_1', 'Shape_Leng': 'Shape_Leng', 'InLine_FID': 'InLine_FID', 'SimLnFlag': 'SimLnFlag', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', });
lyr_Building_0.set('fieldImages', {'Id': 'Range', 'TYPE': 'TextEdit', });
lyr_mo_1.set('fieldImages', {'Governorat': 'TextEdit', 'CommunityN': 'TextEdit', 'Commercial': 'TextEdit', 'Economic_A': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'LayerName_': 'TextEdit', 'LayerName1': 'TextEdit', });
lyr_school_2.set('fieldImages', {'LayerName_': 'TextEdit', 'LayerName1': 'TextEdit', 'SchoolName': 'TextEdit', 'SchoolNa_1': 'TextEdit', 'SchoolNa_2': 'TextEdit', });
lyr_points_3.set('fieldImages', {'osm_id': '', 'timestamp': '', 'name': '', 'type': '', });
lyr_stret_4.set('fieldImages', {'LayerName_': 'TextEdit', 'LayerName1': 'TextEdit', 'Classifica': 'TextEdit', 'Classifi_1': 'TextEdit', 'RoadName_A': 'TextEdit', 'RoadName_E': 'TextEdit', 'ValueName_': 'TextEdit', 'ValueName1': 'TextEdit', 'RoadType_A': 'TextEdit', 'RoadType_E': 'TextEdit', 'Classifi_2': 'TextEdit', 'Classifi_3': 'TextEdit', 'RoadNameTe': 'TextEdit', 'RoadName_1': 'TextEdit', 'Shape_Leng': 'TextEdit', 'InLine_FID': 'TextEdit', 'SimLnFlag': 'Range', 'MaxSimpTol': 'TextEdit', 'MinSimpTol': 'TextEdit', });
lyr_Building_0.set('fieldLabels', {'Id': 'no label', 'TYPE': 'no label', });
lyr_mo_1.set('fieldLabels', {'Governorat': 'inline label', 'CommunityN': 'no label', 'Commercial': 'no label', 'Economic_A': 'no label', 'x': 'no label', 'y': 'no label', 'LayerName_': 'inline label', 'LayerName1': 'inline label', });
lyr_school_2.set('fieldLabels', {'LayerName_': 'inline label', 'LayerName1': 'no label', 'SchoolName': 'inline label', 'SchoolNa_1': 'no label', 'SchoolNa_2': 'inline label', });
lyr_points_3.set('fieldLabels', {'osm_id': 'no label', 'timestamp': 'no label', 'name': 'inline label', 'type': 'inline label', });
lyr_stret_4.set('fieldLabels', {'LayerName_': 'no label', 'LayerName1': 'no label', 'Classifica': 'no label', 'Classifi_1': 'inline label', 'RoadName_A': 'inline label', 'RoadName_E': 'inline label', 'ValueName_': 'no label', 'ValueName1': 'no label', 'RoadType_A': 'no label', 'RoadType_E': 'no label', 'Classifi_2': 'no label', 'Classifi_3': 'no label', 'RoadNameTe': 'no label', 'RoadName_1': 'no label', 'Shape_Leng': 'no label', 'InLine_FID': 'no label', 'SimLnFlag': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', });
lyr_stret_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});