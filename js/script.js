import ScrollSuave from './modules/scrollsuave.js'
import Accordion from './modules/accordion.js'
import slideInit from './modules/slideinit.js'
import animaTextosImg from './modules/animaTexto.js'
import Modal from './modules/login.js'
import tooltip from './modules/tooltip.js'
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

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]')
modal.init()

slideInit();
tooltip();
initDropdownMenu();
menuMob();
initFuncionamento();
initFetchAnimais();
initFecthBTC();
