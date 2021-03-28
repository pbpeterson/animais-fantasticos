export default function accordionNav() {
  const pergunta = document.querySelectorAll('[data-anime="accordion"] dt');

  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  if (pergunta.length) {
    pergunta[0].classList.toggle('ativo');
    pergunta[0].nextElementSibling.classList.toggle('ativo');

    pergunta.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
