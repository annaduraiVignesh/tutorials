odoo.define('jstutorial.decount', function (require){
    "use strict";

    var core = require('web.core');
    var Widget = require('web.Widget');
    var rpc = require('web.rpc');

    var Decounter = Widget.extend({
        events: {
            'click button': '_onClick',
        },
        template: 'Decounter',
        xmlDependencies: ['/jstutorial/static/src/xml/count.xml'],
        init: function (parent, value) {
            this._super(parent);
            this.decount = value;
            this.band = "";
        },
        start: function () {
            this.band = this.$el.find(".login_title").first();
            core.bus.on('button_clicked', this, this._onButtonClicked);
        },
        _onButtonClicked: function (count) {
            console.log("Button clicked: Cross: " + (this.decount - count));
        },
        _onClick: function () {
            var self = this;
            this.decount--;
            this.$('.val').fadeOut();
            //this.$('.val').text(this.decount);
            //this.trigger('valuechange', this.count);
            console.log("Decountersdfsdf  sdf Clicked");
            console.log(this.$el.parent());
            console.log(this.band.find("h2").text());
            self.band.find("h2").fadeOut();
            rpc.query({
                route: '/jstutorial/hello',
                params: { name: self.band.find("h2").text()},
            }).then(function (data) {
                if (data) {
                    self.band.find("h2").text(JSON.parse(data).name);
                    self.band.find(".val").first().text(JSON.parse(data).year);
                    self.band.find("h2").fadeIn("slow");
                    self.$('.val').fadeIn("Slow");
                    console.log(data);
                }else {
                    console.log("sdjflsjdfl");
                }
            });
        },
    });

    var decounter = new Decounter(this, 5);
    decounter.appendTo(".login_form");

    return Decounter;
});