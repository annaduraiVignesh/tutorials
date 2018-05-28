odoo.define('jstutorial.Dog', ['jstutorial.Animal'], function (require){
    "use strict";

    /*
    * Inheritance
    * It is convenient to be able to inherit an
    * existing class. This is simply done by using
    * the extend method on the superclass. When a
    * method is called, the framework will secretly
    * rebind a special method: _super to the currently
    * called method. This allows us to use this._super
    * whenever we need to call a parent method.
    */
    var Animal = require('jstutorial.Animal');

    var Dog = Animal.extend({
        init: function (name,hunger,speed) {
           this._super(name,hunger);
           this.speed = speed;
        },
        move: function () {
            this.bark();
            this._super.apply(this, arguments);
        },
        bark: function () {
           console.log('woof');
        },
        print: function () {
            console.log('Position: ' + this.x + ', name: ' +  this.name + ', hunger: ' + this.hunger + ', speed: ' + this.speed);
        },
    });
    var dog = new Dog("Kitty", 5, 3);
    dog.print();
    dog.eat();
    dog.move();
    dog.print();
});
