export default function animanumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  function animador() {
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      let start = 0;
      const incremento = Math.floor(total / 100);
      const timer = setInterval(() => {
        start = +incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 0);
    });
  }

  let observe;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observe.disconnect();
      animador();
    }
  }

  const observeTarget = document.querySelector('.numeros');
  observe = new MutationObserver(handleMutation);

  observe.observe(observeTarget, { attributes: true });
}
