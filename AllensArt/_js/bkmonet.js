let state1  = true;

function darkModeMonet() {
    var element = document.body;
    element.classList.toggle("dark");

    if (state1 == true){
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/landscape.webp')"

        state1  = false;
    }
    else{
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/monet.webp')"

        state1  = true;  
    }
}