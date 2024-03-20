AOS.init(); 

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

