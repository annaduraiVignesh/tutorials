odoo.define("jstutorial.MapView", function (require) {
    "user strict";

    var AbstractController = require('web.AbstractController');
    var AbstractModel = require('web.AbstractModel');
    var AbstractRenderer = require('web.AbstractRenderer');
    var AbstractView = require('web.AbstractView');

    var MapController = AbstractController.extend({});
    var MapRenderer = AbstractRenderer.extend({});
    var MapModel = AbstractModel.extend({});

    var MapView = AbstractView.extend({
        config: {
            Model: MapModel,
            Controller: MapController,
            Renderer: MapRenderer,
        },
    });

    /**
     * add mapView to the view_registry
     */
    var viewRegistry = require('web.view_registry');

    viewRegistry.add('map', MapView);
});