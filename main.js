const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach(botón => {
    botón.addEventListener("click",() => {
        const botónClick = botón.textContent;
        if(botón.id === "c"){
            pantalla.textContent = "0"
            return;
        }
        if(botón.id === "borrar"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!"){
                pantalla.textContent = "0"
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1)
            }
            return;
        }

        if(botón.id === "igual"){
            try{
                pantalla.textContent = eval(pantalla.textContent);
            }catch{
                pantalla.textContent = "Error!"
            }
            return;
        }
        if(pantalla.textContent === "0" || pantalla.textContent === "Error!"){
            pantalla.textContent = botónClick;
        }else{
            pantalla.textContent += botónClick;
        }
        
    })
})