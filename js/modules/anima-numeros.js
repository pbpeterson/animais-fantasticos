export default class animanumeros {
  
  constructor(numeros, observeTarget, observerClass){
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observeTarget);
    this.observerClass =  observerClass;

    this.handleMutation = this.handleMutation.bind(this)
  }
  

  static incrementarNumer(numero){
    const total = +numero.innerText;
    const incremento = Math.floor(total / 100);
    let start = 0;
    const timer = setInterval(() => {
      start +=incremento;
      numero.innerText = start;
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
        }
      }, 25*Math.random());
  }

  animador() {
    this.numeros.forEach((numero) => this.constructor.incrementarNumer(numero));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observe.disconnect();
      this.animador();
    }
  }

  addMutationObserve(){
    this.observe = new MutationObserver(this.handleMutation);
    this.observe.observe(this.observeTarget, { attributes: true });
  }

  init(){
    if(this.numeros.length && this.observeTarget){
      this.addMutationObserve();
      this.animador()
    }

  }
}
