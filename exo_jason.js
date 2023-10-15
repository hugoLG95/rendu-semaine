
//generer un nom aleatoire
function random_name() {
    let name = ["lucie","jean","paul","eric","sophie"];
    return name [Math.floor(Math.random() * name.length)];
  }
 //generer une caracteristique aleatoire
  function random_characteristic() {
    let characteristic = ["sportif","nerd","bg","blond","brun"];
     return characteristic[Math.floor(Math.random() * characteristic.length)];
  }


  let survivant = [];
  for (let i = 0; i < 5; i++) {
    survivants.push({
      name: random_name(),
      characteristic: random_characteristic(),
      die_prob: 0.3,
      dammage_prob: 0.5,
      die_and_attack_prob: 0.2,
      pointsDeVie: 10
    })
  }

// perso jason
  let jason = {
    name: "jason",
    pv: 100
  }

  //action entre jason et un survivant

  function jason_vs_survivant(survivant) {
  const action = Math.random()
    
  }
  if (action < survivant.die_prob) {
    console.log(`Jason a tué ${survivant.name}`);
    survivant.pointsDeVie = 0;
  } else if (action < survivant.die_prob + survivant.dammage_prob) {
    console.log(`${survivant.name} a esquivé et infligé 10 dmg à Jason`);
    jason.pointsDeVie -= 10;
  } else if (action < survivant.die_prob + survivant.dammage_prob + survivant.die_and_attack_prob) {
    console.log(`${survivant.name} a infligé 15 dmg à Jason mais est mort`);
    survivant.pointsDeVie = 0;
    jason.pointsDeVie -= 15;
  }

 