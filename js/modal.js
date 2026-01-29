(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', openModal);
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.add('is-open');
    document.addEventListener('keydown', onEscPress);
  }

  function closeModal() {
    refs.modal.classList.remove('is-open');
    document.removeEventListener('keydown', onEscPress);
  }

  function onEscPress(e) {
    if (e.key === 'Escape') {
      closeModal();
    }
  }
})();
