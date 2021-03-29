export default class Tooltip {

  constructor(tooltips){
    this.tooltips = document.querySelectorAll(tooltips);

    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMoove = this.onMouseMoove.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }
    onMouseMoove(event) {
      this.tooltipBox.style.top = `${event.pageY + 20}px`;
      this.tooltipBox.style.left = `${event.pageX + 20}px`;
    }

  criarToolTip(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    this.tooltipBox = tooltipBox;
  }

  onMouseOver(event) {
    this.criarToolTip(event.currentTarget);
    event.currentTarget.addEventListener('mousemove', this.onMouseMoove);
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }
  
   
    onMouseLeave(event) {
      this.tooltipBox.remove()
      event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
      event.currentTarget.removeEventListener('mousemove', this.onMouseMoove);
    }

    addTooltipEvents(){
      this.tooltips.forEach((item) => {
        item.addEventListener('mouseover', this.onMouseOver);
      });
    }

    init(){
      if(this.tooltips.length){
        this.addTooltipEvents()
      }
      return this
    }
}
