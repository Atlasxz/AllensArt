let state = true;

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark");

    if (state==true){
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/ceiaEmausDark.webp')"
        document.body.style.backgroundImage = "url('../_Imgs/ceiaEmausDark.webp')"
        

        state = false;
    }
    else{
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/ceiaEmaus.webp')"
        document.body.style.backgroundImage = "url('../_Imgs/ceiaEmaus.webp')"

        state = true;  
    }
}