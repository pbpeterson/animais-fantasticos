export default function clickOutside(element, events, callback) {
  const html = document.documentElement;
  const outside = 'data-outside';
  const elements = ['click', 'touchstart'];
  function handleClickOutside(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside);
      elements.forEach(() => {
        html.removeEventListener('click', handleClickOutside);
      });

      callback();
    }
  }
  if (!element.hasAttribute(outside)) {
    elements.forEach(() => {
      setTimeout(() => {
        html.addEventListener('click', handleClickOutside);
      });
    });
    element.setAttribute(outside, '');
  }
}
