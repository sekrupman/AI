import React, { useState } from "react";
import "./style.css";
import { requestToGroq } from "../../../utils/Groq";
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
            id="pertanyaan"
            placeholder="Search here..."
            value={query}
            onChange={handleInputChange}
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
        {data ? (
      <div className="col respon-container">
          <SyntaxHighlighter language="swift" style={darcula} wrapLongLines={true}>
            {data.toString()}
          </SyntaxHighlighter>
          </div>) : null}
    </div>
  );
}

export default Form;
