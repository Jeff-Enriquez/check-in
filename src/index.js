import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from 'react-jss'
import jss from 'jss'
import preset from 'jss-preset-default'
import { SheetsRegistry } from 'react-jss'
import { JssProvider } from 'react-jss'
import { BrowserRouter } from 'react-router-dom'
import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: [
      'Work Sans:400,500,700',
      'Lato:400,500,700',
      'sans-serif',
      'Space Mono:400,500', 'monospace',
      'Source Code Pro:400',
    ]
  }
})

const setupJss = () => {
  jss.setup(preset())

  const sheetsRegistry = new SheetsRegistry()

  const globalStyleSheet = jss.createStyleSheet(
    {'@global': { 
        body: {
          margin: '0',
        },
    }}
  ).attach()

  sheetsRegistry.add(globalStyleSheet)

  return sheetsRegistry
}

const sheets = setupJss()

const theme = {
  primaryFontFamily: 'Work Sans, san-serif',
  secondaryFontFamily: 'Lato, san-serif',
  thirdFontFamily: 'Source Code Pro, monospace',
  primaryTextColor: 'black',
  secondaryTextColor: 'white',
  backgroundColor1: 'white',
  pagePadding: '20px'
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <JssProvider registry={sheets}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </JssProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
