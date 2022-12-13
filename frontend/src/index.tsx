import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

const theme = extendTheme({
  colors: {
    gradient: {
      base: 'linear-gradient(232.48deg, #1E3A8A -9.31%, #78350F 113.21%);',
    },
  },
  styles: {
    global: {
      body: {
        color: 'white',
      },
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
