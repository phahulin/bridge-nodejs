require('dotenv').config();
const fetch = require('node-fetch');

const GAS_PRICE_FALLBACK = process.env.GAS_PRICE_FALLBACK;
const GAS_PRICE_SPEED_TYPE = process.env.GAS_PRICE_SPEED_TYPE;

async function getGasPrices(){
  try {
    const response = await fetch('https://gasprice.poa.network/');
    const json = await response.json()
    return json[GAS_PRICE_SPEED_TYPE]
  } catch(e) {
    console.error("Gas Price API is not available", e)
    return GAS_PRICE_FALLBACK;
  }
}

module.exports = {
  getGasPrices
}