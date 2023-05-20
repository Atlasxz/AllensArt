let state = true;

function darkModeRenoir() {
    var element = document.body;
    element.classList.toggle("dark");

    if (state==true){
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/osBarqueiros.webp')"
        
        
        state = false;
    }
    else{
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/pontNeuf.webp')"

        state = true;  
    }
}