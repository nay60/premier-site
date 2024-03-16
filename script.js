
const menuHam = document.querySelector(".menu-ham")
const navlink = document.querySelector(".nav-links")
menuHam.addEventListener("click", ()=>{
    navlink.classList.toggle('mobile-menu')
    
})

const buton = document.querySelector(".submit")
buton.addEventListener("click", function(){
    const form = document.querySelector(".form")
    form.addEventListener("submit", function(event){
        event.preventDefault();
        const info = {
            nom : event.target.querySelector("[name=nom]").value,
            prenom : event.target.querySelector("[name=prenom]").value,
            mail : event.target.querySelector("[name=mail]").value,
        };
        const donneinfo = JSON.stringify(info);
        localStorage.setItem('donné', donneinfo);
    });
})
    