



let jonh ={
    name:"jonh",
    mental_health:10
}

let musique = ["blow-kaaris","berry-youvDee","anissa-wejdene","seul-josman","life-snot"];


let trajet ={
    red_light:30,
    radio: musique,
    change:0
}


function change_musique(trajet){
   trajet.red_light--;
   
   let random_song = trajet.radio[Math.floor(Math.random() * 5)];
if(musique[radio]==musique[0]){
    mental_health-=1
    trajet.change+=1
}

   return random_song
}



while(trajet.red_light > 0 && jonh.mental_health > 0){
    let musique = change_musique(trajet);
console.log("Au",(trajet.red_light),"ème feu rouge", "le son a la radio est",{random_song},"il reste donc",(30 - trajet.red_light))
}

if (trajet.red_light == 0){

console.log("bravo","vous etes arrive apres",(trajet.change),"et votre santé mental est de"(jonh.mental_health))
}

if (mental_health == 0){
    console.log("explosion")
}