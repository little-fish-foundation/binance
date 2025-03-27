/*
 * @Author: Nw1996
 * @Date: 2025-03-26 10:55:27
 * @LastEditors: Nw1996
 * @LastEditTime: 2025-03-27 14:07:26
 * @Description: 
 * @FilePath: /binance/examples/apidoc/CoinMClient/getBalance.js
 */
const { CoinMClient } = require('binance-api-nw');

  // This example shows how to call this Binance API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "binance" for Binance exchange
  // This Binance API SDK is available on npm via "npm install binance"
  // ENDPOINT: dapi/v1/balance
  // METHOD: GET
  // PUBLIC: NO

const client = new CoinMClient({
  api_key: '',
  api_secret: '',
});

client.getBalance(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
