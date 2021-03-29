import ScrollSuave from './modules/scrollsuave.js'
import Accordion from './modules/accordion.js'
import slideInit from './modules/slideinit.js'
import animaTextosImg from './modules/animaTexto.js'
import ativalModal from './modules/login.js'
import Tooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/droopdownMenu.js'
import menuMob from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import initFetchAnimais from './modules/fetchanimais.js'
import initFecthBTC from './modules/fetchBTC.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const animatextos = new animaTextosImg('[data-tab="menu"] li', '[data-tab="content"] section')
animatextos.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

slideInit();
ativalModal();
initDropdownMenu();
menuMob();
initFuncionamento();
initFetchAnimais();
initFecthBTC();
