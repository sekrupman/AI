import React, { useState } from "react";
import "./style.css";
import { requestToGroq } from "../../../utils/Groq";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import saweria from "../../../assets/saweria.png";
import saweriaPerson from "../../../assets/saweria-person.png";

function Form() {
  const [data, setData] = useState("");
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const ai = await requestToGroq(query);
      setData(ai);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <div className="col">
        <form className="form-wrapper cf" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-input"
            id="pertanyaan"
            placeholder="Search here..."
            value={query}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="container">
        {data ? (
          <div className="respon-container">
            <SyntaxHighlighter
              language="swift"
              style={darcula}
              wrapLongLines={true}
            >
              {data.toString()}
            </SyntaxHighlighter>
          </div>
        ) : null}
        <div className={`col saweria ${data ? 'with-data' : 'no-data'}`}>
          <img src={saweria} alt="saweria" />
          <img src={saweriaPerson} alt="saweria-person" />
        </div>
      </div>
    </div>
  );
}

export default Form;
