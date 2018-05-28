odoo.define('jstutorial.Animal', function (require){
    "use strict";

    /**
     * Class System
     * Odoo was developped before ECMAScript 6 classes
     * were available. In Ecmascript 5, the standard way
     * to define a class is to define a function and to
     * add methods on its prototype object. This is fine,
     * but it is slightly complex when we want to use
     * inheritance, mixins.
     *
     * For these reasons, Odoo decided to use its own
     * class system, inspired by John Resig. The base
     * Class is located in web.Class, in the file class.js.
     */

    /**
     * Creating a subclass
     * Let us discuss how classes are created. The main
     * mechanism is to use the extend method (this is
     * more or less the equivalent of extend in ES6 classes).
     */

    var Class = require('web.Class');

    var Animal = Class.extend({
        init: function (name,hunger) {
           this.x = 0;
           this.name = name;
           this.hunger = hunger;
        },
        move: function () {
           this.x = this.x + 1;
           this.hunger = this.hunger + 1;
           console.log('move');
        },
        eat: function () {
           this.hunger = this.hunger - 1;
           console.log('eat');
        },
        print: function () {
            console.log('Position: ' + this.x + ', name: ' +  this.name + ', hunger: ' + this.hunger);
        },
    });

    return Animal;

    /**
     * You have to return the classes that you might
     * extend in other modules.
     */

    /*
     * In this example, the init function is the
     * constructor. It will be called when an instance
     * is created. Making an instance is done by using
     * the new keyword.
     */
});