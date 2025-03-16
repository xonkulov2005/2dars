import { useEffect, useState } from "react";
import TitlesList from "./components/TitlesList";
import Form from "./components/Form";

const initalValue = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState(false);
  const [titles, setTitles] = useState(initalValue);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
        console.log(1);
      }, 5000);
    }
    if (text) {
      setError(false);
    }
  }, [error, text, titles]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(titles));
  }, [titles]);
  const deleteTitle = (id) => {
    const filteredTitles = titles.filter((t) => t.id !== id);
    setTitles(filteredTitles);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length == 0) {
      setError("Write Something Please (");
    } else if (text.length < 4) {
      setError("Write more than 4 character");
    } else {
      setTitles([...titles, { title: text, id: Math.random() }]);
      setText("");
      setError(false);
    }
  };

  return (
    <div>
      <h1>Titles</h1>
      <Form
        setText={setText}
        handleSubmit={handleSubmit}
        text={text}
        error={error}
      />
      <ul>
        {!titles.length && <h2>You Don't Have Any Titles</h2>}
        {titles.length > 0 && (
          <TitlesList titles={titles} deleteTitle={deleteTitle} />
        )}
      </ul>
    </div>
  );
}

export default App;
