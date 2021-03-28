import clickOutside from './outsideclick.js';

export default function droopDown() {
  const subMenu = document.querySelectorAll('[data-droopdown]');
  const elements = ['touchstart', 'click'];

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('ativo');
    clickOutside(this, elements, () => {
      this.classList.remove('ativo');
    });
  }
  subMenu.forEach((menu) => {
    ['click', 'touchstart'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });
}
