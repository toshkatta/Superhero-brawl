var Superhero = require('./superHero')

var Superman = (function () {
    var superman;
 
    function createSuperman() {
        var superhero = new Superhero("Clark Kent", 12, 1500, 2, 200, "Superman");
        superhero.abilities = ['punch to the face', 'kick to the stomach', 'dropkick to the chest', 'heat vision', 'kinetic energy explosion'];
        return superhero;
    }
 
    return {
        getSuperman: function () {
            if (!superman) {
                superman = createSuperman();
            }
            return superman;
        }
    };
})();

module.exports = Superman;