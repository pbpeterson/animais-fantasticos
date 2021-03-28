import animanumeros from './anima-numeros.js';

export default function initFetchAnimais() {
  async function fetchanimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();
    const numerosGrid = document.querySelector('.numeros-grid');
    function createAnimal(animal) {
      const div = document.createElement('div');
      div.classList.add('numero-animal');
      div.innerHTML = `<h3>${animal.specie}</h3><span data-numero>${animal.total}</span>`;
      return div;
    }
    animaisJSON.forEach((animal) => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });
    animanumeros();
  }

  fetchanimais('./animaisapi.json');
}
