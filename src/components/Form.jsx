function Form({ handleSubmit, setText, text, error }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => {
          const inputText = e.target.value;
          setText(inputText);
        }}
        value={text}
      />
      <button>Add</button>
      {error && <p>{error}</p>}
    </form>
  );
}
export default Form;
