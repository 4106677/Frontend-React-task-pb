import { currentExchange } from 'Service/api';
import { useEffect } from 'react';
import { useState } from 'react';

const Rates = () => {
  const [exchange, setExchange] = useState(null);

  useEffect(() => {
    currentExchange().then(({ rates }) => setExchange(rates));
  }, []);

  return (
    <>
      <div>Rates</div>
      {exchange && (
        <ul>
          {Object.entries(exchange).map(([key, value]) => (
            <li key={key}>
              Currency 1 {key}: {(1 / value).toFixed(2)} UAH
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Rates;
