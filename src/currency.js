export default class Currency {
  static async exchangeRate(dollars) {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    .then(function(response) {
      if(!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      } else {
        return package.json();
      }
    })
    .catch(function(error) {
      return error;
    });
  }
}

console.log(process.env.API_KEY)