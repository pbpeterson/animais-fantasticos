export default function animaTextosImg() {
  const nav = document.querySelectorAll('[data-tab="menu"] li');
  const content = document.querySelectorAll('[data-tab="content"] section');
  const descr = document.querySelector('.animais-descricao Section');
  descr.classList.add('show-down');
  function addClasse(index) {
    content.forEach((section) => {
      section.classList.remove('ativo');
    });

    const direcao = content[index].dataset.anime;
    content[index].classList.add('ativo', direcao);
  }
  if (nav.length && content.length) {
    content[0].classList.add('ativo');
    nav.forEach((item, index) => {
      item.addEventListener('click', () => {
        addClasse(index);
      });
    });
  }
}
