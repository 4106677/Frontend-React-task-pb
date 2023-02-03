import { Form } from 'components/Form/Form';
import { useEffect, useState } from 'react';
import { fetchGeoposition, fetchExchange } from '../../Service/api';

const Converter = () => {
  const [currency, setCurrency] = useState(null);
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  useEffect(() => {
    const options = {
      enableHighAccuracy: true,

      maximumAge: 0,
    };

    function success(pos) {
      const crd = pos.coords;

      fetchGeoposition(crd.latitude, crd.longitude).then(data =>
        setCurrency(data.results[0].annotations.currency.iso_code)
      );
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
      setCurrency('USD');
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }, []);

  const submitCurrency = query => {
    setValue(query);
  };

  useEffect(() => {
    if (!value) {
      return;
    }

    fetchExchange(value).then(({ result }) => setResult(result));
  }, [value]);

  return (
    <>
      <div>Your currency: {currency}</div>
      <Form onSubmit={submitCurrency} />
      <p>Your input data: {value}</p>
      <p>Exchange result: {result}</p>
    </>
  );
};

export default Converter;
