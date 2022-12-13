import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import logo from './logo.svg'
import './App.css'
import * as component from './component'
import ReactMarkdown from 'react-markdown'

function App(): any {
  const [estate, setEstate] = useState<any>([])
  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      const result = await component.readEstates()
      setEstate(result.data.data)
    }
    void fetchData()
  }, [])
  console.log(estate)

  return (
    <Box className="App" bg={'gradient.base'}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>
          {estate.map((x: any, index: number) => (
            <li key={index}>
              <img src={component.url + x.attributes.image.data[0].attributes.url} alt="" />
              <ReactMarkdown>{x.attributes.Description}</ReactMarkdown>
            </li>
          ))}
        </ul>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </Box>
  )
}

export default App
