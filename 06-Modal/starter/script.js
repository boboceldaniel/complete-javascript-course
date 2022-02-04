'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

//If we use querySelector with a selector which matches multiple elements, only the first one gets selected
//const btnsOpenModal = document.querySelector('.show-modal');

//With multiple elements, use querySelectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');

//Just example to log to console the contents of each element in the show-modal class
for (let i = 0; i < btnsOpenModal.length; i++)
  console.log(btnsOpenModal[i].textContent);

//We remove the hidden class to unhide an element
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//We add the hidden class to hide an element
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//Add event listener on each of the buttons
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Keyboard events are global, can happen anywhere, so we listen for them on the full document
document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
