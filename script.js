document.addEventListener("DOMContentLoaded", () => {
    console.log("what u doin here in console? ¯\\_(ツ)_/¯")
    document.querySelector("#colourtoggle").children[1].style.display="none" 
    document.querySelector("#colourtoggle").children[0].style.display="inline-block" 
});


  
document.getElementById('colourtoggle').addEventListener('click',()=>{
    if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
        document.documentElement.setAttribute('data-bs-theme','light')
        document.querySelector("#colourtoggle").children[1].style.display="none" 
        // MOON ICON ON
        document.querySelector("#colourtoggle").children[0].style.display="inline-block" 
    }
    else {
        document.documentElement.setAttribute('data-bs-theme','dark')
        // MOON ICON OFF
        document.querySelector("#colourtoggle").children[0].style.display="none" 
        document.querySelector("#colourtoggle").children[1].style.display="inline-block" 
    }
})
