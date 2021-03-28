import clickOutside from './outsideclick.js';

export default function menuMob() {
  const eventos = ['click', 'touchstart'];
  const menuButton = document.querySelector('[data-menu="button"]');
  const menulist = document.querySelector('[data-menu="list"]');
  function openMenu() {
    menuButton.classList.add('ativo');
    menulist.classList.add('ativo');
    clickOutside(menulist, eventos, () => {
      menuButton.classList.remove('ativo');
      menulist.classList.remove('ativo');
    });
  }
  eventos.forEach((evento) => menuButton.addEventListener(evento, openMenu));
}
