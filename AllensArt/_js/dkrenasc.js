let state = true;

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark");

    if (state==true){
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/adao.webp')"
        document.body.style.backgroundImage = "url('../_Imgs/academiaAtenasDark.webp')"
        
        state = false;
    }
    else{
        document.getElementById('indexBackground').style.backgroundImage = "url('../_Imgs/academiaAtenas.webp')"
        document.body.style.backgroundImage = "url('../_Imgs/academiaAtenas.webp')"

        state = true;  
    }
}