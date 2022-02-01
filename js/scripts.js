
var btn = document.getElementById("btn"),
    menu = document.getElementById("menu"),
    contador = 0;

    function cambio(){
        if(contador == 0){
            menu.classList.add("menu__toggle");
            contador = 1;
        }
        else{
            menu.classList.remove("menu__toggle");
            contador = 0;
        }
    }

    btn.addEventListener("click",cambio,true)
