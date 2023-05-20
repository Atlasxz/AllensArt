let state = true;

function darkModeVG() {
    var element = document.body;
    element.classList.toggle("dark");

    if (state==true){
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/SNDarked.webp')"

        state = false;
    }
    else{
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/campoCipresteVG.webp')"

        state = true;  
    }
}