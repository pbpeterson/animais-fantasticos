export default function initFecthBTC() {
  const btcHtml = document.querySelector('.btc-preco');
  const urlBTC = 'https://blockchain.info/ticker';
  async function pegaBTCvalue(url) {
    const BtcAPI = await fetch(url);
    const btcBRLvalue = await BtcAPI.json();
    const valorBTC = await btcBRLvalue.BRL.buy;
    btcHtml.innerText = valorBTC;
  }
  pegaBTCvalue(urlBTC);
}
