odoo.define('jstutorial.MyWidget', function (require) {
    "use strict";

    var Widget = require('web.Widget');
    var Counter = require('jstutorial.Count');

    var MyWidget = Widget.extend({
        xmlDependencies: ['/jstutorial/static/src/xml/count.xml'],
        custom_events: {
            'valuechange': '_onValueChange',
            'open_record': '_onOpenRecord',
        },
        start: function () {
            this.counter = new Counter(this,4);
            //this.counter.on('valuechange', this, this._onValueChange);
            var def = this.counter.appendTo(this.$el);
            console.log("Mywidget is up and running.")
            return $.when(def, this._super.apply(this, arguments)).done(function () {
                console.log("Counter done");
            });
        },
        _onValueChange: function (event) {
            console.log("Counter changed, new value awesome: " + event.data.val);
        },
        _onOpenRecord: function (event) {
            var id = event.data.val;
            console.log("Record opened: " + id);
            // do something with the event.
        },
        log: function () {
            console.log(this.$el.parent());
        },
    });

    // in Counter widget, we need to call the trigger method:
    // Create the instance
    var myWidget = new MyWidget(this);
    // Render and insert into DOM
    myWidget.appendTo(".login_form");
    myWidget.log();
    return MyWidget;

    /*
    * **Warning**
    * the use of this event system is discouraged,
    * we plan to replace each trigger method by the
    * trigger_up method from the extended event system
    */
});