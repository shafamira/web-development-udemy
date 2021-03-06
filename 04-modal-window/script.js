'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsShowModal = document.querySelectorAll('.show-modal')
console.log(btnsShowModal)

// for(let i=0; i<btnsShowModal.length; i++)
//     btnsShowModal[i].addEventListener('click', function () {
//         console.log('Button Open Clicked!');
//         // remove the hidden in our modal class
//         modal.classList.remove('hidden') 
//     })
    

// btnCloseModal.addEventListener('click', function () {
//     console.log('Button Close Clicked!');
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// })

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};
  
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++)
  btnsShowModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
