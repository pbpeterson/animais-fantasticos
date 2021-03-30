import ScrollSuave from './modules/scrollsuave.js'
import Accordion from './modules/accordion.js'
import ScrollAnima from './modules/scrollanima.js'
import animaTextosImg from './modules/animaTexto.js'
import ativalModal from './modules/login.js'
import Tooltip from './modules/tooltip.js'
import initDropdownMenu from './modules/droopdownMenu.js'
import menuMob from './modules/menu-mobile.js'
import initFuncionamento from './modules/funcionamento.js'
import fetchanimais from './modules/fetchanimais.js'
import fecthBTC from './modules/fetchBTC.js'

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init()

const accordion = new Accordion('[data-anima="accordion"] dt')
accordion.init()

const animatextos = new animaTextosImg('[data-tab="menu"] li', '[data-tab="content"] section')
animatextos.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

const scrollanima = new ScrollAnima('[data-anime="scroll"]')
scrollanima.init()


ativalModal();
initDropdownMenu();
menuMob();
initFuncionamento();


fecthBTC('https://blockchain.info/ticker', '.btc-preco');

fetchanimais('../animaisapi.json', '.numeros-grid')
