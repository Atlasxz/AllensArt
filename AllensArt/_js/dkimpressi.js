let state = true;

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark");

    if (state==true){
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/impressionDark.webp')"
        
        state = false;
    }
    else{
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/monet.webp')"

        state = true;  
    }
}