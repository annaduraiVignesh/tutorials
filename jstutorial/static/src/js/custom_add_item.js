odoo.define("custom_button.CustomAddItem", function (require) {
	"use strict";

	var Widget = require('web.Widget');

	var CustomAddItem = Widget.extend({
		start: function (parent, value) {
            if($(.novo_custom_add)){
            	$(".o_field_x2many_list_row_add").find("a").text("Add a " + $(".novo_custom_add").text());
            }
        },
	});

	var customAddItem = new CustomAddItem();
	customAddItem.appendTo("body");
})