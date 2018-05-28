odoo.define('jstutorial.Count', function (require){
    "use strict";

    var Widget = require('web.Widget');
    var core = require('web.core');

    var CountIncrement = Widget.extend({
        className: 'login_increment',
        attributes: {'data-key': 'hello'},
        events: {
            'click button': '_onClick',
        },
        template: 'CountIncrement',
        xmlDependencies: ['/jstutorial/static/src/xml/count.xml'],
        init: function (parent, value) {
            this._super(parent);
            this.count = value;
            this.className = 'login_increment';
            console.log("CountIncrement Initialised, count:" + this.count);
        },
        /*start: function () {
            this._super.apply(this, arguments)
        },*/
        _onClick: function () {
            this.count++;
            this.$('.val').text(this.count);
            //this.trigger('valuechange', this.count);
            this.trigger_up('valuechange', {'val':this.count});
            this.trigger_up('open_record', {'val': this.count*2});
            core.bus.trigger('button_clicked', this.count);
            console.log("Increment Clicked");
            console.log(this.$el.parent());
        },
    });
    /*
    * For this example, assume that the template some.template
    * (and is properly loaded: the template is in a file,
    * which is properly defined in the qweb key in the module
    * manifest) is given by:
    ***
    * For some reason js couldn't find the template inside
    * static/src/xml/* . That is why xmlDependencies has been
    * used above.
    */
    /*// Create the instance
    var counter = new CountIncrement(this,4);
    // Render and insert into DOM
    counter.appendTo(".login_form");*/

    return CountIncrement;

    /*
    * This example illustrates a few of the features of
    * the Widget class, including the event system,
    * the template system, the constructor with the
    * initial parent argument.
    */
});
