const toggler = document.querySelector(".toggler");
const starterPrice = document.getElementById("starter-price");
const proPrice = document.getElementById("pro-price");

toggler.addEventListener("change", ()=>{
    if(toggler.checked){
        starterPrice.innerHTML = `X,500 <span> </span>`;
        proPrice.innerHTML = `X,500 <span></span>`;
    }else{
        starterPrice.innerHTML = `XX,000 <span></span>`;
        proPrice.innerHTML = `XX,500 <span></span>`; 
    }
})