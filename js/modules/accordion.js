export default class Accordion {

  constructor(lista){
  this.accordionList = document.querySelectorAll(lista);
  this.activeClass = 'ativo'
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }


  addAcordionEvent(){
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init(){
    if(this.accordionList.length){
      console.log(this.accordionList)
      this.toggleAccordion(this.accordionList[0])
      this.addAcordionEvent();
    }
  }
}
