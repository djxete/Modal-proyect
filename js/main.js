// ===== VARIABLES =============
 
const btn = document.querySelector(".modal-btn");
const btnClose = document.querySelector(".close-btn");
const modalOverlay= document.querySelector(".modal-overlay");


// ==== ADD EVENT LISTENER AND FUNCTIONS ======

btn.addEventListener("click", ()=>{
    modalOverlay.classList.add("open-modal");
})

btnClose.addEventListener("click", ()=>{
    modalOverlay.classList.remove("open-modal");
})