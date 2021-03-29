export default function ativalModal() {
  const login = document.querySelector('[data-modal="abrir"]');
  const fechar = document.querySelector('[data-modal="fechar"]');
  const modalContainer = document.querySelector('[data-modal="container"]');
  function toggleModal(event) {
    event.preventDefault();
    modalContainer.classList.toggle('ativo');
  }

  function cliqueForalModal(event) {
    if (event.target === this) {
      toggleModal(event);
    }
  }

  if (login && fechar && modalContainer) {
    login.addEventListener('click', toggleModal);
    fechar.addEventListener('click', toggleModal);
    modalContainer.addEventListener('click', cliqueForalModal);
  }
}
