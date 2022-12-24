let curus = document.querySelector(".curus");
let curus2 = document.querySelector(".curus2");
document.addEventListener("mousemove",function(e){
    curus.style.cssText = curus2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}

function ahaded(){
    setInterval(loader, 3000);
}

window.onload = ahaded;




