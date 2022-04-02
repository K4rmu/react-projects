import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <main>
    <div className="container">
      <h3>questions and answers about loggin</h3>
      <section className="info">
      {data.map((Q)=>{return <SingleQuestion key={Q.id} {...Q} />})}
      </section>
    </div>
  </main>;
}

export default App;
