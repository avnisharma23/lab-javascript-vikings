// Soldier
class Soldier {
    constructor(health,strength){
        this.health = health;
        this.strength = strength;
        
    }
    attack()
    {
        return this.strength;
    }

    receiveDamage(thedamage)
    {
        this.health = this.health - thedamage;
    }

}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength);
        this.name=name;
    }
    battleCry()
    {
        return "Odin Owns You All!";
    }
    receiveDamage(theDamage)
    {
        this.health = this.health - theDamage;
        if(this.health > 0)
        {
            return `${this.name} has received ${theDamage} points of damage`;
        }
        else
        {
            return `${this.name} has died in act of combat`;
        }
    }
}



// Saxon
class Saxon extends Soldier
{
   constructor(health,strength){
    super(health,strength);
    //this.name = name;
   }
   receiveDamage(theDamage)
   {
    this.health = this.health - theDamage;
    if(this.health > 0)
    {
        return `A Saxon has received ${theDamage} points of damage`;
    }
    else
    {
        return `A Saxon has died in combat`;
    }
   }
}

// War
class War
{
    constructor(vikingArmy = [],saxonArmy = []){
       this.vikingArmy = vikingArmy;
       this.saxonArmy = saxonArmy;
    }
    addViking(viking)
    {
        vikingArmy.push(viking);
    }
    addSaxon(saxon)
    {
        saxonArmy.push(saxon);
    }
    vikingAttack()
    {
       
    }
}


