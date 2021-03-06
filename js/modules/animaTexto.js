export default class animaTextosImg {
  
  constructor(nav, content){
  this.nav = document.querySelectorAll(nav);
  this.content = document.querySelectorAll(content);}

  addClasse(index) {
    this.content.forEach((section) => {
    section.classList.remove('ativo');
    });
    this.content[index].classList.add('show-down');
    this.content[index].classList.add('ativo');
    

  }

  init(){
    if (this.nav.length && this.content.length){
      this.content[0].classList.add('show-down');
      this.content[0].classList.add('ativo');
      this.nav.forEach((item, index) => {
        item.addEventListener('click', () => {
        this.addClasse(index);
      });
    });
    return this
    }
  }
    
}
