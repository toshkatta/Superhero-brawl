function Human(name, strength, hitPoints, minDamage, maxDamage) {
    this.name = name;
    // Default stats for a human
    this.strength = strength ? strength : 1;
    this.hitPoints = hitPoints ? hitPoints : 100;
    this.minDamage = minDamage ? minDamage : 1;
    this.maxDamage = maxDamage ? maxDamage : 5;
}

Human.prototype = {
    attackEnemy(enemy) {
        var damage = this.strength * (Math.floor(Math.random() * this.maxDamage) + this.minDamage);
        enemy.hitPoints -= damage;
        return damage;
    }
}

module.exports = Human;