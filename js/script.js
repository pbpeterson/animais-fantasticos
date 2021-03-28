import ScrollSuave from './modules/scrollsuave.js'
import accordion from './modules/accordion.js'
import slideInit from './modules/slideinit.js'
import animaTextos from './modules/animaTexto.js'
import ativalModal from './modules/login.js'
import tooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/droopdownMenu.js'
import menuMob from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initFetchAnimais from './modules/fetchanimais.js'
import initFecthBTC from './modules/fetchBTC.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init()

accordion();
slideInit();
animaTextos();
ativalModal();
tooltip();
initDropdownMenu();
menuMob();
initFuncionamento();
initFetchAnimais();
initFecthBTC();