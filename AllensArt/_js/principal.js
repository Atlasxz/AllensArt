let estado = true;

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark");

    if (estado==true){
        document.getElementById('indexBackground').style.backgroundImage = "url('_Imgs/landscape.webp')"
        estado = false;
    }
    else{
        document.getElementById('indexBackground').style.backgroundImage = "url('_Imgs/groupPeople.webp')"
        estado = true;  
    }
}