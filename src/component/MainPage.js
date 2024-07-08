import React from 'react'
import Form from './molecul/Form/Form'
import '../style/global.css'

function MainPage() {
  return (
    <div style={{ position: 'relative' }}>
      <div className="title">
        <h1>CET JI PI TI</h1>
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
}

export default MainPage