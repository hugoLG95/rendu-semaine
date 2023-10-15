class Pokemon {
    constructor(name,attack,defense,hp,luck){
this.name = name
this.attack = attack
this.defense = defense
this.hp = hp
this.luck = luck

    }

isLucky(){ Math.random()< this.luck
    console.log(Math.random()< this.luck)

}

   attackPokemon(defenseur)
   
   {



    let degats = this.attack - defenseur.defense;
    if (degats > 0 ) {
        defenseur.hp = defenseur.hp - degats;
    }
        console.log(this.name,"attaque",defenseur,"en lui infligeant",degats,"de degats.",defenseur,"lui reste",defenseur.hp,"point de vie") 
     
    
     

    }
}

let pikachu = new Pokemon("pikachu",40,20,100,0.8)
let bulbizarre = new Pokemon("bulbizarre",30,40,80,0.7)


while (pikachu.hp >= 0) {
    console.log("deux")
    pikachu.attackPokemon(bulbizarre)
    if (bulbizarre.hp<=0){
        console.log("bulbizzare est mort")
        break
    }
     bulbizarre.attackPokemon(pikachu)
    if (pikachu.hp<=0){
        console.log("pikachu est mort")
        break
    }
}
