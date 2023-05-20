let state = true;

function darkModeVinci() {
    var element = document.body;
    element.classList.toggle("dark");

    if (state==true){
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/daVinciWorks.webp')"
        
        
        state = false;
    }
    else{
        
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/ultimaceia.webp')"
        state = true;  
    }
}