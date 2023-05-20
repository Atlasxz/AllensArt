let state = true;

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark");

    if (state==true){
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/starryNightDark.webp')"
        document.body.style.backgroundImage = "url('../_Imgs/starryNightDark.webp')"
        
        state = false;
    }
    else{
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/starryNight.webp')"
        document.body.style.backgroundImage = "url('../_Imgs/campociprestevg.webp')"

        state = true;  
    }
}