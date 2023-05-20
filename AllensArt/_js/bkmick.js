let state1  = true;

function darkModeMonet() {
    var element = document.body;
    element.classList.toggle("dark");

    if (state1 == true){
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/adao.webp')"
    
        
        state1  = false;
    }
    else{
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/adaoClaro.webp')"

        state1  = true;  
    }
}