/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import './App.css'
import style from './markdown-styles.module.css'
import * as component from './component'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'

function App(): JSX.Element {
  const [estate, setEstate] = useState([])
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const result = await component.readEstates()
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setEstate(result.data.data)
    }
    void fetchData()
  }, [])
  console.log(estate)

  return (
    <Box className="App" bg={'gradient.base'}>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>
          {estate.map((x: any, index: number) => (
            <li key={index}>
              <img
                // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
                src={component.url + x.attributes.image.data[0].attributes.url}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                alt={x.attributes.image.data[0].attributes.alternativeText}
              />
              <ReactMarkdown className={style.reactMarkDown} components={ChakraUIRenderer()}>
                {x.attributes.Description}
              </ReactMarkdown>
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
