import clickOutside from './outsideclick.js';

export default class droopDownMenu {

  constructor(subMenus, events){
  this.subMenus = document.querySelectorAll(subMenus);
  this.activeClass = 'active'
  if(events === undefined){
  this.events = ['touchstart', 'click'];
  } else{
    this.events = events;
  }
  this.activeDropDownMenu = this.activeDropDownMenu.bind(this)
}

  activeDropDownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget
    element.classList.add(this.activeClass);
    clickOutside(element, this.events, () => {
      element.classList.remove('ativo');
    });
  }

    addDropdownMenusEvent(){
      this.subMenus.forEach((menu) => {
        this.events.forEach((userEvent) => {
          menu.addEventListener(userEvent, this.activeDropDownMenu);
        });
      });
    }

    init(){
      if(this.subMenus.length){
        this.addDropdownMenusEvent() 
      }
      return this
    }

 
}
