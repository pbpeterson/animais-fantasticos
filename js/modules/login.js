export default class Modal{
  constructor(login, fechar, modalContainer){
    this.login = document.querySelector(login);
    this.fechar = document.querySelector(fechar);
    this.modalContainer = document.querySelector(modalContainer);

    this.eventToggleModal = this.eventToggleModal.bind(this)
    this.cliqueForalModal = this.eventToggleModal.bind(this)

  }


  toggleModal() {
    this.modalContainer.classList.toggle('ativo');
  }

  eventToggleModal(event){
    event.preventDefault()
    this.toggleModal()
  }

  cliqueForalModal(event) {
    if (event.target === this.modalContainer) {
      this.toggleModal(event);
    }
  }

  addModalEvent(){
    this.login.addEventListener('click', this.eventToggleModal);
    this.fechar.addEventListener('click', this.eventToggleModal);
    this.modalContainer.addEventListener('click', this.cliqueForalModal);
  }

  init(){
    if (this.login && this.fechar && this.modalContainer) {
      this.addModalEvent()
    }
    return this
  }
}
