//fonction exercices

let a = "jean"
let b = "paul" 
let result = checkname(a,b)

function checkname(name1,name2){
if (name1 == name2){
    return ("les noms sont identiques")
} else {
    return("les noms sont differents")
}
}

console.log(result)










let names = []
names.push("claude", "benoit", "paul")
names.forEach(function (name) {
    name += " va faire du sport"
    
    console.log(name)
}
)






//Object exercices

let student = {
    firstname: "hugo",
    favoriteFood:"burger,salad",
    age:"21",
}
let values = Object.values(student)
let nombreDeLettres = 0







let total =

Object.values (student).forEach(values)