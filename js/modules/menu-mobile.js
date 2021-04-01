import clickOutside from './outsideclick.js';

export default class menuMob {
  constructor(menuButton, menuList, events) {
    if (events === undefined) this.events = ['click', 'touchstart'];
    else this.eventos = events;
    this.menuButton = document.querySelector(menuButton);
    this.menulist = document.querySelector(menuList);
    this.active = 'ativo';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(event) {
    event.preventDefault();
    this.menuButton.classList.toggle(this.active);
    this.menulist.classList.toggle(this.active);
    clickOutside(this.menulist, this.events, () => {
      this.menuButton.classList.remove(this.active);
      this.menulist.classList.remove(this.active);
    });
  }

  addMenuMobileEvents() {
    this.events.forEach((evento) => this.menuButton.addEventListener(evento, this.openMenu));
  }

  init() {
    if (this.menuButton && this.menulist) {
      this.addMenuMobileEvents();
    }
  }
}
