import axios from 'axios';

export const fetchGeoposition = async (lat, long) => {
  const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${apiKey}&language=en`;

  const { data } = await axios.get(urlPosition);
  return data;
};

const myHeaders = new Headers();
myHeaders.append('apikey', 'Ooj3b5wNKzWoS6CAI2yX4lmGJDbhW6fB');

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders,
};

export const fetchExchange = value => {
  const valueToArray = value.split(' ');
  console.log(valueToArray);
  const from = valueToArray[1];
  const to = valueToArray[3];
  const amount = valueToArray[0];
  return fetch(
    `https://api.apilayer.com/exchangerates_data/convert?to=${to}&from=${from}&amount=${amount}`,
    requestOptions,
  ).then(response => response.json());
};

export const currentExchange = () => {
  return fetch(
    'https://api.apilayer.com/exchangerates_data/latest?symbols=USD,GBP,EUR&base=UAH',
    requestOptions,
  ).then(response => response.json());
};
