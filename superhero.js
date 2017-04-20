var extend = require('./extend');
var Human = require('./human')

function Superhero(name, strength, hitPoints, minDamage, maxDamage, superheroName) {
    Human.call(this, name, strength, hitPoints, minDamage, maxDamage);

    this.superheroName = superheroName;
    this.abilities = [];
}

extend(Superhero, Human);

module.exports = Superhero;