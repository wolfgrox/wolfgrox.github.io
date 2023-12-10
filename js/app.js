
const headerMenu=document.querySelector('.hm-header');

console.log(headerMenu.offsetTop);

window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 80){
        headerMenu.classList.add('header-fixed');
    }else{
        headerMenu.classList.remove('header-fixed');
    }
})

/*=========================================
    Tabs
==========================================*/
if(document.querySelector('.hm-tabs')){

    const tabLinks=document.querySelectorAll('.hm-tab-link');
    const tabsContent=document.querySelectorAll('.tabs-content');

    tabLinks[0].classList.add('active');

    if(document.querySelector('.tabs-content')){
        tabsContent[0].classList.add('tab-active');
    }
    

    for (let i = 0; i < tabLinks.length; i++) {
        
        tabLinks[i].addEventListener('click',()=>{

            
            tabLinks.forEach((tab) => tab.classList.remove('active'));
            tabLinks[i].classList.add('active');
            
            tabsContent.forEach((tabCont) => tabCont.classList.remove('tab-active'));
            tabsContent[i].classList.add('tab-active');
            
        });
        
    }

}

/*=========================================
    MENU
==========================================*/

const menu=document.querySelector('.icon-menu');
const menuClose=document.querySelector('.cerrar-menu');

menu.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.add('active');
})

menuClose.addEventListener('click',()=>{
    document.querySelector('.header-menu-movil').classList.remove('active');
})

/*======================================
     FORMULARIO
========================================*/

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Recopilar los datos del formulario
        const formData = new FormData(form);

        // Validación en JavaScript 
        const nombre = formData.get("nombre-completo");
        const email = formData.get("email");
        const telefono = formData.get("telefono");
        const asunto = formData.get("asunto");

        if (nombre.trim() === "") {
            alert("Por favor, ingrese un nombre válido.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, ingrese una dirección de correo electrónico válida.");
            return;
        }

        if (!validatePhone(telefono)) {
            alert("Por favor, ingrese un número de teléfono válido.");
            return;
        }

        if (asunto.trim() === "") {
            alert("Por favor, ingrese un asunto.");
            return;
        }

    
        // Enviar datos a través de una solicitud Fetch
        const response = await fetch("https://formsubmit.co/nahuelzelaya89@gmail.com", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            alert("Mensaje enviado con éxito");
            form.reset();
        } else {
            alert("Ocurrió un error al enviar el mensaje. Inténtalo de nuevo más tarde.");
        }
    });

    function validateEmail(email) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(email);
    }

    function validatePhone(telefono) {
        return /^\d{10,}$/.test(telefono);
    }
});



