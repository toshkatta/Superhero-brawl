var Superhero = require('./superHero')

var Batman = (function () {
    var batman;
 
    function createBatman() {
        var superhero = new Superhero("Bruce Wayne", 10, 1000, 50, 100, "Batman");
        superhero.abilities = ['punch to the face', 'kick to the stomach', 'dropkick to the chest', 'throw batarangs', 'plant plastic explosive', 'hit with Batmobile'];
        return superhero;
    }
 
    return {
        getBatman: function () {
            if (!batman) {
                batman = createBatman();
            }
            return batman;
        }
    };
})();

module.exports = Batman;