export default function slideInit() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  function animaScroll() {
    sections.forEach((section) => {
      const windowTamanho = window.innerHeight * 0.6;
      const sectionTop = section.getBoundingClientRect().top - windowTamanho;
      if (sectionTop < 0) {
        section.classList.add('ativo');
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }
  if (sections.length) {
    animaScroll();
    window.addEventListener('scroll', animaScroll);
  }
}
