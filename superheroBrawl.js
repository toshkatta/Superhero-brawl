var Batman = require('./batman');
var Superman = require('./superman');

var batman = Batman.getBatman();
var superman = Superman.getSuperman();
var round = 1;

function fight(superhero1, superhero2) {
    console.log(superhero1.superheroName + " uses " + superhero1.abilities[Math.floor(Math.random() * superhero1.abilities.length)] + " to attack " + superhero2.superheroName + " and deals " + superhero1.attackEnemy(superhero2) + " damage to him.")
}

function endRound(superhero1, superhero2) {
    console.log("After round " + round + " " + superhero1.superheroName + " has " + superhero1.hitPoints + " hit points left and " + superhero2.superheroName + " has " + superhero2.hitPoints + " hit points left.");
    round++;
}

function endFight(superhero1, superhero2) {
    console.log(superhero1.superheroName + " got knocked out and cannot continue the fight.");
    console.log(superhero2.superheroName + " is victorious and proceeds to bench pressing.")
}

console.log("Last week on Monday Batman and Superman went to the same gym. There was only one bench available at the time and since Monday is the International Chest Day and both of them lead very busy lifestyles they got in a fight about who should use the bench first. This is a pokemon inspired representation of how it went down.")
console.log(); // empty line

while (batman.hitPoints > 0 && superman.hitPoints > 0) {
    console.log("Round " + round);
    fight(batman, superman);
    if (superman.hitPoints > 0) {
        fight(superman, batman);
    }

    if (batman.hitPoints > 0 && superman.hitPoints > 0) {
    endRound(batman, superman);
    console.log(); // empty line
    } else {
        if (batman.hitPoints <= 0) {
            endFight(batman, superman)
        } else {
            endFight(superman, batman)
        }
    }
}