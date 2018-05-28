odoo.define('jstutorial.Hamster', function (require){
    "use strict";

    /*
    * Mixins
    * The odoo Class system does not support multiple
    * inheritance, but for those cases when we need to
    * share some behaviour, we have a mixin system: the
    * extend method can actually take an arbitrary number
    * of arguments, and will combine all of them in the
    * new class.
    */

    var Animal = require('jstutorial.Animal');
    var DanceMixin = {
        dance: function () {
            console.log('dancing... with michael');
        },
    };

    var Hamster = Animal.extend(DanceMixin, {
        sleep: function () {
            console.log('sleeping');
        },
    });

    var hamster = new Hamster("Hamster", 4);
    hamster.print();
    hamster.eat();
    hamster.move();
    hamster.print();
    hamster.dance();
    hamster.sleep();

    //We return this Hamster because it might be used.
    return Hamster;

    /*
    * In this example, the Hamster class is a subclass
    * of Animal, but it also mix the DanceMixin in.
    */
});