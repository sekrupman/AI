import React, { useState } from 'react';
import './style.css';

function Form() {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted query:", query);
    
  };

  return (
    <div>
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
  );
}

export default Form;
