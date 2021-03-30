export default class Funcionamento {

  constructor(funcionamento, activeClass){
    this.funcionamento = document.querySelector(funcionamento)
    this.activeClass = activeClass;
  }
  
  dadosFuncionamento(){
  this.diasAberto = this.funcionamento.dataset.semana.split(',').map(Number);
  this.horaAberto = this.funcionamento.dataset.horario.split(',').map(Number);
  }

  dadosAgora(){
    this.dataHoje = new Date();
    this.diaHoje = this.dataHoje.getDay();
    this.horaHoje = this.dataHoje.getUTCHours() -3;
  }

  estaAberto(){
    const aBerto = this.diasAberto.indexOf(this.diaHoje) !== -1;
    const horaABrir = this.horaHoje >= this.horaAberto[0] && this.horaHoje < this.horaAberto[1];

    return aBerto && horaABrir
  }

  ativaAberto(){
    if (this.estaAberto()) {
    this.funcionamento.classList.add(activeClass);  
    }
  }

  init(){
    if(this.funcionamento){
    this.dadosFuncionamento();
    this.dadosAgora();
    this.ativaAberto();
    }
    return this
  }
}
