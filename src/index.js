import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import Currency from './currency';

async function exchangeRate(currencyOne, currencyTwo, money) {
  const response = await Currency.exchangeRate(currencyOne, currencyTwo, money);
  if (response.result === "success") {
    printElements(response);
  } else {
    printError(response);
  }
}