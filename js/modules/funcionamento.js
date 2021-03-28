export default function initFuncionamento() {
  const dataSem = document.querySelector('[data-semana]');
  const diasAberto = dataSem.dataset.semana.split(',').map(Number);
  const horaAberto = dataSem.dataset.horario.split(',').map(Number);
  const dataHoje = new Date();
  const diaHoje = dataHoje.getDay();
  const horaHoje = dataHoje.getHours();
  const aBerto = diasAberto.indexOf(diaHoje) !== -1;
  const horaABrir = horaHoje >= horaAberto[0] && horaHoje < horaAberto[1];
  if (aBerto && horaABrir) {
    dataSem.classList.add('aberto');
  }
}
