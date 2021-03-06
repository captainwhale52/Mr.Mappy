﻿//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMViewTemplate: string = '';
FMViewTemplate +=   '<div id="fm-view-body" class="panel panel-primary">';
// Panel Heading Start
FMViewTemplate +=       '<div class="panel-heading">';
FMViewTemplate +=           '<div class="panel-title nav-title"><%= title %></div>';
FMViewTemplate +=           '<div class="btn-group nav-primary" role="group" aria-label="nav-primary">';
FMViewTemplate +=               '<div id="fm-view-slider"></div>';
//FMViewTemplate +=               '<button type="button" class="btn btn-default"><%= list %></button>';
//FMViewTemplate +=               '<button type="button" class="btn btn-default"><%= map %></button>';
FMViewTemplate +=           '</div>';
FMViewTemplate +=           '<div class="btn-group nav-secondary" role="group" aria-label="nav-secondary">';
FMViewTemplate +=               '<button type="button" class="btn btn-default"><span class="glyphicon glyphicon-tasks"></span> <%= menu %></button>';
FMViewTemplate +=           '</div>';
FMViewTemplate +=           '<div class="clear" />';
FMViewTemplate +=       '</div>';
// Panel Body Start
FMViewTemplate +=       '<div id="fm-view-map">';
FMViewTemplate +=           '<div id="leaflet-view-ui"></div>';
FMViewTemplate +=           '<div id="leaflet-view-map"></div>';
FMViewTemplate +=           '<div id="leaflet-view-msg"></div>';
FMViewTemplate +=           '<div id="leaflet-view-galleria">';
FMViewTemplate +=           '</div>';
FMViewTemplate +=       '</div>';
FMViewTemplate +=   '</div>';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMUIInfoLayerTemplate =     '';
FMUIInfoLayerTemplate +=        '<div class="ui-header"><%= header %></div>';
FMUIInfoLayerTemplate +=            '<div class="ui-body">';
FMUIInfoLayerTemplate +=                '<form class="form-horizontal">';
// item-info-id
FMUIInfoLayerTemplate +=                    '<div class="form-group">';
FMUIInfoLayerTemplate +=                        '<label for="item-info-id" class="col-xs-3 control-label">#id</label>';
FMUIInfoLayerTemplate +=                        '<div class="col-xs-9">';
FMUIInfoLayerTemplate +=                            '<input type="text" class="form-control" placeholder="" id="item-info-id" value="<%= id %>" readonly>';
FMUIInfoLayerTemplate +=                        '</div>';
FMUIInfoLayerTemplate +=                    '</div>';
// item-info-name
FMUIInfoLayerTemplate +=                    '<div class="form-group">';
FMUIInfoLayerTemplate +=                        '<label for="item-info-name" class="col-xs-3 control-label">Name</label>';
FMUIInfoLayerTemplate +=                        '<div class="col-xs-9">';
FMUIInfoLayerTemplate +=                            '<input type="text" class="form-control" placeholder="" id="item-info-name" value="<%= name %>">';
FMUIInfoLayerTemplate +=                        '</div>';
FMUIInfoLayerTemplate +=                    '</div>';
// item-info-desc
FMUIInfoLayerTemplate +=                    '<div class="form-group">';
FMUIInfoLayerTemplate +=                        '<label for="item-info-desc" class="col-xs-3 control-label">Description</label>';
FMUIInfoLayerTemplate +=                         '<div class="col-xs-9">';
FMUIInfoLayerTemplate +=                            '<input type="text" class="form-control" placeholder="" id="item-info-desc" value="<%= desc %>">';
FMUIInfoLayerTemplate +=                        '</div>';
FMUIInfoLayerTemplate +=                    '</div>';
// item-info-type
FMUIInfoLayerTemplate += '<div class="form-group">';
FMUIInfoLayerTemplate += '<label for="item-info-type" class="col-xs-3 control-label">Type</label>';
FMUIInfoLayerTemplate += '<div class="col-xs-9">';
FMUIInfoLayerTemplate += '<select id="item-info-type" class="selectpicker">';
//FMUIInfoLayerTemplate += '<optgroup label="None">';
//FMUIInfoLayerTemplate += '<option data-type="0" data-sort="0">None</option>';
//FMUIInfoLayerTemplate += '</optgroup>';
FMUIInfoLayerTemplate += '<optgroup label="Event">';
FMUIInfoLayerTemplate += '<% _.each(sort1, function (sort) { %>';
FMUIInfoLayerTemplate += '<option data-type="1" data-sort="<%= sort.get("id") %>"><%= sort.get("name") %></option>';
FMUIInfoLayerTemplate += '<% }); %>';
FMUIInfoLayerTemplate += '</optgroup>';
FMUIInfoLayerTemplate += '<optgroup label="Organization">';
FMUIInfoLayerTemplate += '<% _.each(sort2, function (sort) { %>';
FMUIInfoLayerTemplate += '<option data-type="2" data-sort="<%= sort.get("id") %>"><%= sort.get("name") %></option>';
FMUIInfoLayerTemplate += '<% }); %>';
FMUIInfoLayerTemplate += '</optgroup>';
FMUIInfoLayerTemplate += '<optgroup label="Donor">';
FMUIInfoLayerTemplate += '<% _.each(sort3, function (sort) { %>';
FMUIInfoLayerTemplate += '<option data-type="3" data-sort="<%= sort.get("id") %>"><%= sort.get("name") %></option>';
FMUIInfoLayerTemplate += '<% }); %>';
FMUIInfoLayerTemplate += '</optgroup>';
FMUIInfoLayerTemplate += '</select>';
FMUIInfoLayerTemplate += '</div>';
FMUIInfoLayerTemplate += '</div>';
// item-info-amount
FMUIInfoLayerTemplate +=                    '<div class="form-group">';
FMUIInfoLayerTemplate +=                        '<label for="item-info-amount" class="col-xs-3 control-label">Money</label>';
FMUIInfoLayerTemplate +=                        '<div class="col-xs-9">';
FMUIInfoLayerTemplate +=                            '<div class="input-group">';
FMUIInfoLayerTemplate +=                                '<input type="text" class="form-control" placeholder="" id="item-info-amount" value="<%= amount %>" readonly />';
FMUIInfoLayerTemplate +=                                '<span class="input-group-addon">$</span>';
FMUIInfoLayerTemplate +=                           '</div>';
FMUIInfoLayerTemplate +=                        '</div>';
FMUIInfoLayerTemplate +=                    '</div>';
// item-info-lat
FMUIInfoLayerTemplate +=                    '<div class="form-group">';
FMUIInfoLayerTemplate +=                        '<label for="item-info-lat" class="col-xs-3 control-label">Latitude</label>';
FMUIInfoLayerTemplate +=                        '<div class="col-xs-9">';
FMUIInfoLayerTemplate +=                            '<div class="input-group">';
FMUIInfoLayerTemplate +=                                '<input type="text" class="form-control" placeholder="" id="item-info-lat" value="<%= lat %>">';
FMUIInfoLayerTemplate +=                                '<span class="input-group-addon">°</span>';
FMUIInfoLayerTemplate +=                            '</div>';
FMUIInfoLayerTemplate +=                        '</div>';
FMUIInfoLayerTemplate +=                    '</div>';
// item-info-lng    
FMUIInfoLayerTemplate +=                    '<div class="form-group">';
FMUIInfoLayerTemplate +=                        '<label for="item-info-lng" class="col-xs-3 control-label">Longitude</label>';
FMUIInfoLayerTemplate +=                        '<div class="col-xs-9">';
FMUIInfoLayerTemplate +=                            '<div class="input-group">';
FMUIInfoLayerTemplate +=                                '<input type="text" class="form-control" placeholder="" id="item-info-lng" value="<%= lng %>">';
FMUIInfoLayerTemplate +=                                '<span class="input-group-addon">°</span>';
FMUIInfoLayerTemplate +=                            '</div>';
FMUIInfoLayerTemplate +=                        '</div>';
FMUIInfoLayerTemplate +=                    '</div>';
// item-info-date
FMUIInfoLayerTemplate +=                    '<div class="form-group">';
FMUIInfoLayerTemplate +=                        '<label for="item-info-date" class="col-xs-3 control-label">Date</label>';
FMUIInfoLayerTemplate +=                        '<div class="col-xs-9">';
FMUIInfoLayerTemplate +=                            '<div class="input-group date" id="item-info-date-picker">';
FMUIInfoLayerTemplate +=                                '<input type="text" class="form-control" id="item-info-date" value="<%= date %>" />';
FMUIInfoLayerTemplate +=                                '<span class="input-group-addon input-group-addon-click" id="item-info-date-select"></span>';
FMUIInfoLayerTemplate +=                            '</div>';
FMUIInfoLayerTemplate +=                        '</div>';
FMUIInfoLayerTemplate +=                    '</div>';
// item-info-update
FMUIInfoLayerTemplate +=                    '<div class="form-group">';
FMUIInfoLayerTemplate +=                        '<label for="item-info-reg" class="col-xs-3 control-label">Updated</label>';
FMUIInfoLayerTemplate +=                        '<div class="col-xs-9">';
FMUIInfoLayerTemplate +=                            '<input type="text" class="form-control" placeholder="" id="item-info-reg" value="<%= update %>" readonly>';
FMUIInfoLayerTemplate +=                        '</div>';
FMUIInfoLayerTemplate +=                    '</div>';
// item-info-btn-edit
FMUIInfoLayerTemplate +=                    '<button id="item-info-btn-edit" type="button" class="btn btn-default col-xs-6"><span class="glyphicon glyphicon-ok"></span> Save</button>';
// item-info-btn-delete
FMUIInfoLayerTemplate +=                    '<button id="item-info-btn-delete" type="button" class="btn btn-default col-xs-6"><span class="glyphicon glyphicon-remove"></span> Delete</button>';
FMUIInfoLayerTemplate +=                '<div style="clear:both;"/>'
FMUIInfoLayerTemplate +=            '</form>';
FMUIInfoLayerTemplate += '</div>';


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMUIAddLayerTemplate = '';
FMUIAddLayerTemplate += '<div class="ui-header"><%= header %></div>';
FMUIAddLayerTemplate += '<div class="ui-body">';
FMUIAddLayerTemplate += '<form class="form-horizontal">';
// item-info-name
FMUIAddLayerTemplate += '<div class="form-group">';
FMUIAddLayerTemplate += '<label for="item-info-name" class="col-xs-3 control-label">Name</label>';
FMUIAddLayerTemplate += '<div class="col-xs-9">';
FMUIAddLayerTemplate += '<input type="text" class="form-control" placeholder="" id="item-info-name" value="<%= name %>">';
FMUIAddLayerTemplate += '</div>';
FMUIAddLayerTemplate += '</div>';
// item-info-desc
FMUIAddLayerTemplate += '<div class="form-group">';
FMUIAddLayerTemplate += '<label for="item-info-desc" class="col-xs-3 control-label">Description</label>';
FMUIAddLayerTemplate += '<div class="col-xs-9">';
FMUIAddLayerTemplate += '<input type="text" class="form-control" placeholder="" id="item-info-desc" value="<%= desc %>">';
FMUIAddLayerTemplate += '</div>';
FMUIAddLayerTemplate += '</div>';
// item-info-type
FMUIAddLayerTemplate += '<div class="form-group">';
FMUIAddLayerTemplate += '<label for="item-info-type" class="col-xs-3 control-label">Type</label>';
FMUIAddLayerTemplate += '<div class="col-xs-9">';
FMUIAddLayerTemplate += '<select id="item-info-type" class="selectpicker">';
FMUIAddLayerTemplate += '<optgroup label="None">';
FMUIAddLayerTemplate += '<option data-type="0" data-sort="0">None</option>';
FMUIAddLayerTemplate += '</optgroup>';
FMUIAddLayerTemplate += '<optgroup label="Event">';
FMUIAddLayerTemplate += '<% _.each(sort1, function (sort) { %>';
FMUIAddLayerTemplate += '<option data-type="1" data-sort="<%= sort.get("id") %>"><%= sort.get("name") %></option>';
FMUIAddLayerTemplate += '<% }); %>';
FMUIAddLayerTemplate += '</optgroup>';
FMUIAddLayerTemplate += '<optgroup label="Organization">';
FMUIAddLayerTemplate += '<% _.each(sort2, function (sort) { %>';
FMUIAddLayerTemplate += '<option data-type="2" data-sort="<%= sort.get("id") %>"><%= sort.get("name") %></option>';
FMUIAddLayerTemplate += '<% }); %>';
FMUIAddLayerTemplate += '</optgroup>';
FMUIAddLayerTemplate += '<optgroup label="Donor">';
FMUIAddLayerTemplate += '<% _.each(sort3, function (sort) { %>';
FMUIAddLayerTemplate += '<option data-type="3" data-sort="<%= sort.get("id") %>"><%= sort.get("name") %></option>';
FMUIAddLayerTemplate += '<% }); %>';
FMUIAddLayerTemplate += '</optgroup>';
FMUIAddLayerTemplate += '</select>';
FMUIAddLayerTemplate += '</div>';
FMUIAddLayerTemplate += '</div>';

// item-info-date
FMUIAddLayerTemplate += '<div class="form-group">';
FMUIAddLayerTemplate +=     '<label for="item-info-date" class="col-xs-3 control-label">Date</label>';
FMUIAddLayerTemplate +=     '<div class="col-xs-9">';
FMUIAddLayerTemplate +=         '<div class="input-group date" id="item-info-date-picker">';
FMUIAddLayerTemplate +=             '<input type="text" class="form-control" id="item-info-date" value="<%= date %>">';
FMUIAddLayerTemplate +=             '<span class="input-group-addon input-group-addon-click" id="item-info-date-select"></span>';
FMUIAddLayerTemplate +=         '</div>';
FMUIAddLayerTemplate +=     '</div>';
FMUIAddLayerTemplate += '</div>';

// item-info-lat
FMUIAddLayerTemplate += '<div class="form-group">';
FMUIAddLayerTemplate += '<label for="item-info-lat" class="col-xs-3 control-label">Latitude</label>';
FMUIAddLayerTemplate += '<div class="col-xs-9">';
FMUIAddLayerTemplate += '<div class="input-group">';
FMUIAddLayerTemplate += '<input type="text" class="form-control" placeholder="" id="item-info-lat" value="<%= lat %>">';
FMUIAddLayerTemplate += '<span class="input-group-addon">°</span>';
FMUIAddLayerTemplate += '</div>';
FMUIAddLayerTemplate += '</div>';
FMUIAddLayerTemplate += '</div>';
// item-info-lng    
FMUIAddLayerTemplate += '<div class="form-group">';
FMUIAddLayerTemplate += '<label for="item-info-lng" class="col-xs-3 control-label">Longitude</label>';
FMUIAddLayerTemplate += '<div class="col-xs-9">';
FMUIAddLayerTemplate += '<div class="input-group">';
FMUIAddLayerTemplate += '<input type="text" class="form-control" placeholder="" id="item-info-lng" value="<%= lng %>">';
FMUIAddLayerTemplate += '<span class="input-group-addon">°</span>';
FMUIAddLayerTemplate += '</div>';
FMUIAddLayerTemplate += '</div>';
FMUIAddLayerTemplate += '</div>';
// item-info-btn-edit
FMUIAddLayerTemplate += '<button id="item-info-btn-edit" type="button" class="btn btn-default col-xs-6"><span class="glyphicon glyphicon-ok"></span> Save</button>';
// item-info-btn-delete
FMUIAddLayerTemplate += '<button id="item-info-btn-delete" type="button" class="btn btn-default col-xs-6"><span class="glyphicon glyphicon-remove"></span> Cancel</button>';
FMUIAddLayerTemplate += '<div style="clear:both;"/>'
FMUIAddLayerTemplate += '</form>';
FMUIAddLayerTemplate += '</div>';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMViewUIDataLayerTemplate =   '';
FMViewUIDataLayerTemplate +=      '<div class="ui-header"><%= header %></div>'
FMViewUIDataLayerTemplate +=      '<div class="ui-body">';
FMViewUIDataLayerTemplate +=          '<button type="button" data-toggle="collapse" data-target="#date-add-panel" class="btn btn-default col-xs-12"><span class="glyphicon glyphicon-plus"></span> Add New Data</button>';
FMViewUIDataLayerTemplate +=          '<div class="collapse" id="date-add-panel">';
FMViewUIDataLayerTemplate +=          '</div>';
FMViewUIDataLayerTemplate += '</div>';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMViewUIThresholdLayerTemplate =    '';
FMViewUIThresholdLayerTemplate +=       '<div class="ui-header"><%= header %></div>'
FMViewUIThresholdLayerTemplate +=       '<div class="ui-body">';
FMViewUIThresholdLayerTemplate +=           '<button type="button" data-toggle="collapse" data-target="#threshold-add-panel" class="btn btn-default col-xs-12"><span class="glyphicon glyphicon-plus"></span> Add New Threshold</button>';
FMViewUIThresholdLayerTemplate +=               '<div class="collapse" id="threshold-add-panel">';
FMViewUIThresholdLayerTemplate +=           '</div>';
FMViewUIThresholdLayerTemplate +=       '</div>';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMViewUIDataLayerDeleteTemplate = '';
FMViewUIDataLayerDeleteTemplate = '<button type="button" class="btn btn-default btn-table"><span class="glyphicon glyphicon-remove"></span></button>';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMViewUIDataLayerAddTemplate = '';
FMViewUIDataLayerAddTemplate = '<button type="button" class="btn btn-default btn-table"><span class="glyphicon glyphicon-plus"></span></button>';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMViewUILayerPictureTemplate =  '';
FMViewUILayerPictureTemplate +=     '<div class="ui-header"><%= header %></div>'
FMViewUILayerPictureTemplate +=     '<div class="ui-body ui-picture">';
FMViewUILayerPictureTemplate +=         '<button type="button" data-toggle="collapse" data-target="#picture-add-panel" class="btn btn-default col-xs-12"><span class="glyphicon glyphicon-plus"></span> Add New Picture</button>';
FMViewUILayerPictureTemplate +=         '<div class="collapse" id="picture-add-panel">';
FMViewUILayerPictureTemplate +=         '</div>';
FMViewUILayerPictureTemplate += '</div>';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMViewUIPictureTemplate = '';
FMViewUIPictureTemplate += '<img class="picture-thumbnail" src="<%= url %>" />';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMUIPictureSelectTemplate = '';
FMUIPictureSelectTemplate += '<input class="fileupload" type="file" accept="image/*" capture="camera" />';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMUIPictureAddTemplate = '';
FMUIPictureAddTemplate = '<button type="button" class="btn btn-default btn-table"><span class="glyphicon glyphicon-plus"></span></button>';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMViewGalleryTemplate = '';
FMViewGalleryTemplate += '<button id="btn-galleria-close" type="button" class="btn btn-default btn-table"><span class="glyphicon glyphicon-remove-circle"></span> Close</button>';
FMViewGalleryTemplate += '<div class="galleria">';
FMViewGalleryTemplate += '<% _.each(pictures, function(picture) { %>';
FMViewGalleryTemplate += '<img data-id="<%= picture.get("id") %>" src="<%= dir %><%= picture.get ("url") %>" data-title="<%= picture.get ("name") %>" data-description="<%= moment(picture.get("date")).format(FMS.getDateTimeFormat()) %>" />';
FMViewGalleryTemplate += '<% }); %>';
FMViewGalleryTemplate += '</div>';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMViewLayerTemplate =   '';
FMViewLayerTemplate +=      '<div class="ui-header"><%= header %></div>';
FMViewLayerTemplate += '<div class="ui-body">';
FMViewLayerTemplate += '<button type="button" data-toggle="collapse" data-target="#layer-add-panel" class="btn btn-default col-xs-12"><span class="glyphicon glyphicon-plus"></span> Manage Layers</button>';
FMViewLayerTemplate += '<div class="collapse <%= isIn %>" id="layer-add-panel">';
FMViewLayerTemplate += '<div id="layer-add-grid"></div>';
FMViewLayerTemplate += '<div id="layer-list-grid"></div>';
FMViewLayerTemplate += '</div>';

FMViewLayerTemplate += '<div class="checkbox btn btn-negative col-xs-12 layer-checkbox layer-checkbox-header">';
FMViewLayerTemplate += '<label class="label-header"><input type="checkbox" id="check-unassigned-layer" data-sort="0" checked>Unassigned Layer Toggle</label>';
FMViewLayerTemplate += '</div>';

FMViewLayerTemplate += '<div class="checkbox btn btn-danger col-xs-12 layer-checkbox layer-checkbox-header">';
FMViewLayerTemplate += '<label class="label-header"><input type="checkbox" id="check-event-layer" checked>Event Layer Toggle</label>';
FMViewLayerTemplate += '<% _.each(sort1, function (sort) { %>';
FMViewLayerTemplate += '<div class="checkbox btn btn-danger col-xs-12 layer-checkbox">';
FMViewLayerTemplate += '<label><input type="checkbox" value= "" data-type="1" data-sort="<%= sort.get("id") %>"><%= sort.get("name") %> - <%= sort.get("desc") %></label>';
FMViewLayerTemplate += '</div>';
FMViewLayerTemplate += '<% }); %>';
FMViewLayerTemplate += '</div>';

FMViewLayerTemplate += '<div class="checkbox btn btn-success col-xs-12 layer-checkbox layer-checkbox-header">';
FMViewLayerTemplate += '<label class="label-header"><input type="checkbox" id="check-organization-layer" checked>Organization Layer Toggle</label>';
FMViewLayerTemplate += '<% _.each(sort2, function (sort) { %>';
FMViewLayerTemplate += '<div class="checkbox btn btn-success col-xs-12 layer-checkbox">';
FMViewLayerTemplate += '<label><input type="checkbox" value= "" data-type="2" data-sort="<%= sort.get("id") %>"><%= sort.get("name") %> - <%= sort.get("desc") %></label>';
FMViewLayerTemplate += '</div>';
FMViewLayerTemplate += '<% }); %>';
FMViewLayerTemplate += '</div>';

FMViewLayerTemplate += '<div class="checkbox btn btn-primary col-xs-12 layer-checkbox layer-checkbox-header">';
FMViewLayerTemplate += '<label class="label-header"><input type="checkbox" id="check-donor-layer" checked>Donor Layer Toggle</label>';
FMViewLayerTemplate += '<% _.each(sort3, function (sort) { %>';
FMViewLayerTemplate += '<div class="checkbox btn btn-primary col-xs-12 layer-checkbox">';
FMViewLayerTemplate += '<label><input type="checkbox" value= "" data-type="3" data-sort="<%= sort.get("id") %>"><%= sort.get("name") %> - <%= sort.get("desc") %></label>';
FMViewLayerTemplate += '</div>';
FMViewLayerTemplate += '<% }); %>';
FMViewLayerTemplate += '</div>';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMViewUIDataTemplate = '';
FMViewUIDataTemplate += '<div class="ui-header"><%= header %></div>'
FMViewUIDataTemplate += '<div class="ui-body">';
FMViewUIDataTemplate += '<button type="button" data-toggle="collapse" data-target="#data-add-panel" class="btn btn-default col-xs-12"><span class="glyphicon glyphicon-plus"></span> Add New Data</button>';
FMViewUIDataTemplate += '<div class="collapse" id="data-add-panel">';
FMViewUIDataTemplate += '</div>';
FMViewUIDataTemplate += '</div>';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var FMViewUIDataTemplateDonor = '';
FMViewUIDataTemplateDonor += '<div class="ui-header"><%= header %></div>'
FMViewUIDataTemplateDonor += '<div class="ui-body">';
FMViewUIDataTemplateDonor += 'Donor cannot get donation from others.';
FMViewUIDataTemplateDonor += '</div>';
FMViewUIDataTemplateDonor += '</div>';