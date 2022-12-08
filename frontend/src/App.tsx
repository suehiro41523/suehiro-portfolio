import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import * as component from './component';
import ReactMarkdown from 'react-markdown';

function App() {
  const [estate, setEstate] = useState<any>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await component.readEstates();
      setEstate(result.data.data);
    };
    fetchData();
  }, []);
  console.log(estate);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>
          {estate.map((x: any, index: number) => (
            <li key={index}>
              <ReactMarkdown>{x.attributes.Description}</ReactMarkdown>
            </li>
          ))}
        </ul>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
