import clickOutside from './outsideclick.js';

export default class droopDownMenu {
  constructor(subMenus, events) {
    this.subMenus = document.querySelectorAll(subMenus);
    this.activeclass = 'ativo';
    if (events === undefined) this.events = ['click', 'touchstart'];
    else this.eventos = events;
    this.activeDropDownMenu = this.activeDropDownMenu.bind(this);
  }

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.toggle(this.activeclass);
    clickOutside(element, this.events, () => {
      element.classList.remove(this.activeclass);
    });
  }

  addDropdownMenusEvent() {
    this.subMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropDownMenu);
      });
    });
  }

  init() {
    if (this.subMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}
