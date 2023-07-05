"use strict";

const btnModal = document.querySelector('.myModal');

const openModal = () => {
    btnModal.classList.remove('isHidden');
}
const closeModal = () => {
    btnModal.classList.add('isHidden');
}

const iEL = document.querySelectorAll("i");
const imaged = document.querySelector(".myModal img");
const xModal = document.querySelector(".x-modal i")

window.addEventListener("keydown", (e) => {
    if(e.keyCode ===  27) {
        closeModal();
    };
} );


iEL.forEach((item)=>{
    item.addEventListener("click",(e) => {
        e.preventDefault();
        const imgd = document.querySelector(`.${e.target.classList[0]}`)
        console.log( imgd.previousElementSibling.src);
        imaged.src= imgd.previousElementSibling.src
        openModal()
    });
});