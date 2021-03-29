export default function fecthBTC(url, target) {
  const btcHtml = document.querySelector(target);

  async function pegaBTCvalue(url) {
    const BtcAPI = await fetch(url);
    const btcBRLvalue = await BtcAPI.json();
    const valorBTC = await btcBRLvalue.BRL.buy;
    btcHtml.innerText = (1000 / valorBTC).toFixed(4);
  }
  pegaBTCvalue(url);
}
