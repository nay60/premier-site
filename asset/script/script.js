const menuHam = document.querySelector(".menu-ham")
const navlink = document.querySelector(".nav-links")
menuHam.addEventListener("click", ()=>{
    navlink.classList.toggle('mobile-menu')
    
})

const infopeople = []
const buton = document.querySelector(".submit")

const form = document.querySelector(".form")
if (form){
        form.addEventListener("submit", function(event){
        
        event.preventDefault();
        const info = {
            nom : event.target.querySelector("[name=nom]").value,
            prenom : event.target.querySelector("[name=prenom]").value,
            mail : event.target.querySelector("[name=mail]").value,
        };
        console.log(info);
        infopeople.push(info);  
        console.log(infopeople);
        const donneinfo = JSON.stringify(infopeople);
        localStorage.setItem('donne', donneinfo);
        event.target.querySelector("[name=nom]").value = "";
        event.target.querySelector("[name=prenom]").value = "";
        event.target.querySelector("[name=mail]").value = "";
    })
}


const who = document.querySelector(".qui")

window.addEventListener("scroll", ()=>{
    const scrollpos = window.scrollY

    if (scrollpos > 50){
        who.classList.add('size')
    }
    else {
        who.classList.remove('size')
    }
})



/*const age = prompt("age ?")

if (age >= 9 && age <= 10){
    alert("Vous allez jouer en poussin")
}
else if (age >= 11 && age <= 12){
    alert("Vous allez jouer en benjamin")
}
else if (age >= 13 && age <= 14){
    alert("Vous allez jouer en minime")
}
else if (age >= 15 && age <= 17){
    alert("Vous allez jouer en cadet")
}
else if (age >= 18 && age <= 20){
    alert("Vous allez jouer en junior")
}
else if (age >= 21){
    alert("Vous allez jouer en senior")
}
else{
    alert("Vous n'avez pas d'age")
}

const MAX_ESSAI =prompt("Combien voulez vous d'essais ? ");
let nombremax = prompt("Quel est la valeur du nombremax que vous voulez ? ")
nombremax = parseInt(nombremax)

const nombreAleatoire = Math.floor(Math.random() * (nombremax + 1));
console.log(nombreAleatoire);
for(let i = 0; i<MAX_ESSAI ; i++ ){
    let tourrestant = MAX_ESSAI-i
    alert("Il vous reste " + tourrestant + "essais")
    let nombreChoisie = prompt("Votre chiffre est : "); 
    if (nombreAleatoire == nombreChoisie){
        alert("Vous avez gagnez le nombre était égale à " + nombreAleatoire + "IL NOUS RESTE" + tourrestant);
        break;
    }
    if(nombreAleatoire > nombreChoisie){
        alert(nombreChoisie + " est un nombre trop petit");
    }
    if(nombreAleatoire < nombreChoisie ){
        alert(nombreChoisie + " est un nombre trop grand");
    }
    if (i+1 == MAX_ESSAI){
        alert("T'as perdu mon BOUZINNNNNNNNNN")
    }
}*/

/*let note = [20,19,17,14,11,13,23,29,34,7];
let sumnote = 0;

let min = 0
let max = 0
let indexmin = 0
let indexmax = 0 

for(let i = 0; i < (note.length); i++){
    sumnote +=note[i];

    if(note[i] > note[i+1]){
        min = note[i+1]
        max = note[i]
        indexmax= i
        indexmin= i+1
    }
}

let moyenne = sumnote / note.length
alert(sumnote);
alert(moyenne);

alert(max)
alert(min)

alert(indexmax)
alert(indexmin)*/

/*let nbreleve = parseInt(prompt("Combien d'eleve ? "))
let note = []

for(let i = 0; i < nbreleve; i++){
    let caca = Math.round(Math.random() * 21)
    note.push(caca)

}

console.log(note)*/

/*const btneuro = document.querySelector(".euro")
let dolaroreuro = ''
btneuro.addEventListener("click",function(){

    do{
        dolaroreuro = prompt("Vous voulez calculer en dollar ou en euro ?")  
        if(dolaroreuro == 'euro'){
            let montant = parseFloat(prompt('Entrer votre montant', ''));
            let resultat = montant + '€ représente ';
            const coupures = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

            for (let i = 0; i < coupures.length; i++) {
            	const nbrBillet = Math.floor(montant / coupures[i]);
            	if (nbrBillet > 0) {
            		montant = (montant - (nbrBillet * coupures[i])).toFixed(2)
            		resultat += nbrBillet + ' x ' + coupures[i] + '€ \n';
            	}
            }
            alert(resultat);}
        if(dolaroreuro == 'dollar'){
            let montant = parseFloat(prompt('Entrer votre montant', ''));
            let resultat = montant + '€ représente ';
            const coupures = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.05, 0.05, 0.01];

            for (let i = 0; i < coupures.length; i++) {
            	const nbrBillet = Math.floor(montant / coupures[i]);
            	if (nbrBillet > 0) {
            		montant = (montant - (nbrBillet * coupures[i])).toFixed(2)
            		resultat += nbrBillet + ' x ' + coupures[i] + '€ \n';
            	}
            }
            alert(resultat);}
        else{
            alert('veuillez reessayer')
        }

    }while(dolaroreuro != 'euro' && dolaroreuro != 'dollar'  );

})

const nbr = document.querySelector(".nbr")
let nbrchoose = 0

nbr.addEventListener("click", function(){
    nbrchoose = parseInt(prompt("Quel est votre chiffre ? "))
})

const carre = document.querySelector(".carre")

carre.addEventListener("click",function(){
    alert("Le carre de votre nombre est : " + nbrchoose ** 2)
})*/


    
    

    

    
