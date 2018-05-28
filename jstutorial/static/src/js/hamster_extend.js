odoo.define('jstutorial.HamsterExtend', function (require) {
    "use strict";

    /*
    * Patching an existing class
    * It is not common, but we sometimes need to
    * modify another class in place. The goal is to
    * have a mechanism to change a class and all
    * future/present instances. This is done by
    * using the include method:
    */

    var Hamster = require('jstutorial.Hamster');

    Hamster.include({
        sleep: function () {
            this._super.apply(this, arguments);
            console.log('zzzz');
        },
    });

    var hamster = new Hamster("Hamster", 4);
    hamster.sleep();
    /*
    * This is obviously a dangerous operation and
    * should be done with care. But with the way
    * Odoo is structured, it is sometimes necessary
    * in one addon to modify the behavior of a
    * widget/class defined in another addon. Note that
    * it will modify all instances of the class, even
    * if they have already been created.
    */
});