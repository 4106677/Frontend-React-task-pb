

export const Form = ({ onSubmit }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    onSubmit(evt.currentTarget.elements.currency.value);
    evt.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter text for exchange rate
        <input type="text" name="currency" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
